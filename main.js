// main.js

import promptSync from 'prompt-sync';
const prompt = promptSync();
let run = true
let contactToFind = ''

import contactBook from './contactBook.js';

let myContactBook = new contactBook()

while (run) {
    console.log(`
CONTACT BOOK
----------------------
1. Add new contact
2. Modify contact
3. Find contact data
4. Delete contact
5. Show contact list
6. Exit
----------------------`)
    let userInput = prompt('Select an option: ');

    switch(userInput) {
        case '1':

            let validContact = false;

            while (!validContact) {
                
                try {
                    myContactBook.addContact();
                    console.log('Contact added successfully!');
                    validContact =- true

                } catch (error) {
                    console.log('Error adding contact: ❌');
                    console.log(error.message); 
                }
            }
            break;

        case '2':
            console.log(`
----------------------
    MODIFY CONTACT
----------------------`)
            try {
                contactToFind = prompt('Type name of the contact to modify: ').toLowerCase()
                myContactBook.modifyContact(contactToFind)
                console.log('Contact modified!');
                    
            } catch (error) {
                console.log('Contact not modified: ❌');
                console.log(error.message); 
            }
            break

        case '3':
            console.log(`
----------------------
     FIND CONTACT
----------------------`)
            try {
                contactToFind = prompt('Type name of the contact to find: ').toLowerCase()
                myContactBook.findContact(nameToFind);
                console.log('Contact found!');
                    
            } catch (error) {
                console.log('Contact not found: ❌');
                console.log(error.message); 
            }
            break

        case '4':
            console.log(`
----------------------
    DELETE CONTACT
----------------------`)

            try {
                myContactBook.deleteContact()
                console.log('Contact deleted!');
                    
            } catch (error) {
                console.log('Contact not deleted: ❌');
                console.log(error.message); 
            }
            break

        case '5':
            console.log(`
----------------------
     ALL CONTACTS
----------------------`)
            try {
                myContactBook.showContactList()
                    
            } catch (error) {
                console.log(error.message); 
            }
            break

        case '6':
            console.log(`
----------------------
      BYE BYEE ! ;3
----------------------`)
            run = false
            break

        default:
            console.log('Select a valid option [1-6]')
    }
}