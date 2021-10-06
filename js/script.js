var navBarNav = document.getElementById('navbarNav');
var navBarList = document.getElementById('menu-list');
var navbarBrand = document.getElementById('navbarBrand');
var menuImg = document.getElementById('menuImage');
var contentHolder = document.getElementById('content-holder');
var isMenuActive = false;
var isScrolling = false;

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
    // document.querySelector('body').style.overflow = 'auto';
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
    // document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('html').style.overflow = 'hidden';
    isMenuActive = true;
    return;
  }
}

scrollStop(() => {
  navbarBrand.style.opacity = '1';
})

function scrollStop (callback, refresh = 100) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Setup scrolling variable
	let isScrolling;

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {

    navbarBrand.style.opacity = '0';
    navbarBrand.style.transition = 'all 500ms';

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(callback, refresh);

	},false);

}