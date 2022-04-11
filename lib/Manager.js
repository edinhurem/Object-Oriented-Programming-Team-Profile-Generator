const Employee = require('./Employee');

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id,name,email);
    this.officenumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

