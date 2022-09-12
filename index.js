const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer')

//----------------------------------------------------------------------------------------
let team = [];

// Add Manager
const promptManager = () => {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "Enter Manager's Name"
        },
        {
            type: "text",
            name: "id",
            message: "Enter Manager's Employee ID"
        },
        {
            type: "text",
            name: "email",
            message: "Enter Manager's Email Adress"
        },
        {
            type: "text",
            name: "office",
            message: "Enter Manager's office number"
        },
        {
            type: "list",
            name: 'next',
            message: "would you like to add another employee?",
            choices: ['Engineer','Intern','Finish Building Team']
        }
    ])
    .then ((managerInfo) => {
        const {name,id,email,office,next} = managerInfo;
        manager = new Manager(name,id,email,office);
        team.push(manager);

        if (next === 'Engineer') {
            return promptEngineer();
        }
        else if (next === 'Intern') {
            return promptIntern();
        }
        else {
            console.log(team);
        }
    }) 
}

// Add Engineer
const promptEngineer = () => {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "Enter Engineer's Name"
        },
        {
            type: "text",
            name: "id",
            message: "Enter Engineer's Employee ID"
        },
        {
            type: "text",
            name: "email",
            message: "Enter Engineer's Email Adress"
        },
        {
            type: "text",
            name: "github",
            message: "Enter Engineer's github"
        },
        {
            type: "list",
            name: 'next',
            message: "would you like to add another employee?",
            choices: ['Engineer','Intern','Finish Building Team']
        }
    ])
    .then ((engineerInfo) => {
        const {name,id,email,github,next} = engineerInfo;
        engineer = new Engineer(name,id,email,github);
        team.push(engineer);

        if (next === 'Engineer') {
            return promptEngineer();
        }
        else if (next === 'Intern') {
            return promptIntern();
        }
        else {
            console.log(team);
        }
    }) 
}

// Add Intern
const promptIntern = () => {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "Enter Intern's Name"
        },
        {
            type: "text",
            name: "id",
            message: "Enter Intern's Employee ID"
        },
        {
            type: "text",
            name: "email",
            message: "Enter Intern's Email Adress"
        },
        {
            type: "text",
            name: "school",
            message: "Enter Intern's school"
        },
        {
            type: "list",
            name: 'next',
            message: "would you like to add another employee?",
            choices: ['Engineer','Intern','Finish Building Team']
        }
    ])
    .then ((internInfo) => {
        const {name,id,email,school,next} = internInfo;
        intern = new Intern(name,id,email,school);
        team.push(intern);

        if (next === 'Engineer') {
            return promptEngineer();
        }
        else if (next === 'Intern') {
            return promptIntern();
        }
        else {
            console.log(team);
        }
    }) 
}

promptManager();