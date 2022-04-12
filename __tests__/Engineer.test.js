const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Should return the same data set in the constructure!", () => {
    let engineer = new Engineer(
      "E001",
      "John Doe",
      "john.doe@gmail.com",
      "johndoe"
    );

    expect(engineer.getId()).toBe("E001");
    expect(engineer.getName()).toBe("John Doe");
    expect(engineer.getEmail()).toBe("john.doe@gmail.com");
    expect(engineer.getGithub()).toBe("johndoe");
    expect(engineer.getRole()).toBe("Engineer");
  });
});
