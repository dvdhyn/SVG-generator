var { Circle, Square, Triangle } = require('./shapes');

test('Circle should render correctly with specified color', () => {
    const shape = new Circle('red');
    expect(shape.render()).toEqual('<circle cx="50" cy="50" r="40" fill="red" />');
});

test('Square should render correctly with specified color', () => {
    const shape = new Square('green');
    expect(shape.render()).toEqual('<rect x="10" y="10" width="80" height="80" fill="green" />');
});

test('Triangle should render correctly with specified color', () => {
    const shape = new Triangle('blue');
    expect(shape.render()).toEqual('<polygon points="50,10 90,90 10,90" fill="blue" />');
});