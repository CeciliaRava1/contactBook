// main.js

import promptSync from 'prompt-sync';
const prompt = promptSync();
let run = true

import contactBook from './contactBook.js';

let myContactBook = new contactBook()

while (run) {
    console.log(`
CONTACT BOOK
----------------------
1. Add new contact
2. Modify contact
3. Show contact data
4. Delete contact
5. Show contact list
6. Exit
----------------------`)
    let userInput = prompt('Select an option: ');

    switch(userInput) {
        case '1':
            console.log(`
----------------------
     ADD CONTACT
----------------------`)
            myContactBook.addContact()
            console.log('Contact added!')
            console.log(' ')
            break

        case '2':
            console.log(`
----------------------
    MODIFY CONTACT
----------------------`)
            break

        case '3':
            console.log(`
----------------------
     SHOW CONTACT
----------------------`)
            myContactBook.showContact()
            break

        case '4':
            console.log(`
----------------------
    DELETE CONTACT
----------------------`)
            break

        case '5':
            console.log(`
----------------------
     SHOW LIST
----------------------`)
            myContactBook.showContactList()
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