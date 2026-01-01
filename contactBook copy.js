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

            if (this.contactList.length == 0) {

                this.newContact.name = prompt('Name: ')

            } else {
                this.newContact.name = prompt('Name: ')
            
                for (let i = 0; i < this.contactList.length; i++) {
                    
                    if (this.newContact.name == this.contactList[i].name) {
                        
                        console.log('Name already exists')
                        console.log(this.contactList[i])
                        i = this.contactList.length 
                        
                        while (invalidOption) { 
            
                            this.continue = prompt('0. Cancel 1. Try again')
                            
                            if (this.continue == 0 || this.continue == 1) {
                                
                                if (this.continue == 0) { 
                                    duplicateName = false 
                                }
                                invalidOption = false
                                
                            } else {
                                console.log('You must input 0 or 1')
                            }
                        }
                        
                        invalidOption = true
                        
                    } else {
                        duplicateName = false
                    }
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
                    
                    console.log('This phone already exists. Try again')
                    invalidOption = true
                    console.log(this.contactList[i])
                    i = this.contactList.length  
                    
                    while (invalidOption) { 
                        this.continue = prompt('0. Cancel 1. Try again')
                        
                        if (this.continue == 0 || this.continue == 1) {
                            
                            if (this.continue == 0) { 
                                duplicatePhone = false 
                            }
                            invalidOption = false
                            
                        } else {
                            console.log('You must input 0 or 1')
                        }
                        this.continue = 1 //
                    }
                    invalidOption = true
                    
                } else {
                    duplicatePhone = false
                }
            }
            
            if(this.contactList.length == 0) {
                duplicatePhone = false
            }
        }
        
        duplicatePhone = true
        
        if (this.continue != 0) {
            this.contactList.push(this.newContact)
            console.log(this.contactList[0].name)
        } else {
            console.log('New contact cancel')
        }
    }

    findContact() {
        this.contactToFind = prompt('Type name of the contact to find: ').toLowerCase()
        
        for (let i = 0; i < this.contactList.length; i++) {

            if (this.contactList[i]._name == this.contactToFind) {
                console.log('Contact found')
                console.log(this.contactList[i])
                return this.contactList[i] ////
                this.contactIndex = i
            } else {
                console.log('Contact not found')
            }
        }
        
        if (this.contactList.length == 0) {
            console.log('Contact list is empty!')
        }
    }

    showContactList() {
        if (this.contactList.length != 0) {
            console.log(this.contactList)
        } else {
            console.log('There is no contacts')
        }
    }
    
    modifyContact() {

        if(this.findContact()) {
            
            console.log('What do you want to modify?')
            this.userInput = prompt('1. Name 2. Phone 0.Cancel')
            
            while(!this.correctInput) {

                if (this.userInput == 1) {
                    this.newContact._name = prompt('Type new name: ').toLowerCase()
                    this.contactList[this.contactIndex].name = this.newContact._name
                    this.correctInput = true
                    console.log('Contact modified!')
                
                } else if (this.userInput == 2) {
                    this.newContact._phoneNumber = prompt('Type new phone: ')
                    this.contactList[this.contactIndex].phoneNumber = this.newContact._phoneNumber
                    this.correctInput = true
                    console.log('Contact modified!')
                    
                } else if(this.userInput == 0) {
                    this.correctInput = true
                    
                } else {
                    console.log('You must type 0, 1, 2, 3. Try again')
                }
            }
            return true
        } 
    }

    deleteContact() {
        if(this.findContact()) {
            this.userInput = prompt('1. Delete contact 0. Cancel')

            while(!this.correctInput) {

                if (this.userInput == 1) {

                    this.contactList.splice(this.contactIndex, 1)
                    console.log('Contact deleted')
                    this.correctInput = true
                
                } else if(this.userInput == 0) {
                    this.correctInput = true
                    
                } else {
                    console.log('You must type 0, 1. Try again')
                }
            }
            this.correctInput = false
        } 
    }
}

export default contactBook