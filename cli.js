#!/usr/bin/env node
const shell = require('shelljs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const figlet = require("figlet")
if (!shell.which('git')) {
    shell.echo('Sorry, this create-quick-app requires git');
    shell.exit(1);
  }
console.log(chalk.blue('Quick CLI 1.2.0'));


figlet('QUICK JS!!', function(err, data) {
    if (err) {
        console.log(chalk.yellowBright('Something went wrong...'));
        console.dir(err);
        return;
    }
    console.log(data)
});

setTimeout(() => {
    inquirer
    .prompt([
        {
            name: "projectName",
            message: chalk.yellowBright('Project name'),
        },
        {
            name: "default",
            message: chalk.yellowBright('(babel, typescript, webpack)'),
            default: chalk.green("default")
        },
    ])
    .then(answers => {
        if(answers["default"]) {
           console.log(chalk.blue("Creating Quick App"))
           setTimeout(() => {
            console.log(chalk.blue("Initializing Repo"))
           },1000)
           setTimeout(() => {
            shell.exec(`git clone https://github.com/Echodesk-Technology/Quick-app.git ${answers.projectName}`)
            console.log(chalk.blueBright('New plugins coming soon'));
            console.log(chalk.blueBright('😀 Happy Coding'));
           },1400)
        }
    })
    .catch(error => {
        if (error.isTtyError) {
            console.log(error);
        } else {
            console.log(error);
        }
    });
    
},400)