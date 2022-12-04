const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false,
	start: function() {
		this.count = Number(prompt('Сколько фильмов вы уже посмотрели?', ''));

		while(this.count === '' || this.count === null || isNaN(this.count)) {
			this.count = Number(prompt('Сколько фильмов вы уже посмотрели?', ''));
		}
	},
	detectPersonalLevel: function() {
		if (this.count < 10) {
			console.log('You watch a few films!');
		} else if (this.count >= 10 && this.count <= 30) {
			console.log('You a classic viewer');
		} else if (this.count > 30) {
			console.log('You are cinemaman');
		} else {
			console.log('Error');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', '');
			const b = Number(prompt('На сколько его оцените?', ''));
		
			if (a === null || a === '' || a.length > 50 || b === null || b === '' || isNaN(b)) {
				i--;
			} else {
				personalMovieDB.movies[a] = b;
			}
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i}?`, '');
	
			if (genre === null || genre === '') {
				i--;
			} else {
				this.genres.push(genre);
			}
		}

		this.genres.forEach((item, i) => {
			console.log(`Любимый жанр №${i + 1} - это ${item}`);
		});
	},
	toggleVisibleMyDB: function() {
		if (this.private) {
			this.private = false;
		} else {
			this.private = true;
		}
	},
	showMyDB: function() {
		if (!this.private) {
			console.log(personalMovieDB);
		}
	}
};

