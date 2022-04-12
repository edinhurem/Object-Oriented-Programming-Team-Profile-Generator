const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs-extra");

//hold our data here as a local database
let manager;
let engineers = [];
let interns = [];

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
    <link rel="stylesheet" href="styles.css">

    <link href="./font-awesome/all.min.css" rel="stylesheet">
    <script src="./font-awesome/all.min.js"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </head>
  <body>
  <header class="team-profile-header">
    ~ My Team Profile ~
  </header>
  `;

  // Add the manager to the page
  html += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <h5 class="card-title"><i class="fa-solid fa-people-roof"></i> ${manager.getRole()}</h5>
    <p class="card-text">ID: ${manager.getId()}</p>
    <p class="card-text">E-Mail: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
    <p class="card-text">Office #: ${manager.getOfficeNumber()}</p>
  </div>
</div>`;

  // Add the engineers to the page
  for (e of engineers) {
    html += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${e.getName()}</h5>
      <h5 class="card-title"><i class="fa-solid fa-computer"></i> ${e.getRole()}</h5>
      <p class="card-text">ID: ${e.getId()}</p>
      <p class="card-text">E-Mail: <a href="mailto:${e.getEmail()}">${e.getEmail()}</a></p>
      <p class="card-text">Github: <a href="https://github.com/${e.getGithub()}" target="_blank">${e.getGithub()}</a></p>
    </div>
  </div>`;
  }

  // Add the interns to the page

  for (i of interns) {
    html += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${i.getName()}</h5>
      <h5 class="card-title"><i class="fa-solid fa-user-graduate"></i> ${i.getRole()}</h5>
      <p class="card-text">ID: ${i.getId()}</p>
      <p class="card-text">E-Mail: <a href="mailto:${i.getEmail()}">${i.getEmail()}</a></p>
      <p class="card-text">School: ${i.getSchool()}</p>
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

  //copy our styles.css file to the dist folder
  fs.copyFile("./src/styles.css", "./dist/styles.css", (err) => {
    if (err) console.log(err);
    else {
      console.log("The css was copied to dist folder.");
    }
  });

  //copy our font-awesome to the dist folder
  fs.copy("./src/font-awesome", "./dist/font-awesome", (err) => {
    if (err) console.log(err);
    else {
      console.log("Font-awesome was copied to dist folder.");
    }
  });
}

/**
 * This function will generate test data quickly skipping the questionaire for generation
 */
function generateQuickTest() {
  manager = new Manager("M001", "edin hurem", "edinhurem@gmail.com", "1");
  engineers.push(new Engineer("E001", "edin", "edin@company.com", "edinhurem"));
  interns.push(new Intern("John", "I001", "JohnUNCC@gmail.com", "UNCC"));
  createHTML();
}

//use this to test the html generation quickly
//generateQuickTest();

//this starts the questionaire for generation
createManger();
