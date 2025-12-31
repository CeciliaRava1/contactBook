// contactBook.js

import Contact from "./contact.js"
import promptSync from 'prompt-sync';
const prompt = promptSync();


class contactBook {
    constructor() {
        this.contactList = []
    }
    
    showContactList() {
        console.log(this.contactList)
    }

    addContact() {
        this.newContact = new Contact()

        while (this.newContact._name == undefined) {
            this.newContact.name = prompt('Name: ')
        }
         // Validation phone[9]
        while (this.newContact._phoneNumber == undefined) {
            this.newContact.phoneNumber = Number(prompt('Phone number: '))
        }
        this.contactList.push(this.newContact)
    }

    showContact() {
        console.log(this.newContact.name)
        console.log(this.newContact.phoneNumber)
    }

    showContactList() {
        console.log(this.contactList)
    }
}

export default contactBook