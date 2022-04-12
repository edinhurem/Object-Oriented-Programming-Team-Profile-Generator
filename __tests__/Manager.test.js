const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Should return the same data set in the constructure!", () => {
    let manager = new Manager(
      "M001", // id
      "jared doe", // name
      "jared.doe@gmail.com", //email
      "1" //office##
    );

    expect(manager.getId()).toBe("M001");
    expect(manager.getName()).toBe("jared doe");
    expect(manager.getEmail()).toBe("jared.doe@gmail.com");
    expect(manager.getOfficeNumber()).toBe("1");
    expect(manager.getRole()).toBe("Manager");
  });
});
