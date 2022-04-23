//cached elements
const darkIcon = document.querySelector('.dark-icon'); 
const lightIcon = document.querySelector('.light-icon');
const links = document.querySelector('.links');
const footerLinks = document.querySelector('.footer-links');
const nav = document.querySelector('nav');

//event listeners
darkIcon.addEventListener('click', toggleDark);
lightIcon.addEventListener('click', toggleLight);

//functions
function toggleDark(){
darkIcon.style.display = 'none';
lightIcon.classList.remove('light-icon');
document.body.style.backgroundColor = "#212224";
document.body.style.color = "#fff";
links.classList.add('invert');
footerLinks.classList.add('invert');
nav.classList.add('dark-nav')
}

function toggleLight(){
  lightIcon.classList.add('light-icon');
  darkIcon.style.display = 'block';
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#000";
  links.classList.remove('invert');
  footerLinks.classList.remove('invert');
  nav.classList.remove('dark-nav')
}

