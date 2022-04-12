const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Should return the same data set in the constructure!", () => {
    let employee = new Employee("E001", "alec doe", "alec.doe@gmail.com");

    expect(employee.getId()).toBe("E001");
    expect(employee.getName()).toBe("alec doe");
    expect(employee.getEmail()).toBe("alec.doe@gmail.com");
    expect(employee.getRole()).toBe("Employee");
  });
});
