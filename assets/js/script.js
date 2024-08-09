'use strict';
// STORING ELEMENTS IN VARIABLE
const btnShare = document.querySelector('.btn--share');
const contactContainer = document.querySelector('.contact');
const shareEL = document.querySelector('.share');
const contactDesktopContainer = document.querySelector('.contact-desktop');

const btnSharePopUp = document.querySelector('.pop-up-btn');
console.log(btnSharePopUp);

btnShare.addEventListener('click', function () {
	contactContainer.classList.add('hidden');
	shareEL.classList.remove('hidden');
	// contactDesktopContainer.remove('hidden');
	contactDesktopContainer.style.display = 'flex';
});

btnSharePopUp.addEventListener('click', function () {
	contactContainer.classList.remove('hidden');
	shareEL.classList.add('hidden');
	contactDesktopContainer.style.display = 'none';
});
