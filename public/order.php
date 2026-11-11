<?php
/**
 * Print & Paint - Custom Order & Contact Form Processing API
 * Sends order notifications with attachments to contact@printnpaint.net
 */

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Use POST.']);
    exit;
}

// Destination email
$recipientEmail = 'contact@printnpaint.net';
$recipientName  = 'Print & Paint Studio';

// Anti-Spam Honeypot check
if (!empty($_POST['b_website'])) {
    // Silently succeed for bots
    echo json_encode(['success' => true, 'message' => 'Thank you!']);
    exit;
}

// Sanitize inputs
$name      = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email     = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$phone     = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
$projectId = isset($_POST['project_id']) ? trim(strip_tags($_POST['project_id'])) : 'Няма посочено ID';
$service   = isset($_POST['service']) ? trim(strip_tags($_POST['service'])) : 'General Inquiry';
$size      = isset($_POST['size']) ? trim(strip_tags($_POST['size'])) : 'Не е посочен';
$message   = isset($_POST['message']) ? trim(htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8')) : '';

// Validation
$errors = [];
if (empty($name)) {
    $errors[] = 'Моля, попълнете вашето име.';
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Моля, въведете валиден имейл адрес.';
}
if (empty($phone)) {
    $errors[] = 'Моля, въведете телефон за връзка.';
}
if (empty($message)) {
    $errors[] = 'Моля, опишете вашата идея или запитване.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => implode(' ', $errors)]);
    exit;
}

// Map service keys to friendly labels
$servicesMap = [
    'print-and-paint' => '3D Принтиране и Ръчно Оцветяване на фигурка',
    'print-only'      => 'Само 3D Принтиране (готов за боя)',
    'modeling'        => '3D Моделиране по идея',
    'laser'           => 'Лазерно гравиране / рязане',
    'other'           => 'Друг персонализиран проект'
];
$serviceLabel = isset($servicesMap[$service]) ? $servicesMap[$service] : $service;

// Subject (including Project ID if provided)
$idPrefix = !empty($projectId) && $projectId !== 'Няма посочено ID' ? "[{$projectId}] " : "";
$subject = "Нова поръчка {$idPrefix}от: {$name} - Print & Paint";

// Boundaries
$boundary = "==MULTIPART_BOUNDARY_" . md5(time()) . "==";

// Headers
$headers  = "From: Print & Paint Web <no-reply@printnpaint.net>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// HTML Body
$htmlBody = "
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #0b0e17; color: #f1f5f9; padding: 20px; }
  .box { max-width: 650px; margin: 0 auto; background: #131a29; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; }
  .header { background: linear-gradient(135deg, #00f0ff, #7000ff); padding: 24px; color: #06080d; }
  .header h1 { margin: 0; font-size: 24px; font-weight: 800; }
  .content { padding: 28px; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
  td { padding: 10px; border-bottom: 1px solid #1e293b; font-size: 15px; }
  td.label { width: 35%; color: #94a3b8; font-weight: 600; }
  td.val { color: #f8fafc; font-weight: bold; }
  .id-highlight { background: rgba(0, 240, 255, 0.15); color: #00f0ff; padding: 4px 8px; border-radius: 4px; font-family: monospace; border: 1px solid #00f0ff; }
  .msg-box { background: #0a0d16; border-left: 4px solid #00f0ff; padding: 16px; border-radius: 6px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; margin-top: 14px; }
  .footer { padding: 16px 28px; font-size: 12px; color: #64748b; background: #0b0e17; border-top: 1px solid #1e293b; text-align: center; }
</style>
</head>
<body>
<div class='box'>
  <div class='header'>
    <h1>Нова Поръчка · Print &amp; Paint</h1>
    <p style='margin: 4px 0 0 0; font-size: 14px;'>Получено през онлайн формата на printnpaint.net</p>
  </div>
  <div class='content'>
    <table>
      <tr><td class='label'>Референтен проект / ID:</td><td class='val'><span class='id-highlight'>{$projectId}</span></td></tr>
      <tr><td class='label'>Клиент:</td><td class='val'>{$name}</td></tr>
      <tr><td class='label'>Имейл:</td><td class='val'><a href='mailto:{$email}' style='color: #00f0ff;'>{$email}</a></td></tr>
      <tr><td class='label'>Телефон:</td><td class='val'><a href='tel:{$phone}' style='color: #ff9900;'>{$phone}</a></td></tr>
      <tr><td class='label'>Услуга:</td><td class='val'>{$serviceLabel}</td></tr>
      <tr><td class='label'>Размер / Мащаб:</td><td class='val'>{$size}</td></tr>
      <tr><td class='label'>Дата и час:</td><td class='val'>" . date('d.m.Y H:i:s') . "</td></tr>
    </table>

    <h3 style='margin-top: 20px; color: #f8fafc; font-size: 16px;'>Описание на проекта:</h3>
    <div class='msg-box'>{$message}</div>
  </div>
  <div class='footer'>
    Print &amp; Paint Studio · София, България · <a href='https://printnpaint.net' style='color: #94a3b8;'>printnpaint.net</a>
  </div>
</div>
</body>
</html>
";

// Multipart Body Assembly
$emailMessage = "--{$boundary}\r\n";
$emailMessage .= "Content-Type: text/html; charset=UTF-8\r\n";
$emailMessage .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$emailMessage .= $htmlBody . "\r\n\r\n";

// Handle File Attachments
$allowedExtensions = ['stl', 'obj', '3mf', 'step', 'jpg', 'jpeg', 'png', 'webp', 'pdf', 'doc', 'docx', 'txt'];
$maxFileSize = 10 * 1024 * 1024; // 10MB total
$totalSize = 0;

if (!empty($_FILES['files']['name'][0])) {
    $fileCount = count($_FILES['files']['name']);

    for ($i = 0; $i < $fileCount; $i++) {
        if ($_FILES['files']['error'][$i] === UPLOAD_ERR_OK) {
            $fileName = basename($_FILES['files']['name'][$i]);
            $fileSize = $_FILES['files']['size'][$i];
            $tmpPath  = $_FILES['files']['tmp_name'][$i];
            $ext      = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

            $totalSize += $fileSize;
            if ($totalSize > $maxFileSize) {
                break; // Skip exceeding files
            }

            if (in_array($ext, $allowedExtensions)) {
                $fileData = file_get_contents($tmpPath);
                $fileContent = chunk_split(base64_encode($fileData));

                $emailMessage .= "--{$boundary}\r\n";
                $emailMessage .= "Content-Type: application/octet-stream; name=\"{$fileName}\"\r\n";
                $emailMessage .= "Content-Description: {$fileName}\r\n";
                $emailMessage .= "Content-Disposition: attachment; filename=\"{$fileName}\"; size={$fileSize};\r\n";
                $emailMessage .= "Content-Transfer-Encoding: base64\r\n\r\n";
                $emailMessage .= $fileContent . "\r\n\r\n";
            }
        }
    }
}

$emailMessage .= "--{$boundary}--";

// Send main mail to studio
$mailSent = @mail($recipientEmail, $subject, $emailMessage, $headers);

// Send automatic confirmation email to customer
$autoSubject = "Получихме вашето запитване за поръчка - Print & Paint";
$autoHeaders  = "From: Print & Paint <contact@printnpaint.net>\r\n";
$autoHeaders .= "Reply-To: contact@printnpaint.net\r\n";
$autoHeaders .= "MIME-Version: 1.0\r\n";
$autoHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";

$autoBody = "
<!DOCTYPE html>
<html>
<head><meta charset='utf-8'></head>
<body style='font-family: sans-serif; background: #0b0e17; color: #f1f5f9; padding: 24px;'>
  <div style='max-width: 580px; margin: 0 auto; background: #131a29; padding: 30px; border-radius: 12px; border: 1px solid #1e293b;'>
    <h2 style='color: #00f0ff; margin-top: 0;'>Благодарим Ви, {$name}!</h2>
    <p style='color: #94a3b8; line-height: 1.6;'>
      Вашето запитване за <strong>{$serviceLabel}</strong> беше прието успешно от екипа на <strong>Print &amp; Paint</strong>.
    </p>
    <p style='color: #94a3b8; line-height: 1.6;'>
      Ще прегледаме детайлите и ще се свържем с Вас в рамките на 24 часа с точна калкулация за време и цена.
    </p>
    <div style='margin: 24px 0; padding: 16px; background: #0a0d16; border-radius: 8px; border: 1px solid #1e293b;'>
      <div style='color: #f8fafc; font-weight: bold; margin-bottom: 6px;'>Директен контакт:</div>
      <div style='color: #00f0ff;'>Пейо Видев: +359 898 624 880</div>
      <div style='color: #ff9900;'>Христо Станилов: +359 885 852 169</div>
      <div style='color: #94a3b8;'>Имейл: contact@printnpaint.net</div>
    </div>
    <p style='font-size: 13px; color: #64748b; margin-bottom: 0;'>
      С уважение,<br>Екипът на Print &amp; Paint
    </p>
  </div>
</body>
</html>
";

@mail($email, $autoSubject, $autoBody, $autoHeaders);

echo json_encode([
    'success' => true,
    'message' => 'Благодарим Ви! Вашето запитване беше изпратено успешно към contact@printnpaint.net. Ще се свържем с Вас в най-кратък срок.'
]);
?>
