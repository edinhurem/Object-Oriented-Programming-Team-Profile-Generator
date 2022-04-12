const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Should return the same data set in the constructure!", () => {
    let manager = new Manager(
      "M001",
      "John Doe",
      "john.doe@gmail.com",
      "OFC-Dallas"
    );

    expect(manager.getId()).toBe("M001");
    expect(manager.getName()).toBe("John Doe");
    expect(manager.getEmail()).toBe("john.doe@gmail.com");
    expect(manager.getOfficeNumber()).toBe("OFC-Dallas");
    expect(manager.getRole()).toBe("Manager");
  });
});
