const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = [];

const managerBuild = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name'
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
        name: 'officeNumber'
    }
]
const engineerBuild = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the engineer's id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the engineer's github username?",
        name: 'github'
    }
]
const internBuild = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the  intern's id?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "Where did the intern go to school?",
        name: 'school'
    }
]
const anotherOne = {
    type: 'list',
    message: "Would you like to add another team memeber?",
    choices: ["Engineer", "Intern", "No"],
    name: 'addFinish'
}

function addMore() {
    inquirer.prompt(anotherOne)
            .then((data) => {switch(data.addFinish) {
                case 'Engineer':
                    getEngineer();
                    break;
                case 'Intern':
                    getIntern();
                    break;
                case 'No':
                    console.log("Checkout your team!");
                    console.log(team);
                    writeToFile('./dist/data.json', generateJSON(team));
                    writeToFile('./dist/index.html', generateHTML(team));
                    break;
        }})
}

function getEngineer() {
    inquirer.prompt(engineerBuild).then((data) => {const engineer = new Engineer(data.name, data.id, data.email, data.github)
        console.log(engineer);
        team.push(engineer);
        addMore();
    });
}

function getIntern() {
    inquirer.prompt(internBuild).then((data) => {const intern = new Intern(data.name, data.id, data.email, data.school)
        console.log(intern);
        team.push(intern);
        addMore();
    });
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Done'))
}

function generateJSON(data) {
    return JSON.stringify(data);
}

function generateHTML(data) {
 return `<!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
     <link
       rel="stylesheet"
       href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
     />
     <link rel="stylesheet" href="./style/style.css"/>
     <title>My Team</title>
   </head>
 
   <body>
     <header>
         <h1>My Team</h1>
     </header>
     <div class="container" id="cardsContainer">
     </div>
    <script src="./script/script.js"></script>
   </body>
 </html>`
}

async function init(){
    console.log('Welcome to the team generator!');
    console.log('Please build your team.');
    await inquirer.prompt(managerBuild)
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        console.log(manager);
        team.push(manager);
        addMore();
    })
};

init();