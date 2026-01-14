// contact.js

class Contact{

    constructor() {
    }

    set name(newName) {
        if (typeof newName !== 'string') {
            throw new Error('Name must be a String');
        }

        let newNameLength = newName.length;
        if (newNameLength < 2 || newNameLength > 25) {
            throw new Error('Name must have [2-25] chars');
        }

        this._name = newName.toLowerCase();
    }

    set phoneNumber(newPhoneNumber) {
        if (typeof newPhoneNumber != 'number') {
            throw new Error('Phone must be a number')
        }

        let newPhoneLength = newPhoneNumber.toString().length

        if (newPhoneLength == 9) {
            this._phoneNumber = newPhoneNumber.toString()
        } else {
            throw new Error('Phone number must have [9] digits')
        }

    }

    get name() {
        return `Name: ${this._name}`
    }

    get phoneNumber() {
        this._phoneNumber = this._phoneNumber.substring(0, 3) + ' ' + this._phoneNumber.substring(3, 6) + ' ' + this._phoneNumber.substring(6, 9)
        return `Tel:  ${this._phoneNumber}`
    }

}

export default Contact


