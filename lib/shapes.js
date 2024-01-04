class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        throw new Error("render method must be implemented in child classes");
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="50,10 90,90 10,90" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square, Triangle };
