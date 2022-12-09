/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value; +
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки +

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно) +

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: +
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту + */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против всех"
    ]
};

const promoAdvs = document.querySelectorAll('.promo__adv img');
const promoGenre = document.querySelector('.promo__genre');
const promoBg = document.querySelector('.promo__bg');
const movieList = document.querySelector('.promo__interactive-list');
const form = document.querySelector('.add');
const addInput = form.querySelector('.adding__input');
const checkInput = form.querySelector('.check__input');

promoAdvs.forEach(item => item.remove());
promoGenre.textContent = 'драма';
promoBg.style.backgroundImage = 'url("./img/bg.jpg")';

function sortMovieList(data) {
	movieList.textContent = '';
	data.sort().forEach((item, i) => {
		const li = document.createElement('li');
		const movieName = item.length < 21 ? item : item.slice(0, 22).trim() + '...';
		li.innerHTML = `
			<li class="promo__interactive-item">${i + 1}. ${movieName}
				<div data-index="${i}" class="delete"></div>
			</li>
		`;
		movieList.append(li);
	});
}
sortMovieList(movieDB.movies);

movieList.addEventListener('click', (e) => {
	if (e.target.getAttribute('data-index')) {
		const index = Number(e.target.getAttribute('data-index'));
		const oldArr = [...movieDB.movies];
		const newArr = [...oldArr.slice(0, index), ...oldArr.slice(index + 1)];
		movieDB.movies = [...newArr];
		sortMovieList(movieDB.movies);
	}

});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	movieDB.movies.push(addInput.value);
	if (checkInput.checked) {
		console.log("Добавляем любимый фильм");
	}
	sortMovieList(movieDB.movies);

	addInput.value = '';
	checkInput.checked = false;
});