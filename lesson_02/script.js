const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: Number(numberOfFilms) || 0,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

if (personalMovieDB.count < 10) {
	console.log('You watch a few films!');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
	console.log('You a classic viewer');
} else if (personalMovieDB.count > 30) {
	console.log('You are cinemaman');
} else {
	console.log('Error');
}

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', '');
	const b = prompt('На сколько его оцените?', '');

	if ((a === null || a.length === 0 || a.length > 50) || (b === null || b.length === 0)) {
		i--;
	} else {
		personalMovieDB.movies[a] = b;
	}
}