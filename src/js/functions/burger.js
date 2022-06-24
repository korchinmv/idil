const buttonMenu = document.querySelector('.burger');
const menuActive = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link');
const bodyLock = document.querySelector('body');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.header__search-input');
const inputBtn = document.querySelector('.header__input-btn');


buttonMenu.onclick = function () {
	menuActive.classList.toggle('menu--active');
	buttonMenu.classList.toggle('burger--active');
	bodyLock.classList.toggle('lock');
};

menuLink.forEach(el => {
	el.addEventListener('click', (e) => {
		menuActive.classList.remove('menu--active');
		buttonMenu.classList.remove('burger--active');
		bodyLock.classList.remove('lock');
		searchInput.classList.remove('header__search-input--active');
	});
});

inputBtn.addEventListener('click', (e) => {
	menuActive.classList.remove('menu--active');
});

searchBtn.onclick = function () {
	searchInput.classList.toggle('header__search-input--active');
};

inputBtn.onclick = function () {
	searchInput.classList.remove('header__search-input--active');
	buttonMenu.classList.remove('burger--active');
};

buttonMenu.addEventListener('click', (e) => {
	searchInput.classList.remove('header__search-input--active');
});