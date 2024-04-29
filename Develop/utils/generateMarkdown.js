
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
*[Installation] (#installation)
*[Usage](#usage)
*[Contributors](#contributors)
*[License](#license)
*[Contact](#contact)

## Installation
${data.installation}
## How to Use this App
${data.usage}
## Contributors
${data.contributors}
${data.github}
## Contact
${data.email}
## License
${data.license}
`;
}

module.exports = generateMarkdown;
