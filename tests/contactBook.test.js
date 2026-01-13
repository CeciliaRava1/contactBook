// contactBook.test.js

import ContactBook from "../src/contactBook.js";


test('should allow adding a name if it does not exist in the contact list', () => {
    const contactBook = new ContactBook();
    let contactListLength = contactBook.contactList.length;
    contactBook.addContact('Lili', 143234543);
    let newContactListLength = contactBook.contactList.length;

    expect(newContactListLength).toBe(contactListLength + 1); 
});


test('should throw error when adding a name that already exists', () => {
    const contactBook = new ContactBook();
    contactBook.addContact('Lili', 143234541);
    const assignRepeatedName = () => {
        contactBook.addContact('Lili', 143234543);   
    }

    expect(assignRepeatedName).toThrow('Name already exists'); 
});


// Ver el formato. Envio todo junto y guardado esta asi xxx xxx xxx (supongo)
// Ver como mostrar los valores del contacto guardado y del telefono nuevo durante el test en ejecucion
// No me dejo hacer los console antes
test('should throw error when adding a phone that already exists', () => {
    const contactBook = new ContactBook();
    contactBook.addContact('Lili', 143234541);
    const assignRepeatedName = () => {
        contactBook.addContact('Pipi', 143234541);   
    }

    expect(assignRepeatedName).toThrow('Phone already exists'); 
});



/*
test('should add a contact to the list when all attributes are valid');
test('should not add a contact when any attribute is invalid');

test('should find and return contact data if the name exists');
test('should throw error when searching for a name that does not exist');

test('should modify the contact name when the contact exists');
test('should throw error when trying to modify a non-existent contact name');

test('should modify the contact phone when the contact exists');

test('should be case-insensitive when searching for a contact');
*/