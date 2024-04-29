
const fs = require('fs')
const path = require('path')
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
    {
        type: "input",
        message: "What is your project called?",
        name: "title",
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
        choices: ["MIT", "BSD2", "BSD3", "APACHE2.0", "ISC", "none"]
    },
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Generating README.md file....')
        writeToFile('/README.md', generateMarkdown({ ...responses }))
    })
}

init();
