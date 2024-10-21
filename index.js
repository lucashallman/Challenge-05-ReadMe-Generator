// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs, { write } from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = ["01 - Please expand on what this project does and how it does it.", "02 - What problem does this project seek to solve?", "03 - How does this project go about solving that problem?", "04 - Did you have any difficulties in completing this project or solving this problem?", "05 - What did you learn?", "06 - What makes your project stand out?"];
const sysQuestions = ["What is the title?", "Give a one sentence description.", "What license will you be using?", "What is the best way to install this project?", "Once it is installed, how do you use it?", "Would you like to credit any other organizations or people that helped to complete this assignment? Please list their names, seperated by commas."];
const licenseSelect = ["Apache", "MIT", "Mozilla", "GNU General Public License", "BSD", "Other"];
let answerList = {};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => {
        if (err) {
        console.log(colors.red(err));
}})
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: sysQuestions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: sysQuestions[1],
                name: 'description',
            },
            {
                type: 'list',
                message: sysQuestions[2],
                choices: licenseSelect,
                name: 'license',
            },
            {
                type: 'input',
                message: sysQuestions[3],
                name: 'installation',
            },
            {
                type: 'input',
                message: sysQuestions[4],
                name: 'usage'
            },
            {
                type: 'input',
                message: sysQuestions[5],
                name: 'creds'
            },
            {
                type: 'input',
                message: questions[0],
                name: 'longDesc',
            },
            {
                type: 'input',
                message: questions[1],
                name: "longProb"
            },
            {
                type: 'input',
                message: questions[2],
                name: 'longSolve'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'longDiff'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'longLearn'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'longStar'
            },
        ])
        .then(function(response) {
            console.log(response);
            const renderAnswers = generateMarkdown(response);
            writeToFile('readMe.md', renderAnswers);
            let answerList = response;
        })
    }
    // Function call to initialize app
    init();
export {answerList};