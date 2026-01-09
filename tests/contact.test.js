// contact.test.js

import Contact from "../src/contact.js";

test('Should show an error if name is shorter than 2 chars', () => {
  const contact = new Contact();
  const assignShortName = () => {
    contact.name = 'A'; 
  };

  expect(assignShortName).toThrow('Name must have [2-25] chars');
});
