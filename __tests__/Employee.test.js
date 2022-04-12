const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Should return the same data set in the constructure!", () => {
    let employee = new Employee("E001", "John Doe", "john.doe@gmail.com");

    expect(employee.getId()).toBe("E001");
    expect(employee.getName()).toBe("John Doe");
    expect(employee.getEmail()).toBe("john.doe@gmail.com");
    expect(employee.getRole()).toBe("Employee");
  });
});
