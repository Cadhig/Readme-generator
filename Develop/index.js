// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project called?",
            name: "projectName",
        },
        {
            type: "input",
            message: "Provide a short description of your project",
            name: "description",
        },
        {
            type: "input",
            message: "Installation instructions? Type N/A if none.",
            name: "installation",
        },
        {
            type: "input",
            message: "Usage information? Type N/A if none.",
            name: "usage",
        },
        {
            type: "input",
            message: "Any contributors? Type N/A if none.",
            name: "contributors",
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },
        {
            type: "list",
            message: "What license is your project under?",
            name: "license",
            choices: ["MIT", "BSD 2", "BSD 3", "Apache License 2.0", "ISC",]
        },

    ])
    .then((response) =>
        console.log(response)
    )
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
