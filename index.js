function init() {}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const fs = require('fs');
const render = require(`./lib/shapes.js`);

const questions = [   
    {
        type: 'input',
        name: 'characters',
        message: 'please type in 3 characters you want on your logo:',
    },
    {
        type:'input',
        name: 'textColor',
        message: 'please type in the color or hex code you want for the text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'choose your shape:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'please type in the color or hex code you want for the shape color:',
    },


];

function runApp() {
    return inquirer.prompt(questions)
        .then((data) => {
        const logo = render(data)
        console.log(data);
        fs.writeFile(`./examples/${data.characters}.svg`, logo, function(err){
            if (err) {
                console.log(err)
            } else {console.log('success! go look at your logo!')
        }
        })}
        
    )}

runApp()  

