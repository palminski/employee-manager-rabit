const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const templateData = require("./src/page-template");

const inquirer = require('inquirer');
const fs = require('fs');

//----------------------------------------------------------------------------------------
let team = [];

// Add Manager
const promptManager = () => {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "Enter Manager's Name",
            validate: input => {
                if (input) {
                    return true;
                }
                else
                {
                    console.log("please provide input!");
                    return false;
                }

            }
        },
        {
            type: "text",
            name: "id",
            message: "Enter Manager's Employee ID",
            validate: input => {
                if (input) {
                    return true;
                }
                else
                {
                    console.log("please provide input!");
                    return false;
                }

            }
        },
        {
            type: "text",
            name: "email",
            message: "Enter Manager's Email Adress",
            validate: input => {
                if (input) {
                    return true;
                }
                else
                {
                    console.log("please provide input!");
                    return false;
                }

            }
        },
        {
            type: "text",
            name: "office",
            message: "Enter Manager's office number",
            validate: input => {
                if (input) {
                    return true;
                }
                else
                {
                    console.log("please provide input!");
                    return false;
                }

            }
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
            generatePage(templateData(team));
            return;
        }
    }) 
}

// Add Engineer
const promptEngineer = () => {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "Enter Engineer's Name",
            validate: input => {
                if (input) {
                    return true;
                }
                else
                {
                    console.log("please provide input!");
                    return false;
                }

            }
        },
        {
            type: "text",
            name: "id",
            message: "Enter Engineer's Employee ID",
            validate: input => {
                if (input) {
                    return true;
                }
                else
                {
                    console.log("please provide input!");
                    return false;
                }

            }
        },
        {
            type: "text",
            name: "email",
            message: "Enter Engineer's Email Adress",
            validate: input => {
                if (input) {
                    return true;
                }
                else
                {
                    console.log("please provide input!");
                    return false;
                }

            }
        },
        {
            type: "text",
            name: "github",
            message: "Enter Engineer's github",
            validate: input => {
                if (input) {
                    return true;
                }
                else
                {
                    console.log("please provide input!");
                    return false;
                }

            }
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
            generatePage(templateData(team));
            return;
        }
    }) 
}

// Add Intern
const promptIntern = () => {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "Enter Intern's Name",
            validate: input => {
                if (input) {
                    return true;
                }
                else
                {
                    console.log("please provide input!");
                    return false;
                }

            }
        },
        {
            type: "text",
            name: "id",
            message: "Enter Intern's Employee ID",
            validate: input => {
                if (input) {
                    return true;
                }
                else
                {
                    console.log("please provide input!");
                    return false;
                }

            }
        },
        {
            type: "text",
            name: "email",
            message: "Enter Intern's Email Adress",
            validate: input => {
                if (input) {
                    return true;
                }
                else
                {
                    console.log("please provide input!");
                    return false;
                }

            }
        },
        {
            type: "text",
            name: "school",
            message: "Enter Intern's school",
            validate: input => {
                if (input) {
                    return true;
                }
                else
                {
                    console.log("please provide input!");
                    return false;
                }

            }
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
            generatePage(templateData(team));
            return;
        }
    }) 
}

const generatePage = (html) => {
    fs.writeFile("./dist/index.html", html, (err) => {
        if (err) {
            console.log("AN ERROR OCCURED");
            throw err;
        }
        console.log("File Created! Check the dist folder to view it!");
    })
}

promptManager()