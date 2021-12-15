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


// ***FARBSPEKTAKEL der Drogenheadline***
// headline auswählen:
const drogenHead1Tag = document.querySelector('h1.drogen-headline1');
const drogenHead2Tag = document.querySelector('h1.drogen-headline3');

// Interval spielt function "drogenColor" alle 300ms ab
setInterval(drogenColor, 300);

// Variable fürs Hochzählen innerhalb der function:
let varDrogenColor = 1;

// Eigentliche Funktion:
// Schleife, die die vier Farben nacheinander durchgeht:
function drogenColor() {
  if (varDrogenColor == 1) {
    drogenHead1Tag.style.color = "#C8EE70";
    drogenHead2Tag.style.color = "#C8EE70";
    varDrogenColor = 2;
  }
  else if (varDrogenColor == 2) {
    drogenHead1Tag.style.color = "#C76FF8";
    drogenHead2Tag.style.color = "#C76FF8";
    varDrogenColor = 3;
  }
  else if (varDrogenColor == 3) {
    drogenHead1Tag.style.color = "#05BFAF";
    drogenHead2Tag.style.color = "#05BFAF";
    varDrogenColor = 4;
  }
  else {
    drogenHead1Tag.style.color = "#FA6458";
    drogenHead2Tag.style.color = "#FA6458";
    varDrogenColor = 1;
  }
};
// ***FARBSPEKTAKEL der Drogenheadline***
