const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, userName) {
    super(id, name, email);
    this.userName = userName;
  }

  getGithub() {
    return this.userName;
  }

  getRole() {
    return "Engineer";
  }
}
