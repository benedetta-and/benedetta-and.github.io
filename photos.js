function scrollImageLeft(btn) {
  const project = btn.closest('.project');
  const images = project.querySelector('.images');
  if (images) {
   images.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
  updateArrows(project);
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
  updateArrows(project);
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
// Wait for all images to load before initial arrow update
    const imgs = images.querySelectorAll('img');
    let loaded = 0;
     function checkAndUpdate() {
      // Use requestAnimationFrame to ensure layout is updated
      requestAnimationFrame(() => updateArrows(project));
    }

    if (imgs.length === 0) {
     checkAndUpdate();
    } else {
      imgs.forEach(img => {
        if (img.complete) {
          loaded++;
        } else {
          img.addEventListener('load', () => {
            loaded++;
            if (loaded === imgs.length) {
              checkAndUpdate();
            }
          });
        }
      });
      // If all images were already loaded
      if (loaded === imgs.length) {
        checkAndUpdate();
      }
    }
       // Also update arrows after window resize
    window.addEventListener('resize', checkAndUpdate);
  }
});
