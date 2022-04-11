class Employee {
  constructor(id, name, email) {
    this.id = id; 
    this.name = name; 
    this.email = email; 
  }
  
  printInfo() {
    console.log('this is employee id');
    console.log('this is employee name');
    console.log('this is employee email'); 
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee; 



