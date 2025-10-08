function scrollLeft(btn) {
  const filmstrip = btn.parentElement.querySelector('.images');
  filmstrip.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight(btn) {
  const filmstrip = btn.parentElement.querySelector('.images');
  filmstrip.scrollBy({ left: 300, behavior: 'smooth' });
}