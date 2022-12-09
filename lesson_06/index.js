// Урок по рекурсивним функціям

const students = {
	js: [{
		name: 'John',
		progress: 100
	}, {
		name: 'Ivan',
		progress: 60
	}],

	html: {
		basic: [{
			name: 'Peter',
			progress: 20
		}, {
			name: 'Ann',
			progress: 18
		}],

		pro: [{
			name: 'Sam',
			progress: 10
		}]
	}
};

// Функція, що використовує в собі перебір об'єкта через цикл. 
// Вона залежна від певної структури об'єкта, і якщо структура зміниться - функція зламається.
function getTotalProgressByIteration(data) {
	let total = 0;
	let students = 0;

	for (let course of Object.values(data)) {
		if (Array.isArray(course)) {
			students += course.length;

			for (let i = 0; i < course.length; i++) {
				total += course[i].progress;
			}
		} else {
			for (let subCourse of Object.values(course)) {
				students += subCourse.length;

				for (let i = 0; i < subCourse.length; i++) {
					total += subCourse[i].progress;
				}
			}
		}
	}

	return total / students;
}

console.log(getTotalProgressByIteration(students));


// Рекурсивна функція, не залежить від структури об'єкта.
function getTotalProgressByRecursion(data) {
	// Перевірка на базове значення. Коли функція попадає в цей блок, то завершує свою роботу
	// і починає повертати всі розраховані значення.
	if (Array.isArray(data)) {
		let total = 0;

		for (let i = 0; i < data.length; i++) {
			total += data[i].progress;
		}

		return [total, data.length];
	} 
	// Якщо значення що перевіряється не відповідає попередній умові
	// тоді виконується наступний блок коду, в якому проводиться розрахунок і повторний виклик функції
	else {
		let total = [0, 0];

		for (let subData of Object.values(data)) {
			const subDataArr = getTotalProgressByRecursion(subData);
			total[0] += subDataArr[0];
			total[1] += subDataArr[1]; 
		}

		return total;
	} 
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);

