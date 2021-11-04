const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateContent = require('./src/templateHelper')

let employees = [];

const manager_questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
        },
    {
        type: 'input',
        name: 'office',
        message: "What is the team manager's office number?",
    },
  ];

const engineer_questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?",
        },
    {
        type: 'input',
        name: 'github',
        message: "What is your engineer's Github username?",
    },
  ];

  const intern_questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email?",
        },
    {
        type: 'input',
        name: 'school',
        message: "What is your intern's school?",
    },
  ];




// function to initialize app
function init() {
    console.log('Welcome to the team generator!');
    console.log('Use `npm run reset` to reset the dist/ folder');
    inquirer
        .prompt(manager_questions)
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.office);
            employees.push(manager);
            anotherEmployeePrompt();
        })
};

function anotherEmployeePrompt() {
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'role',
                message: 'Which type of team member would you like to add?',
                choices: [
                    'Engineer',
                    'Intern',
                    'I do not want to add anymore team member',
                ]
            },
        )
    .then((data) => {
        if (data.role === 'Engineer'){
            engineerPrompt()
        } else if (data.role === 'Intern'){
            internPrompt()
        }
        else {
            generateContent(employees);
        }
    })
  }


function engineerPrompt(){
    inquirer.prompt(engineer_questions).then((data)=>{
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        employees.push(engineer);
        anotherEmployeePrompt();
    })
}

function internPrompt(){
    inquirer.prompt(intern_questions).then((data)=>{
        const intern = new Intern(data.name, data.id, data.email, data.school);
        employees.push(intern);
        anotherEmployeePrompt();
    })
}




init();