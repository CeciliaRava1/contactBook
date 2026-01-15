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


test('should throw error when adding a phone that already exists', () => {
    const contactBook = new ContactBook();
    contactBook.addContact('Lili', 143234541);
    const assignRepeatedName = () => {
        contactBook.addContact('Pipi', '143234541');   
    }

    expect(assignRepeatedName).toThrow('Phone already exists'); 
});



test('should find and return contact data if the name exists', () => {
    const contactBook = new ContactBook();
    contactBook.addContact('Lili', 143234543);
    let index = 0;

    for (let i = 0; i < contactBook.contactList.length; i++) {
        if (contactBook.contactList[i]._name == 'Lili') {
            index = i;
        }
    };

    expect(contactBook.findContact('Lili')._name).toBe(contactBook.contactList[index]._name); 
});


test('should throw error when searching for a name that does not exist', () => {
    const contactBook = new ContactBook();
    const findNotExist = () => {
        contactBook.findContact('Pipina');   
    }

    expect(findNotExist).toThrow('Contact is not in the contact book'); 
});


test('should modify the contact name when the contact exists', () => {
    const contactBook = new ContactBook();
    contactBook.addContact('Lili', 143234543);
    contactBook.modifyContact('Lili', 1, 'Lumiere')

    expect(contactBook.findContact('Lumiere')._name).toBe('lumiere'); 
});



test('should throw error when trying to modify a non-existent contact name', () => {
    const contactBook = new ContactBook();
    const findNotExist = () => {
        contactBook.modifyContact('Lili', 1, 'Lumiere')

    }

    expect(findNotExist).toThrow('Contact is not in the contact book'); 
});


test('should modify the contact phone when the contact exists', () => {
    const contactBook = new ContactBook();
    contactBook.addContact('Lili', 143234543);
    contactBook.modifyContact('Lili', 2, 123123123)

    expect(contactBook.findContact('Lili')._phoneNumber).toBe('123123123'); 
});

// Edgy cases
test('should throw error when trying to delete from an empty contact list', () => {
    const contactBook = new ContactBook();
    const deleteEmptyList = () => {
        contactBook.deleteContact('Lili')

    }

    expect(deleteEmptyList).toThrow('Contact is not in the contact book'); 
});


test('should show contact list when it is have contacts', () => {
    const contactBook = new ContactBook();
    contactBook.addContact('Lili', 143234543);

    expect(contactBook.showContactList()).toBe(contactBook.contactList); 
});


test('should not show contact list when it is empty', () => {
    const contactBook = new ContactBook();
    const ShowContactsEmpty= () => {
        contactBook.showContactList()

    }

    expect(ShowContactsEmpty).toThrow('Contact list is empty!'); 
});