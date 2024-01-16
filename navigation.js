const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.style.backgroundColor = '#555';
    nav.style.transition = 'background-color 0.3s ease';
  } else {
    nav.style.backgroundColor = 'transparent';
    nav.style.transition = 'background-color 0.3s ease';
  }
});

nav.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'A') {
    e.target.style.color = '#ccc';
  }
});

nav.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'A') {
    e.target.style.color = '#fff';
  }
});