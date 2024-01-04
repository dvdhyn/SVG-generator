import inquirer from 'inquirer';
import fs from 'fs';

function generateSVG(text, textColor, shape, shapeColor) {
    const shapes = {
        circle: `<circle cx="50" cy="50" r="40" fill="${shapeColor}" />`,
        square: `<rect x="10" y="10" width="80" height="80" fill="${shapeColor}" />`,
        triangle: `<polygon points="50,10 90,90 10,90" fill="${shapeColor}" />`,
    };

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    ${shapes[shape]}
    <text x="50" y="55" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-size="16">${text}</text>
    </svg>`;
}

const prompt = [
    {
        type: 'input',
        name: 'text',
        message: 'Which letters will you use for your logo? (Max 3 characters):',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color will the text be?:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape will you use for your logo?:',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color will the shape be?:',
    },
];

inquirer.prompt(prompt).then(answers => {
    const svg = generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);

    fs.writeFile('./examples/logo.svg', svg, (err) => {
        if (err) throw err;
        console.log('SVG file has been saved!');
    });

}).catch(error => {
    console.error(error);
});

export { generateSVG, prompt };