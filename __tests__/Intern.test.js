const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Should return the same data set in the constructure!", () => {
    let intern = new Intern("5", "john doe", "john.doe@gmail.com", "UNCC");

    expect(intern.getId()).toBe("5");
    expect(intern.getName()).toBe("john doe");
    expect(intern.getEmail()).toBe("john.doe@gmail.com");
    expect(intern.getSchool()).toBe("UNCC");
    expect(intern.getRole()).toBe("Intern");
  });
});
