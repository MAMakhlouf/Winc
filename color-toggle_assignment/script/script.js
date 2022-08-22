//Checks the status of the nav menu opened or closed?
let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebar.style.visibility = "visible";
    getSidebar.style.width = "452px";
    getSidebarTitle.style.opacity = "0.5";

    let arrayLenght = getSidebarLinks.length;
    for (let i = 0; i < arrayLenght.lenght; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }
    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = "0px";
    getSidebarTitle.style.opacity = "0";

    let arrayLenght = getSidebarLinks.length;
    for (let i = 0; i < arrayLenght.lenght; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebar.style.visibility = "hidden";
    toggleNavStatus = false;
  }
};

const white = document.getElementById("white");
white.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});
const red = document.getElementById("red");
red.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});
const blue = document.getElementById("blue");
blue.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});
const yellow = document.getElementById("yellow");
yellow.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

const navbar = document.getElementById("nav");
navbar.addEventListener("click", function () {
  navbar.style.visibility = "hidden";
});
