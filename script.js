const parallaxContainer = document.querySelector('.parallax-container');
const layers = document.querySelectorAll('.parallax-layer');

parallaxContainer.addEventListener('mousemove', (event) => {
  const centerX = parallaxContainer.offsetWidth / 2;
  const centerY = parallaxContainer.offsetHeight / 2;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const displacementX = (mouseX - centerX) / centerX;
  const displacementY = (mouseY - centerY) / centerY;

  layers.forEach((layer, index) => {
    const speed = index + 1; // Increase speed for layers further back
    const translateX = displacementX * speed * 20; // Adjust movement amount (20px for this example)
    const translateY = displacementY * speed * 20;

    layer.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
});
