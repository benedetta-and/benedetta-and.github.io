function scrollLeft(btn) {
  const filmstrip = btn.parentElement;
  const images = filmstrip.querySelector('.images');
  if (images) {
   images.scrollBy({
    right: 300,
    behavior: 'smooth'
    });
 }
}

function scrollRight(btn) {
  const filmstrip = btn.parentElement;
  const images = filmstrip.querySelector('.images');
  if (images) { 
   images.scrollBy({
    left: 300,
    behavior: 'smooth'
   });
 }
}