// Included packages needed for this application
let comm = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];



// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

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
        message: "Who is/are the contributors to this project? What are the guidelines for contribution?",
        name: 'contributors',
    },
    {

        type: 'input',
        message: "What are the guidelines for contribution?",
        name: 'guidelines',
    },
    {
        type: 'input',
        message: "Test instructions",
        name: 'tests',

    },
    {
        type: 'list',
        message: "Please select a license from the following list:",
        name: 'license',
        choices: ["MIT", "License2", "License3"],
    },
    {
        type: 'checkbox',
        message: "Which languages were used?",
        name: 'stack',
        choices: ["HTML", "CSS", "Javascript", "node.js", "react", "SQL"],
    },
    // {
    //     type:'checkbox',
    //         message:"What languages do you know?",
    //         name: 'stack',
    //         choices: ["HTML","CSS","JAVASCRIPT","MySQL"],
    // },
    // {
    //     type:'list',
    //         message:"What is your preferred method of communication?",
    //         name: 'communication',        
    //         choices: ["email", "text", "phone"],
    // }


])
    // function to write README file
    .then((response) => {
        const GeneratedReadme = `
    # ${response.title}

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
    ${response.license}

  ## Contributors: 
    ${response.contributors}
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
 ${response.stack}


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


