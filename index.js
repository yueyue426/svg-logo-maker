// inquire shapes.js file
const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/shapes.js');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter text for the logo (up to 3 characters): ',
        name: 'text',
        validate: input => input.length <=3 || 'The logo must be 3 characters.'
    },
    {
        type: 'input',
        message: 'What\'s your favorite text color?',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape would you like to use?',
        name: 'shape',
        choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        message: 'What\'s your favorite shape color?',
        name: 'shapeColor',
    }
];

// Create a function to write to SVG file called logo.svg
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err? console.error(err) : console.log("Generated logo.svg successfully!");
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        let shape = responses.shape;
        switch (shape) {
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Square':
                shape = new Square();
                break;
            case 'Circle':
                shape = new Circle();
                break;
        }

        shape.setColor(responses.shapeColor);
        const data = 
        `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="grey"/>
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${responses.textColor}">${responses.text}</text>
        </svg>`
        // Write file to logo.svg
        writeToFile('logo.svg', data);
    });
}

// Function call to initialize app
init();