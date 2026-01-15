// contactBook.js

import Contact from "./contact.js"
import promptSync from 'prompt-sync';
const prompt = promptSync();


class ContactBook {
    constructor() {
        this.contactList = []
        this.contactIndex = 0
        this.correctInput = false
    }

    addContact(newName, newPhone) {
        let duplicateName = true
        let duplicatePhone = true
        this.newContact = new Contact()
        newName = newName.toLowerCase()

        while (newName == undefined || duplicateName) {
            
            for (let i = 0; i < this.contactList.length; i++) {

                if (newName == this.contactList[i]._name) {
                    
                    throw new Error('Name already exists') //
                        
                } else {
                    duplicateName = false
                    
                }
            }
              
            if(this.contactList.length == 0) {
                duplicateName = false
            }
        }
 
        while ((newPhone == undefined || duplicatePhone) && this.continue != 0) {
            
            for (let i = 0; i < this.contactList.length; i++) {
                
                if (newPhone == this.contactList[i]._phoneNumber) {
                    
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
        this.newContact.name = newName
        this.newContact.phoneNumber = newPhone
        this.contactList.push(this.newContact)
        console.log(this.contactList[0].name)
    }

    findContact(contactToFind) {
        
        this.contactIndex = -1
        contactToFind = contactToFind.toLowerCase()
        
        for (let i = 0; i < this.contactList.length; i++) {

            console.log(this.contactList[i]._name, contactToFind)

            if (this.contactList[i]._name == contactToFind) {
                console.log(this.contactList[i])
                this.contactIndex = i
                return this.contactList[i]
            }
        }
        if (this.contactIndex = -1) {
            throw new Error('Contact is not in the contact book')
        }
        
        if (this.contactList.length == 0) {
            throw new Error('Contact list is empty!')
        }
    }

    showContactList() {
        if (this.contactList.length != 0) {
            return this.contactList
        } else {
            throw new Error('Contact list is empty!')
        }
    }
    
    modifyContact(contactToFind, dataToModify, newData) {

        if(this.findContact(contactToFind)) {
                        
            while(!this.correctInput) {

                if (dataToModify == 1) {
                    this.contactList[this.contactIndex].name = newData
                    this.correctInput = true
                
                } else if (dataToModify == 2) {
                    this.contactList[this.contactIndex].phoneNumber = newData
                    this.correctInput = true
                    
                } else if(dataToModify == 0) {
                    this.correctInput = true
                } else {
                    throw new Error('You must type 1, 2. Try again') 
                }
            }
            this.correctInput = false
        } 
        return true
    }

    deleteContact(contactToFind) {
        let contactListLength = this.contactList.length
        
        if(this.findContact(contactToFind)) {
            
            this.contactList.splice(this.contactIndex, 1)
        } 
        
        let contactListNewLength = this.contactList.length
        if(contactListLength != contactListNewLength) {
            return true 
        } else {
            throw new Error('Operation cancelled')
        }
    }
}

export default ContactBook