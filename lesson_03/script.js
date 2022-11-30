let numberOfFilms;

function start() {
	numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

	while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: Number(numberOfFilms) || 0,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('You watch a few films!');
	} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
		console.log('You a classic viewer');
	} else if (personalMovieDB.count > 30) {
		console.log('You are cinemaman');
	} else {
		console.log('Error');
	}
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', '');
		const b = prompt('На сколько его оцените?', '');
	
		if (a === null || a === '' || a.length > 50 || b === null || b === '') {
			i--;
		} else {
			personalMovieDB.movies[a] = b;
		}
	}
}

function showMyDB() {
	if (!personalMovieDB.private) {
		console.log(personalMovieDB);
	}
}

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');

		if (genre === null || genre === '') {
			i--;
		} else {
			personalMovieDB.genres.push(genre);
		}
	}
}


