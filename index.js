// Included packages needed for this application
let comm = require('inquirer');
const fs = require('fs');

comm.prompt([
    {
        type: 'input',
        message: "What is your GitHub username? Make sure you follow the same case as it exists on GitHub!",
        name: 'username',

    },
    {
        type: 'input',
        message: "Please type in your email to be displayed on the readme.md",
        name: 'email',

    },
    {
        type: 'input',
        message: "What is the title of your Project?",
        name: 'title',

    },
    {
        type: 'input',
        message: "Please type in description of project.",
        name: 'description',

    },
    {
        type: 'input',
        message: "Please describe how to install this project.",
        name: 'installation',
    },
    {
        type: 'input',
        message: "How is this project initialized or used?",
        name: 'usage',

    },
    {

        type: 'input',
        message: "Who is/are the contributors to this project? ",
        name: 'contributors',
    },
    {

        type: 'input',
        message: "What are the guidelines for contribution?",
        name: 'guidelines',
    },
    {
        // What are these test instructions????
        type: 'input',
        message: "Test instructions",
        name: 'tests',

    },
    {
        type: 'list',
        message: "Please select a license from the following list:",
        name: 'license',
        choices: ["Apache", "Boost", "BSD3", "BSD2", "Eclipse", "GPLv3", "GPLv2", "AGPLv3", "LGPlv3","FDL","IBM","ISC","MIT","MPL", "PERL","Artistic","Unlicense", "None"],
    },
    {
        type: 'checkbox',
        message: "Which languages were used?",
        name: 'stack',
        choices: ["HTML", "CSS", "Javascript", "node.js", "react", "SQL"],
    },

])
    // function to write README file
    .then((response) => {
        let license = response.license.toLowerCase();
        let badge = renderLicenseBadge(license);
        let link = renderLicenseLink(license);
        let languages = response.stack;
        let result = languages.join("\n\t")


        const GeneratedReadme = `
  #  ${response.title} ${badge}

  ## Description:

    ${response.description}

  ## Table of Contents:
  * [Description](#Description)

  * [Installation Instructions](#Installation)

  * [Usage](#Usage)
  
  * [License](#License)

  * [Contributors](#Contributors) 

  * [Test Instructions](#Test_Instructions)

  * [Website](#Website)

  * [Technologies-Used](#Technologies-Used)
  
  * [Questions](#Contributors)
    
  ## Installation
    ${response.installation}  

  ## Usage
    ${response.usage}

  ## License:
  This project is covered under the following license. See link for more information.
  If empty, no license is being used.
    
    ${response.license}
    ${link}

  ## Contributors: 
    ${response.contributors.split(' ').join(', ')}

  If you would like to contribute please follow:

    ${response.guidelines}

  ## Test Instructions:
    ${response.tests}

  ## Website:
  Github Repository: https://github.com/${response.username}/${response.title}

  Deployed Site here: 
  https://${response.username}.github.io/${response.title}/

  Screenshot:
  
<!-- ![${response.title}](./assets/images/${response.title}.gif) -->
Screenshot will be found here

  
  ## Technologies-Used:
  
    ${result}


## Any questions/suggestions/critique?
Please find me at:
https://github.com/${response.username}/

I can be contacted through email:
${response.email}



`;
        fs.writeFile("GenReadMe.md", GeneratedReadme, (err) =>
            err ? console.log(err) : console.log('Success!'));
        const filename = `${response.title.toLowerCase().split(' ').join('')}.json`;
        fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!'));
    });











    function renderLicenseBadge(license) {
        switch (license){
          case "apache":
            badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
            break;
          case "boost":
            badge = "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
            break;
          case "bsd3":
            badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
            break;
          case "bsd2":
            badge = "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)";
            break;
          case "eclipse":
            badge = "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)";
            break;
          case "gplv3":
            badge =  "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
            break;
          case "gplv2":
            badge = "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
            break;
          case "agplv3":
            badge = "![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)";
            break;
          case "lgplv3":
            badge = "![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)";
            break;
          case "fdl":
            badge = "![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)";
            break;
          case "ibm":
            badge = "![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)";
            break;
          case "isc":
            badge = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
            break;
          case "mit":
            badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
            break;
          case "mpl":
            badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
            break;
          case "perl":
            badge = "![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)";
            break;
          case "artistic":
            badge = "![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)";
            break;
          case "unlicense":
            badge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
            break;
          default:
            badge = '';
        }
        return badge;
}


function renderLicenseLink(license) {
    switch (license){
      case "apache":
        link = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case "boost":
        link = "https://www.boost.org/LICENSE_1_0.txt";
        break;
      case "bsd3":
        link = "https://opensource.org/licenses/BSD-3-Clause";
        break;
      case "bsd2":
        link = "https://opensource.org/licenses/BSD-2-Clause";
        break;
      case "eclipse":
        link = "https://opensource.org/licenses/EPL-1.0";
        break;
      case "gplv3":
        link =  "https://www.gnu.org/licenses/gpl-3.0";
        break;
      case "gplv2":
        link = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
        break;
      case "agplv3":
        link = "https://www.gnu.org/licenses/agpl-3.0";
        break;
      case "lgplv3":
        link = "https://www.gnu.org/licenses/lgpl-3.0";
        break;
      case "fdl":
        link = "https://www.gnu.org/licenses/fdl-1.3";
        break;
      case "ibm":
        link = "https://opensource.org/licenses/IPL-1.0";
        break;
      case "isc":
        link = "https://opensource.org/licenses/ISC";
        break;
      case "mit":
        link = "https://opensource.org/licenses/MIT";
        break;
      case "mpl":
        link = "https://opensource.org/licenses/MPL-2.0";
        break;
      case "perl":
        link = "https://opensource.org/licenses/Artistic-2.0";
        break;
      case "artistic":
        link = "https://opensource.org/licenses/Artistic-2.0";
        break;
      case "unlicense":
        link = "http://unlicense.org/";
        break;
      default:
        link = '';
    }
  return link;
  
  }
