; (() => {
  const sliders = document.querySelectorAll('.slide');
  const arrowRight = document.querySelector('#arrow-right');
  const arrowLeft = document.querySelector('#arrow-left');
  let current = 0;

  // Clear all images
  const reset = () => sliders.forEach(slide => slide.style.display = 'none')

  // Initialize the slider
  const start = () => {
    reset();
    sliders[0].style.display = 'flex';
  }

  // Show prev
  const slideLeft = () => {
    reset();
    sliders[current - 1].style.display = 'flex';
    current--;
  }

  // Show next
  const slideRight = () => {
    reset();
    sliders[current + 1].style.display = 'flex';
    current++;
  }

  // Left arrow click
  arrowLeft.addEventListener('click', () => {
    if (current === 0) current = sliders.length;
    slideLeft();
  })

  // Right arrow click
  arrowRight.addEventListener('click', () => {
    if (current === sliders.length - 1) current = -1;
    slideRight();
  })

  start();
})()
