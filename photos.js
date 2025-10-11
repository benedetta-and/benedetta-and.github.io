function scrollLeft(btn) {
  console.log('Left button clicked'); 
  const filmstrip = btn.parentElement.querySelector('.images');
  filmstrip.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight(btn) {
  console.log('Right button clicked');
  const filmstrip = btn.parentElement.querySelector('.images');
  filmstrip.scrollBy({ left: 300, behavior: 'smooth' });
}