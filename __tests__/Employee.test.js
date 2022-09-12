const Employee = require("../lib/Employee");

test ('creates a new employee with proper values', () => {
    const testEmployee = new Employee("name","1234","email");

    expect(testEmployee.name).toBe("name");
    expect(testEmployee.id).toBe("1234");
    expect(testEmployee.email).toBe("email");
});

test ('functions from employee can be called and return values', () => {
    const testEmployee = new Employee("name","1234","email");

    expect(testEmployee.getName()).toEqual(testEmployee.name);
    expect(testEmployee.getId()).toEqual(testEmployee.id);
    expect(testEmployee.getEmail()).toEqual(testEmployee.email);
    expect(testEmployee.getRole()).toEqual("Employee");
    
});