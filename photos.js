function scrollLeft(btn) {
  const section = btn.closest('.project');
  const images = section.querySelector('.images');
  if (images) {
   images.scrollBy({
    left: -300,
    behavior: 'smooth'
    });
 }
}

function scrollRight(btn) {
  const section = btn.closest('.project');
  const images = section.querySelector('.images');
  if (images) { 
   images.scrollBy({
    left: 300,
    behavior: 'smooth'
   });
 }
}