# Simple Logo Generator
 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
Simple Logo Generator is a command-line application that allows freelance web developers to create simple SVG logos for their projects without the need to pay for a graphic designer. The application uses Inquirer for user input and Jest for unit testing.

## Table of Contents

- [Usage](#usage)
- [Tests](#tests)
- [Examples](#examples)
- [License](#license)

## Usage
To generate a logo, run the following command in the terminal:
```
node index.js
```
You will be prompted to enter the following information:
- Test for the logo (up to 3 characters)
- Test color (color keyword or hexadecimal number)
- Shape preferred (triangle, circle, or square)
- Shape color (color keyword or hexadecimal number)

After entering the required information, an SVG file named logo.svg will be created in the root directory, and the output text "Generated logo.svg successfully!" will be printed in the command line to indicated the logo is generated successfully.

## Tests

To run the tests, run the following command in the terminal:
```
npm run test
```

## Examples
Example SVG files created with the app can be found in the examples directory

## License
This project is licensed under the [MIT](https://opensource.org/licenses/MIT)  license.

## Mock-Up
![Mock-Up](./examples/10-oop-homework-demo.png)