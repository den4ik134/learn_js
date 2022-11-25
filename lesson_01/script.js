const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: Number(numberOfFilms) || 0,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

const firstLastMovie = prompt('Один из последних просмотренных фильмов?', '');
const firstLastRating = prompt('На сколько его оцените?', '');
const secondLastMovie = prompt('Один из последних просмотренных фильмов?', '');
const secondLastRating = prompt('На сколько его оцените?', '');

personalMovieDB.movies[firstLastMovie] = firstLastRating;
personalMovieDB.movies[secondLastMovie] = secondLastRating;

