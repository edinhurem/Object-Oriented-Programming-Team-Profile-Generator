const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Should return the same data set in the constructure!", () => {
    let intern = new Intern("I001", "John Doe", "john.doe@gmail.com", "UNNV");

    expect(intern.getId()).toBe("I001");
    expect(intern.getName()).toBe("John Doe");
    expect(intern.getEmail()).toBe("john.doe@gmail.com");
    expect(intern.getSchool()).toBe("UNNV");
    expect(intern.getRole()).toBe("Intern");
  });
});
