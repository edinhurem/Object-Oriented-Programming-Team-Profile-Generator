const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");

// Get the information for the manager, then create the manager object
// get name, id, and email from user

function createManger() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager's e-mail?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the office number?",
        name: "officer",
      },
    ])
    .then((data) => {
      Manager = new Manager(data.id, data.name, data.email, data.officeNumber);
      showMenu();
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's e-mail?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "officer",
      },
    ])
    .then((data) => {
      Engineer = new Engineer(
        data.id,
        data.name,
        data.email,
        data.GithubUsername
      );
      showMenu();
    });
}

function showMenu() {
  inquirer
    .prompt([
      {
        type: "rawlist",
        message: "Choose an option",
        choices: ["Add an Engineer", "Add an Intern", "Finsih"],
        name: "choice",
      },
    ])
    .then((data) => {
      console.log(data.choice);
      if (data.choic0 == "Add an Engineer") {
        createEngineer();
      } else if (data.choice == "Add an intern") {
        createIntern();
      } else if (data.choice == "Add an Intern") {
        createIntern();
      } else if (data.choice == "finsih") {
        createHTML();
      } else {
        showMenu();
      }
    });
}

let manager;
let engineers = [];
let interns = [];

createManger();

// function showMenu() {
//   inquirer
//     .prompt([
//       {
//         type: "rawlist",
//         message: "choose an option",
//         choices: ["Add an Engineer", "Add an Intern", "Finsih"],
//       },
//     ])
//     .then((data) => {
//       console.log(data.choise);
//       if (data.choice == "Add an Engineer") {
//         createEngineer();
//       } else if (data.choice == "Add an Intern") {
//         createIntern();
//       } else if (data.choice == "finsih") {
//         createHTML();
//       } else {
//         showMenu;
//       }
//     });
// }

// let manager;
// let engineer = [];
// let intern = [];
// createManger();

//}

//let manager = getManagerInfo();

//console.log(manager.getName());

// Present a menu of options to create other employees

/*

            // Create an html file of the team



              
              // get name, id, and email from user
              inquirer
              .prompt([
                {
                  type: 'input',
                  message: "What is the manager's name?",
                  name: 'name',
                },
                {
                  type: 'input',
                  message: "What is the manager's employee id?",
                  name: 'id',
                },
                {
                  type: 'input',
                  message: "What is the manager's e-mail?",
                  name: 'email',
                },
                {
                  type: 'input',
                  message: "what is the manager's office-number?",
                  name: 'office-number',
                },
              ])
            */
