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
        name: "officeNumber",
      },
    ])
    .then((data) => {
      manager = new Manager(data.id, data.name, data.email, data.officeNumber);
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
      // create an Engineer object and add it to engineers array
      engineers.push(
        new Engineer(data.id, data.name, data.email, data.GithubUsername)
      );
      showMenu();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's e-mail?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
      },
    ])
    .then((data) => {
      interns.push(new Intern(data.name, data.id, data.email, data.school));
      showMenu();
    });
}

function showMenu() {
  inquirer
    .prompt([
      {
        type: "rawlist",
        message: "Choose an option",
        choices: ["Add an Engineer", "Add an Intern", "Finish"],
        name: "choice",
      },
    ])
    .then((data) => {
      console.log(data.choice);
      if (data.choice == "Add an Engineer") {
        createEngineer();
      } else if (data.choice == "Add an Intern") {
        createIntern();
      } else if (data.choice == "Finish") {
        createHTML();
      } else {
        showMenu();
      }
    });
}

// To create a function....
/*
function function_name(parameters) {   // "parameters" are optional information passed to the function
  stuff the function does
  ...
}
*/

function createHTML() {
  // Create the html file for the web page: index.html

  // Creating the html header informtion
  let html = `
  <!DOCTYPE html>
  <html>
  <head>
  <!-- Need to add link to CSS file (bootstrap?) -->
  </head>
  <body>
  `;

  // Add the manager to the page
  html += `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
  <h5 class="card-title">${manager.getName()}</h5>
  <h5 class="card-title">${manager.getRole()}</h5>
  <p class="card-text">ID: ${manager.getId()}</p>
  <p class="card-text">E-Mail:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
  <p class="card-text">Office: ${manager.getOfficeNumber()}</p>
  </div>
</div>`;

  // Add the engineers to the page
  for (e of engineers) {
    html += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${e.getName()}</h5>
    <h5 class="card-title">${e.getRole()}</h5>
    <p class="card-text">ID: ${e.getId()}</p>
    <p class="card-text">E-Mail:<a href="mailto:${e.getEmail()}">${e.getEmail()}</a></p>
    <p class="card-text">Github: ${e.getGithub()}</p>
    </div>
  </div>`;
  }

  // Add the interns to the page

  for (i of interns) {
    html += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${i.getName()}</h5>
    <h5 class="card-title">${i.getRole()}</h5>
    <p class="card-text">ID: ${i.getId()}</p>
    <p class="card-text">E-Mail:<a href="mailto:${i.getEmail()}">${i.getEmail()}</a></p>
    <p class="card-text">Github: ${i.getSchool()}</p>
    </div>
  </div>`;
  }

  // Add the footer html
  html += "</body></html>";

  // Save the data to the index.html file in the dist folder
  fs.writeFile("./dist/index.html", html, (err) => {
    if (err) console.log(err);
    else {
      console.log("The html file has been created.");
    }
  });
}

let manager;
let engineers = [];
let interns = [];

createManger();
