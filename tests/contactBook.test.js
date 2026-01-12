// contactBook.test.js

test('should allow adding a name if it does not exist in the contact list');
test('should throw error when adding a name that already exists');

test('should allow adding a phone if it does not exist in the contact list');
test('should throw error when adding a phone that already exists');

test('should add a contact to the list when all attributes are valid');
test('should not add a contact when any attribute is invalid');

test('should find and return contact data if the name exists');
test('should throw error when searching for a name that does not exist');

test('should modify the contact name when the contact exists');
test('should throw error when trying to modify a non-existent contact name');

test('should modify the contact phone when the contact exists');

test('should be case-insensitive when searching for a contact');