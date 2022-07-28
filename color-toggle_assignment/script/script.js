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
