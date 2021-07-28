

const langs = require("langs");
const franc = require('franc');
const stringGuess = process.argv[2]

// console.log("--------------")
// console.dir(francs);
// console.log("--------------")
// console.dir(langs);
// console.log("--------------")
let array = franc.all(stringGuess);

console.log(langs.where("3", array));

//console.log(langs.where(array[0][1], array[0][0]));


