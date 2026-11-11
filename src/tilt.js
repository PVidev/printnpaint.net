// Interactive 3D Card Tilt & Specular Light Reflection
export function apply3DTilt(elements, maxTilt = 12) {
  elements.forEach((card) => {
    let bounds;

    // Check if sheen already exists
    let sheen = card.querySelector('.card-sheen');
    if (!sheen) {
      sheen = document.createElement('div');
      sheen.className = 'card-sheen';
      card.appendChild(sheen);
    }

    function mouseMove(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };

      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      const rotateX = -(center.y / (bounds.height / 2)) * maxTilt;
      const rotateY = (center.x / (bounds.width / 2)) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;

      // Dynamic light reflection sheen
      const sheenX = (leftX / bounds.width) * 100;
      const sheenY = (topY / bounds.height) * 100;
      sheen.style.background = `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 65%)`;
      sheen.style.opacity = '1';
    }

    function mouseEnter() {
      bounds = card.getBoundingClientRect();
      card.style.transition = 'transform 0.1s ease-out';
      document.addEventListener('mousemove', mouseMove);
    }

    function mouseLeave() {
      document.removeEventListener('mousemove', mouseMove);
      card.style.transition = 'transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      sheen.style.opacity = '0';
    }

    card.addEventListener('mouseenter', mouseEnter);
    card.addEventListener('mouseleave', mouseLeave);
  });
}
