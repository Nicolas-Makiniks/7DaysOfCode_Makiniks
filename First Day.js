// This challenge is for learn how comparison works in JS like == and === for values and types
// I just have to change the comparison in the IF not their output because this is the challenge, I'm not building a new script here
// I've translated all the code and sentences to english, and some outputs for more legible one...

let numberOne = 1;
let stringOne = '1';
let numberThirty = 30;
let stringThirty = '30';
let numberTen = 10;
let stringTen = '10';

if (numberOne == stringOne) {
    console.log(`The variables numberOne: ${numberOne} and stringOne: '${stringOne}' have the same value but different types`);
} else {
    console.log(`The variables numberOne: ${numberOne} and stringOne: '${stringOne}' don't have the same value`);
}

if (numberThirty === stringThirty) {
    console.log(`The variables numberThirty: ${numberThirty} and stringThirty: '${stringThirty}' have the same value and type`);
} else {
    console.log(`The variables numberThirty: ${numberThirty} and stringThirty: '${stringThirty}' have different types`);
}

if (numberTen == stringTen) {
    console.log(`The variables numberTen: ${numberTen} and stringTen: '${stringTen}' have the same value but different types`);
} else {
    console.log(`The variables numberTen: ${numberTen} and stringTen: '${stringTen}' have different values`);
}