function scrollLeft(btn) {
  const filmstrip = btn.parentElement;
  const images = btn.nextElementSibling;
  if (images) {
   images.scrollBy({
    left: -300,
    behavior: 'smooth'
    });
 }
}

function scrollRight(btn) {
  const images = btn.previousElementSibling;
  images.scrollBy({
  left: 300,
  behavior: 'smooth'
  });
}