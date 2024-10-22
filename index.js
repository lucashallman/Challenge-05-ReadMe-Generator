// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs, { write } from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = ["Give a one sentence description.", "Please expand on what this project does and how it does it.", "What problem does this project seek to solve?", "How does this project go about solving that problem?", "Did you have any difficulties in completing this project or solving this problem?", "What did you learn?", "hat makes your project stand out?", ];
const sysQuestions = ["What is the title?", "Please link your github repository here.", "If you'd like, provide your email or best form of contact here." , "What license will you be using?", "What is the best way to install this project?", "Once it is installed, how do you use it?", "Would you like to credit any other organizations or people that helped to complete this assignment? Please list their names, seperated by commas."];
const licenseSelect = ["Apache", "MIT", "Mozilla", "GNU General Public License", "BSD", "None"];
let answerList = {};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
        console.log(colors.red(err));
} else {console.log(colors.blue("Formatting successful. File is ready, see build directory."))}})
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
                name: 'repo',
            },
            {
                type: 'input',
                message: sysQuestions[2],
                name: 'contact',
            },
            {
                type: 'list',
                message: sysQuestions[3],
                choices: licenseSelect,
                name: 'license',
            },
            {
                type: 'input',
                message: sysQuestions[4],
                name: 'installation',
            },
            {
                type: 'input',
                message: sysQuestions[5],
                name: 'usage'
            },
            {
                type: 'input',
                message: sysQuestions[6],
                name: 'creds'
            },
            {
                type: 'input',
                message: questions[0],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'longDesc',
            },
            {
                type: 'input',
                message: questions[2],
                name: "longProb"
            },
            {
                type: 'input',
                message: questions[3],
                name: 'longSolve'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'longDiff'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'longLearn'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'longStar'
            },
        ])
        .then(function(response) {
            const renderAnswers = generateMarkdown(response);
            writeToFile('./build/generatedREADME.md', renderAnswers);
        });
    };
    // Function call to initialize app
    init();