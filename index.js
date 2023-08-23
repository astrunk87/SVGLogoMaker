const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'characters',
        message: 'please type in 3 characters you want on your logo',
    ,}
    {
        type:'input',
        name: 'textColor'
        message: 'please type in the color or hex code you want for the text color',
    },
    {
        type: 'choice',
        name: 'shape',
        message: 'circle, triangle, square',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'please type in the color or hex code you want for the shape color',
    },


]