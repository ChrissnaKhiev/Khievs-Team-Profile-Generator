const inquirer = require('inquirer');
const fs = require('fs');

const teamBuilder = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'manager'
    },
    {
        type: 'input',
        message: "What is the team mangager's id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'phone'
    }
]


function init(){
    console.log('Welcome to the team generator!');
    console.log('Please build your team.');
    inquirer.prompt(teamBuilder)
    .then()
}

init();