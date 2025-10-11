function scrollLeft(btn) {
  const project = btn.closest('.project');
  const images = project.querySelector('.images');
  if (images) {
   images.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
 }
}

function scrollRight(btn) {
  const project = btn.closest('.project');
  const images = project.querySelector('.images');
  if (images) {
   images.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
 }
}