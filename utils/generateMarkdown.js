// TODO: Create a function that returns a license badge based on which license is passed in
import {license} from '../index.js';
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === '') {
    return '';
  } else if (license === "Apache 2.0") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === "Mozilla") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === "GNU General Public License") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === "BSD License") {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === '') {
    return '';
  } else if (license === "Apache 2.0") {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === "MIT") {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === "Mozilla") {
    return '(https://opensource.org/licenses/MPL-2.0)';
  } else if (license === "GNU General Public License") {
    let license = "GNU General Public";
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === "BSD") {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseData = JSON.stringify(license);
  const userLicenseBadge = renderLicenseBadge(licenseData);
  const userLicenseLink = renderLicenseLink(licenseData);
  if (license === '') {
    return '';
  } else {
    return `----------------------\n Published under the ${license} license.\n ${userLicenseBadge}\n ${userLicenseLink}\n ----------------------\n`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(license);
  return `# ${data.title}\n
## Description\n
"${longQuote1}"\n
\n
- Motivation: ${data.longQuote2}\n
- Reasoning: I built this project ${data.longQuote3}\n
- I learned the following: ${data.longQuote5}\n
\n
## Table of Contents\n
\n
- [Installation](#installation)\n
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`;
};

export default generateMarkdown;