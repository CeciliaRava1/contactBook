// contact.js

class Contact{

    constructor() {
    }

    set name(newName) {
        let newNameLength = newName.length
        if (typeof newName == 'string') {

            if (newNameLength >= 2 && newNameLength <= 25) {
                newName = newName.toLowerCase()
                this._name = newName
            } else {
                console.log('Name must have [2-25] chars')
            }

        } else {
            console.log('Name must be an String')
        }

    }

    set phoneNumber(newPhoneNumber) {

        let newPhoneLength = newPhoneNumber.toString().length
        if (typeof newPhoneNumber == 'number') {

            if (newPhoneLength == 9) {
                this._phoneNumber = newPhoneNumber.toString()
            } else {
                console.log('Phone number must have [9] digits')
            }

        } else {
            console.log('Phone number must be a number')
        }

    }

    get name() {
        return `Name: ${this._name}`
    }

    get phoneNumber() {
        let phoneFormat = ''
        phoneFormat = this._phoneNumber.substring(0, 3) + ' ' + this._phoneNumber.substring(3, 6) + ' ' + this._phoneNumber.substring(6, 9)
        return `Tel:  ${phoneFormat}`
    }

}

export default Contact


