function scrollImagesLeft(btn) {
  const section = btn.closest('.project');
  const images = section.querySelector('.images');
  if (!images) return;
  const viewport = images.clientWidth;
  const amount = Math.round(viewport / 2); // adjust scroll step
  // if at start, jump to end (loop)
  if (images.scrollLeft <= 0) {
    images.scrollTo({ left: images.scrollWidth - images.clientWidth, behavior: 'smooth' });
    return;
 }
  images.scrollBy({ left: -amount, behavior: 'smooth' });

}

function scrollImagesRight(btn) {
  const section = btn.closest('.project');
  const images = section.querySelector('.images');
  if (!images) return;

  const viewport = images.clientWidth;
  const amount = Math.round(viewport / 2);
  const atEnd = Math.ceil(images.scrollLeft + images.clientWidth) >= images.scrollWidth;
  
   if (atEnd) {
    // loop back to start
    images.scrollTo({ left: 0, behavior: 'smooth' });
    return;
  }
  images.scrollBy({ left: amount, behavior: 'smooth' });
 }
