function scrollLeft(btn) {
  const images = btn.nextElementSibling;
  images.scrollBy({
  left: -300,
  behavior: 'smooth'
  });
}

function scrollRight(btn) {
  const images = btn.previousElementSibling;
  images.scrollBy({
  left: 300,
  behavior: 'smooth'
  });
}