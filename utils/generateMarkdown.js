// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;



function renderLicenseBadge(license) {
  switch (license){
    case "apache":
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case "boost":
      badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "bsd3":
      badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "bsd2":
      badge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "eclipse":
      badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "gplv3":
      badge =  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "gplv2":
      badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "agplv3":
      badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "lgplv3":
      badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "fdl":
      badge = "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
      break;
    case "ibm":
      badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "isc":
      badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "mit":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "mpl":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "perl":
      badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "artistic":
      badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
    case "unlicense":
      badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    default:
      badge = '';
  }
return badge;
}


function renderLicenseLink(license) {
switch (license){
case "apache":
  link = '(https://opensource.org/licenses/Apache-2.0)';
  break;
case "boost":
  link = "(https://www.boost.org/LICENSE_1_0.txt)";
  break;
case "bsd3":
  link = "(https://opensource.org/licenses/BSD-3-Clause)";
  break;
case "bsd2":
  link = "(https://opensource.org/licenses/BSD-2-Clause)";
  break;
case "eclipse":
  link = "(https://opensource.org/licenses/EPL-1.0)";
  break;
case "gplv3":
  link =  "(https://www.gnu.org/licenses/gpl-3.0)";
  break;
case "gplv2":
  link = "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  break;
case "agplv3":
  link = "(https://www.gnu.org/licenses/agpl-3.0)";
  break;
case "lgplv3":
  link = "(https://www.gnu.org/licenses/lgpl-3.0)";
  break;
case "fdl":
  link = "(https://www.gnu.org/licenses/fdl-1.3)";
  break;
case "ibm":
  link = "(https://opensource.org/licenses/IPL-1.0)";
  break;
case "isc":
  link = "(https://opensource.org/licenses/ISC)";
  break;
case "mit":
  link = "(https://opensource.org/licenses/MIT)";
  break;
case "mpl":
  link = "(https://opensource.org/licenses/MPL-2.0)";
  break;
case "perl":
  link = "(https://opensource.org/licenses/Artistic-2.0)";
  break;
case "artistic":
  link = "(https://opensource.org/licenses/Artistic-2.0)";
  break;
case "unlicense":
  link = "(http://unlicense.org/)";
  break;
default:
  link = '';
}


}