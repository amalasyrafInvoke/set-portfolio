var navBarNav = document.getElementById('navbarNav');
var navBarList = document.getElementById('menu-list');
var navbarBrand = document.getElementById('navbarBrand');
var menuImg = document.getElementById('menuImage');
var contentHolder = document.getElementById('content-holder');
var isMenuActive = false;

function toggleMenu() {
  if (isMenuActive) {
    navBarList.classList.remove('animate__fadeInRight');
    navBarList.classList.add('animate__animated', 'animate__fadeOutRight');
    menuImg.classList.remove('animate__animated', 'animate__fadeInTopRight');
    menuImg.classList.add('animate__animated', 'animate__fadeOutTopRight');
    setTimeout(() => {
      navBarNav.style.display = 'none';
      navbarBrand.style.display = 'block';
    }, 750);
    document.querySelector('body').style.overflow = 'auto';
    document.querySelector('html').style.overflow = 'auto';
    isMenuActive = false;
    return;
  } else {
    navBarNav.style.display = 'flex';
    navBarList.classList.remove('animate__fadeOutRight');
    navBarList.classList.add('animate__animated', 'animate__fadeInRight');
    menuImg.classList.remove('animate__animated', 'animate__fadeOutTopRight');
    menuImg.classList.add('animate__animated', 'animate__fadeInTopRight');
    navbarBrand.style.display = 'none';
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('html').style.overflow = 'hidden';
    isMenuActive = true;
    return;
  }
}