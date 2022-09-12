const Manager = require("../lib/Manager");

test ('creates a new Manager with proper values', () => {
    const manager = new Manager("name","1234","email","69");

    expect(manager.name).toBe("name");
    expect(manager.id).toBe("1234");
    expect(manager.email).toBe("email");
    expect(manager.office).toBe("69");
});

test ('Manager functions return correct values', () => {
    const manager = new Manager("name","1234","email","69");

    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getId()).toEqual(manager.id);
    expect(manager.getEmail()).toEqual(manager.email);
    expect(manager.getRole()).toEqual("Manager");
});