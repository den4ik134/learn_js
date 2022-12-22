window.addEventListener('DOMContentLoaded', () => {

	// Tabs

	const tabsWrapper = document.querySelector('.tabheader__items');
	const tabItems = document.querySelectorAll('.tabheader__item');
	const tabContents = document.querySelectorAll('.tabcontent');

	function showActiveTabContent(i = 0) {
		tabContents.forEach(content => {
			content.style.display = 'none';
		});
		tabContents[i].style.display = 'block';
	}
	showActiveTabContent();

	function addActiveClassForTabItem(i = 0) {
		tabItems.forEach(tab => {
			tab.classList.remove('tabheader__item_active');
		});
		tabItems[i].classList.add('tabheader__item_active');
	}
	addActiveClassForTabItem();

	function changeTabContent(e) {
		if (e.target && e.target.getAttribute('data-tab')) {
			const index = Number(e.target.getAttribute('data-tab'));
			showActiveTabContent(index);
			addActiveClassForTabItem(index);
		}
	}

	tabsWrapper.addEventListener('click', changeTabContent);

	// Timer

	const deadline = '2022-12-31';

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date());
		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((t / (1000 * 60)) % 60);
		const seconds = Math.floor((t / 1000) % 60);

		return {
			'total': t,
			days,
			hours,
			minutes,
			seconds
		}
	}

	function addZero(num) {
		if (+num < 10 && +num >= 0) {
			return `0${num}`;
		} else if (+num < 0) {
			return `00`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector);
		const daysBlock = timer.querySelector('#days');
		const hoursBlock = timer.querySelector('#hours');
		const minutesBlock = timer.querySelector('#minutes');
		const secondsBlock = timer.querySelector('#seconds');
		const timerId = setInterval(updateClock, 1000);

		updateClock();
		
		function updateClock() {
			const {total, days, hours, minutes, seconds} = getTimeRemaining(endtime);

			if (total <= 0) {
				clearInterval(timerId);
			}

			daysBlock.textContent = addZero(days);
			hoursBlock.textContent = addZero(hours);
			minutesBlock.textContent = addZero(minutes);
			secondsBlock.textContent = addZero(seconds);
		}
	}

	setClock('.timer', deadline);

	// Modal

	const modalTriggers = document.querySelectorAll('[data-modal]');
	const modalWindow = document.querySelector('.modal');
	const closeModalBtn = document.querySelector('.modal__close');

	function modalIsOpen() {
		if (window.getComputedStyle(modalWindow).display !== 'block') {
			modalWindow.style.display = 'block';
			document.body.style.overflow = 'hidden';
		} else {
			modalWindow.style.display = 'none';
			document.body.style.overflow = '';
		}
	}

	modalTriggers.forEach(btn => {
		btn.addEventListener('click', modalIsOpen);
	});

	modalWindow.addEventListener('click', e => {
		console.log(e.target);
		if (e.target && (e.target.classList.contains('modal') || e.target === closeModalBtn)) {
			modalIsOpen();
		}
	});

	document.addEventListener('keydown', e => {
		if (window.getComputedStyle(modalWindow).display === 'block' && e.key === 'Escape') {
			modalIsOpen();
		}
	});
});