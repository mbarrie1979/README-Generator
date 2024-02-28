// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Define an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description'
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: [
            "AFL-3.0", "Apache-2.0", "Artistic-2.0", "BSL-1.0", "BSD-2-Clause",
            "BSD-3-Clause", "BSD-3-Clause-Clear", "BSD-4-Clause", "0BSD", "CC",
            "CC0-1.0", "CC-BY-4.0", "CC-BY-SA-4.0", "WTFPL", "ECL-2.0",
            "EPL-1.0", "EPL-2.0", "EUPL-1.1", "AGPL-3.0", "GPL", "GPL-2.0",
            "GPL-3.0", "LGPL", "LGPL-2.1", "LGPL-3.0", "ISC", "LPPL-1.3c",
            "MS-PL", "MIT", "MPL-2.0", "OSL-3.0", "PostgreSQL", "OFL-1.1",
            "NCSA", "Unlicense", "Zlib"
        ]
    },
    {
        type: 'input',
        message: 'What command line should be run to install dependencies?',
        name: 'dependencies',
        default: 'npm i'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'needToKnow'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Who is credited on this project?',
        name: 'credits'
    }
];

// Function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Your README has been generated!");
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const { email, title, description, license, dependencies, tests, needToKnow, contributions, credits } = data

        const readMeInfo = {
            email,
            title,
            description,
            license,
            dependencies,
            tests,
            needToKnow,
            contributions,
            credits
        }
        const markdownContent = generateMarkdown(readMeInfo);
        writeToFile('GeneratedREADME.md', markdownContent);
    });
}

// Function call to initialize app
init();




