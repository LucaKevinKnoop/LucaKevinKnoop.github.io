const menuTag = document.querySelector('section.menu-wrapper');

const buttonTag = document.querySelector('div.menu-button');

let toggleMenu = false;

buttonTag.addEventListener('click', function () {
  if (toggleMenu == false) {
    menuTag.style.display = "block";
    toggleMenu = true;
  }
  else {
    menuTag.style.display = "none";
    toggleMenu = false;
  }
});
