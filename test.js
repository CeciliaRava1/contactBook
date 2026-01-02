import promptSync from 'prompt-sync';
import TextClass from './testClass.js';
let newClass = new TextClass()
const prompt = promptSync();

let nameInput = ''




nameInput = prompt('Type your name')


newClass.greetings(nameInput)
