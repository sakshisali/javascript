const name = "sakshi"
const repoCount = 10

console.log(`Hello my name is ${name} and my repoCount is ${50}`)


const gameName = new String ("superstar")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);

const newStringOne = "   SAKSHI  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https//sakshi.com//sakshi%20sali"
console.log(url.replace('%20', '-'))
console.log(url.includes('com'))

