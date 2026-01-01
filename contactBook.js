// contactBook.js

import Contact from "./contact.js"
import promptSync from 'prompt-sync';
const prompt = promptSync();


class contactBook {
    constructor() {
        this.contactList = []
        this.continue = 1
        this.contactToFind = ''
        this.contactIndex = 0
        this.userInput = 0
        this.correctInput = false
    }

    addContact() {
        let duplicateName = true
        let duplicatePhone = true
        let invalidOption = true
        this.newContact = new Contact()

        while (this.newContact._name == undefined || duplicateName) {

            this.newContact.name = prompt('Name: ')
            
            for (let i = 0; i < this.contactList.length; i++) {
                    
                if (this.newContact.name == this.contactList[i].name) {
                        
                    throw new Error('Name already exists') //
                        
                } else {
                    duplicateName = false
                }
            }
              
            if(this.contactList.length == 0) {
                duplicateName = false
            }
        }
 
        while ((this.newContact._phoneNumber == undefined || duplicatePhone) && this.continue != 0) {
            this.newContact.phoneNumber = Number(prompt('Phone number: '))
            
            for (let i = 0; i < this.contactList.length; i++) {
                
                if (this.newContact.phoneNumber == this.contactList[i].phoneNumber) {
                    
                    throw new Error('Phone already exists') //
                    
                } else {
                    duplicatePhone = false
                }
            }
            
            if(this.contactList.length == 0) {
                duplicatePhone = false
            }
        }
        
        duplicatePhone = true
        this.contactList.push(this.newContact)
        console.log(this.contactList[0].name)
    }

    findContact() {
        this.contactToFind = prompt('Type name of the contact to find: ').toLowerCase()
        
        for (let i = 0; i < this.contactList.length; i++) {

            console.log(this.contactList[i]._name, this.contactToFind)

            if (this.contactList[i]._name == this.contactToFind) {
                console.log(this.contactList[i])
                this.contactIndex = i
                return this.contactList[i] ////
            } else {
                throw new Error('Contact is not in the contact book')
            }
        }
        
        if (this.contactList.length == 0) {
            throw new Error('Contact list is empty!')
        }
    }

    showContactList() {
        if (this.contactList.length != 0) {
            console.log(this.contactList)
        } else {
            throw new Error('Contact list is empty!')
        }
    }
    
    modifyContact() {

        if(this.findContact()) {
            
            console.log('What do you want to modify?')
            this.userInput = prompt('1. Name 2. Phone')
            
            while(!this.correctInput) {

                if (this.userInput == 1) {
                    this.newContact._name = prompt('Type new name: ').toLowerCase()
                    this.contactList[this.contactIndex].name = this.newContact._name
                    this.correctInput = true
                
                } else if (this.userInput == 2) {
                    this.newContact._phoneNumber = Number(prompt('Type new phone: '))
                    this.contactList[this.contactIndex].phoneNumber = this.newContact._phoneNumber
                    this.correctInput = true
                    
                } else {
                    throw new Error('You must type 1, 2. Try again') // Revisar si esto funciona
                }
            }
            this.correctInput = false
        } 
        return true
    }

    deleteContact() {
        let contactListLength = this.contactList.length
        
        if(this.findContact()) {
            this.userInput = prompt('1. Delete contact 0. Cancel')

            while(!this.correctInput) {

                if (this.userInput == 1) {

                    this.contactList.splice(this.contactIndex, 1)
                    this.correctInput = true
                
                } else if(this.userInput == 0) {
                    this.correctInput = true
                    
                } else {
                    throw new Error('You must type 0, 1. Try again')
                }
            }
            this.correctInput = false
        } 
        
        let contactListNewLength = this.contactList.length
        if(contactListLength != contactListNewLength) {
            return true 
        } else {
            throw new Error('Operation cancelled')
        }
    }
}

export default contactBook