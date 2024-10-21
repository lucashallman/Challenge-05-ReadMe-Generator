// TODO: Create a function that returns a license badge based on which license is passed in
import {answerList} from '../index.js';
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
function renderLicenseSection(data) {
  const licenseData = data.license;
  const oLicense = data.oLicense;
  const userLicenseBadge = renderLicenseBadge(licenseData);
  const userLicenseLink = renderLicenseLink(licenseData);
  if (licenseData === '') {
    return '';
  } else {
    return `----------------------\n Published under the ${licenseData}${oLicense} license.\n ${userLicenseBadge}\n ${userLicenseLink}\n ----------------------\n`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(answerList);
  return `# ${data.title}\n
## Description\n
"${data.longDesc}"\n
\n
- The Problem I hope to solve: ${data.longProb}\n
- The way I hope to solve it: ${data.longSolve}\n
- Solving this problem was difficult for the following reasons: ${data.longDiff}\n
- I learned the following: ${data.longLearn}\n
\n
## Table of Contents\n
\n
- [Installation](#installation)\n
- [Usage](#usage)\n
- [Credits](#credits)\n
- [License](#license)\n
\n
## Installation\n
\n
${data.installation}\n
\n
## Usage\n
\n
${data.usage}\n
\n
## Credits\n
\n
## License

${licenseSection}\n
`;
};

export default generateMarkdown;