const Engineer = require("../lib/Engineer");

test ('creates a new Engineer with proper values', () => {
    const testEngineer = new Engineer("name","1234","email","github");

    expect(testEngineer.name).toBe("name");
    expect(testEngineer.id).toBe("1234");
    expect(testEngineer.email).toBe("email");
    expect(testEngineer.github).toBe("github");
});

test ('functions from Engineer can be called and return values', () => {
    const testEngineer = new Engineer("name","1234","email","github");

    expect(testEngineer.getName()).toEqual(testEngineer.name);
    expect(testEngineer.getId()).toEqual(testEngineer.id);
    expect(testEngineer.getEmail()).toEqual(testEngineer.email);
    expect(testEngineer.getGithub()).toEqual(testEngineer.github);
    expect(testEngineer.getRole()).toEqual("Engineer");
});