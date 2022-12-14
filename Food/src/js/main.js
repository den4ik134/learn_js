window.addEventListener('DOMContentLoaded', () => {
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
});