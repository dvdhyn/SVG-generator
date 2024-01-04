class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        throw new Error("render method must be implemented in child classes");
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    render() {
        return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color, sideLength) {
        super(color);
        this.sideLength = sideLength;
    }

    render() {
        return `<rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }

    render() {
        return `<polygon points="0,0 ${this.base},0 ${this.base / 2},${this.height}" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square, Triangle };
