#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence to Count Words"
    }
]);
// Apply the Method of trim And Split
const words = answer.sentence.trim().split(" ");
// Print the array of words to the console 
console.log(words);
// Count The Length of Sentence
console.log(`Your Sentence Word Count Is ${words.length}`);
