document.addEventListener('scroll', function() {
  const introSection = document.getElementById('intro');
  const contentSection = document.getElementById('content');
  const image = document.querySelector('#picture');
  const description = document.querySelector('.description');
  
  const introHeight = introSection.offsetHeight;
  const scrollY = window.scrollY;
  
  if (scrollY < introHeight) {
    const scrollRatio = scrollY / introHeight;
    image.style.width = `${50 + scrollRatio * 50}%`;
    description.style.opacity = `${1 - scrollRatio}`;
  } else {
    image.style.width = '100%';
    description.style.opacity = '0';
  }

  if (scrollY > introHeight / 2) {
    contentSection.classList.add('visible');
  } else {
    contentSection.classList.remove('visible');
  }
});
