function scrollImageLeft(btn) {
  const project = btn.closest('.project');
  const images = project.querySelector('.images');
  if (images) {
   images.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
 }
}

function scrollImageRight(btn) {
  const project = btn.closest('.project');
  const images = project.querySelector('.images');
  if (images) {
   images.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
 }
}

function updateArrows(project) {
  const images = project.querySelector('.images');
  const leftArrow = project.querySelector('.arrow.left');
  const rightArrow = project.querySelector('.arrow.right');
  if (!images || !leftArrow || !rightArrow) return;

  // Hide left arrow if at start
  if (images.scrollLeft <= 0) {
    leftArrow.style.opacity = "0";
    leftArrow.style.pointerEvents = "none";
  } else {
    leftArrow.style.opacity = "1";
    leftArrow.style.pointerEvents = "auto";
  }

  // Hide right arrow if at end
  if (images.scrollLeft + images.clientWidth >= images.scrollWidth - 1) {
    rightArrow.style.opacity = "0";
    rightArrow.style.pointerEvents = "none";
  } else {
    rightArrow.style.opacity = "1";
    rightArrow.style.pointerEvents = "auto";
  }
}

document.querySelectorAll('.project').forEach(project => {
  const images = project.querySelector('.images');
  if (images) {
    images.addEventListener('scroll', () => updateArrows(project));
    // Initial state on page load
    updateArrows(project);
  }
});
