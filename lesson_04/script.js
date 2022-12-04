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

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5 //250 50
        },
        {
            width: 15,
            length: 7 //525 105
        },
        {
            width: 20,
            length: 5	//500 100
        },
        {
            width: 8,
            length: 10	//400 80
        }
    ],
    height: 5, // 1675 
    moneyPer1m3: 30,
    budget: 50000
};

