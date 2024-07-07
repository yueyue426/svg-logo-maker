// Import classes shapes
const { Triangle, Circle, Square } = require('./shapes.js');

// Tests render methods of the three classes
test('Testing Triangle class render method...', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Testing Circle class render method...', () => {
    const shape = new Circle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="yellow" />');
});

test('Testing Square class render method...', () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="red" />');
});
