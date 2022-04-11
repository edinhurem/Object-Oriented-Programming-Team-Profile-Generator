const Employee = require('./Employee');

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id,name,email);
    this.school = school;
  }

  getSchool() {
    return this.school
  }

  getRole() {
    return "Intern"; 

  }
}


// // """THEN I am prompted to enter the employe's name, employee id, email address"""

// """THEN I am prompted to enter the team manager’s name, manager's ID, email address, and office number"""

// """THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu"""

// """intern’s name, ID, email, and school, and I am taken back to the menu"""