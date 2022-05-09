function showTheMenu() {
  document.getElementById('overlay').style.display = 'flex';
  document.getElementById('overlay-bg').style.display = 'block';
  document.getElementById('header').style.filter = 'blur(6px)';
  document.getElementById('profile').style.filter = 'blur(6px)';
  document.getElementById('projects').style.filter = 'blur(6px)';
}

function hideTheMenu() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('overlay-bg').style.display = 'none';
  document.getElementById('header').style.filter = 'blur(0px)';
  document.getElementById('profile').style.filter = 'blur(0px)';
  document.getElementById('projects').style.filter = 'blur(0px)';
}

const navElement = document.getElementById('nav');
navElement.addEventListener('click', showTheMenu);

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', hideTheMenu);

const menuLinks = document.getElementsByClassName('menu-link');
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', hideTheMenu);
}
