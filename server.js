const connection = require('./config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const chalk = require('chalk');
const figlet = require('figlet');
const validate = require('./javascript/validate');

// Database Connect and Starter Title
connection.connect((error) => {
  if (error) throw error;
  console.log(chalk.yellow.bold(`====================================================================================`));
  console.log(``);
  console.log(chalk.yellowBright.bold(figlet.textSync('Employee Tracker By Daniel')));
  console.log(``);
  console.log(``);
  console.log(chalk.yellow.bold(`====================================================================================`));
  promptUser();
});