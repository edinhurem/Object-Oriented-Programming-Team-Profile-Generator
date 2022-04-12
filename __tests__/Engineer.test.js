const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Should return the same data set in the constructure!", () => {
    let engineer = new Engineer("2", "sam doe", "sam.doe@gmail.com", "samdoe");

    expect(engineer.getId()).toBe("2");
    expect(engineer.getName()).toBe("sam doe");
    expect(engineer.getEmail()).toBe("sam.doe@gmail.com");
    expect(engineer.getGithub()).toBe("samdoe");
    expect(engineer.getRole()).toBe("Engineer");
  });
});
