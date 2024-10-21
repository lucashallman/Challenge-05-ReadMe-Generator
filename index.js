// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs, { write } from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = ["01 - What does this program do?", "02 - What was your motivation for this project?", "03 - Why did you build this project?", "04 - What problem does it solve?", "05 - What did you learn?", "06 - What makes your project stand out?"];
const sysQuestions = ["What is the title?", "Give a one sentence description.", "What license will you be using?", "What is the best way to install this project?", "Once it is installed, how do you use it?"];
const licenseSelect = ["Apache", "MIT", "Mozilla", "GNU General Public License", "BSD"];
let license = ''
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
                type: 'input',
                message: ''
            }
            {
                type: 'input',
                message: questions[2],
                name: 'longQuote1',
            },
            {
                type: 'input',
                message: questions[3],
                name: "longQuote2"
            },
            {
                type: 'input',
                message: questions[4],
                name: 'longQuote3'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'longQuote4'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'longQuote5'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'longQuote6'
            },
            {
                type: 'list',
                message: questions[8],
                choices: licenseSelect,
                name: 'license'
            },
        ])
        .then(function(response) {
            console.log(response);
            const renderAnswers = generateMarkdown(response);
            writeToFile('readMe.md', renderAnswers);
            let license = response.license;
        })
    }
export { license };
// Function call to initialize app
init();
