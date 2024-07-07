// Shape class includes feature set color function
class Shape {
    constructor() {
        this.shapeColor = '';
    }
    setColor(color) {
        this.shapeColor = color;
    }
};

// Triangle class and will inheritance from Shape
class Triangle extends Shape {
    render() {
        // Render the triangle
        const points = "150, 18 244, 182 56, 182"; // Coordinates for the triangle vertices
        return `<polygon points="${points}" fill="${this.shapeColor}" />`;
    }
};

// Circle class and will inheritance from Shape
class Circle extends Shape {
    render() {
        // Render the triangle centered in the canvas of 300 x 200
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
};

// Square class and will inheritance from Shape
class Square extends Shape {
    render() {
        // Render the triangle
        return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />`;
    }
};

// Exports Triangle, Circle, and Square classes
module.exports = {
    Triangle: Triangle,
    Circle: Circle,
    Square: Square
};