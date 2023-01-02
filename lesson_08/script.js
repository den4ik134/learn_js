'use strict'

class Rectangle {
	constructor(height, width) {
		this.width = width;
		this.height = height;
	}

	calcArea() {
		return this.height * this.width;
	}
}

class ColoredRect extends Rectangle {
	constructor(height, width, color) {
		super(height, width);
		this.color = color;
	}

	whatAColor() {
		return `This is a ${this.color} rectangle with height: ${this.height} and width: ${this.width}!`;
	}
}

const rect = new ColoredRect(10, 15, 'blue');

console.log(rect.calcArea());
console.log(rect.whatAColor());
