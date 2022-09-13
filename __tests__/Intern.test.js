const Intern = require("../lib/Intern");

test ('creates a new Intern with proper values', () => {
    const testIntern = new Intern("name","1234","email","school");

    expect(testIntern.name).toBe("name");
    expect(testIntern.id).toBe("1234");
    expect(testIntern.email).toBe("email");
    expect(testIntern.school).toBe("school");
    
});

test ('functions from Intern can be called and return values', () => {
    const testIntern = new Intern("name","1234","email","school");

    expect(testIntern.getName()).toEqual(testIntern.name);
    expect(testIntern.getId()).toEqual(testIntern.id);
    expect(testIntern.getEmail()).toEqual(testIntern.email);
    expect(testIntern.getSchool()).toEqual(testIntern.school);
    expect(testIntern.getRole()).toEqual("Intern");
});