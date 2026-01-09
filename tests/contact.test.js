// contact.test.js

import Contact from "../src/contact.js";

// --- Contact Class (Unit Tests) ---
test('should accept name when length is greater than or equal to 2', () => {
    const contact = new Contact();
    contact.name = 'Ludmila';

    expect(contact._name).toBe('ludmila'); 
});


test('should throw error when name length is less than 2', () => {
    const contact = new Contact();
    const assignLessName = () => {
        contact.name = 'L';
    }

    expect(assignLessName).toThrow('Name must have [2-25] chars'); 
});


test('should accept name when length is less than or equal to 25', () => {
    const contact = new Contact();
    contact.name = 'Ludmila Rodriguez';

    expect(contact._name).toBe('ludmila rodriguez'); 
});


test('should throw error when name length is greater than 25', () => {
    const contact = new Contact();
    const assignGreaterName = () => {
        contact.name = 'Ludmila Rodriguez De Albera Fernandez';
    }

    expect(assignGreaterName).toThrow('Name must have [2-25] chars'); 
});

// Ver manejo de numer to string en la logica
test('should accept phone when it has exactly 9 digits', () => {
    const contact = new Contact();
    contact.phone = 123456789;

    expect(contact._phoneNumber).toBe('123456789'); 
});

/*
test('should throw error when phone length is not 9 digits');

test('should return the phone number in format [xxx xxx xxxx]'); // get




// Example
test('Should show an error if name is shorter than 2 chars', () => {
    const contact = new Contact();
    const assignShortName = () => {
    contact.name = 'A'; 
    };

    expect(assignShortName).toThrow('Name must have [2-25] chars');
});
*/