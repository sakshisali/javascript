const score = 100
console.log(score)

const balance = new Number(400)
console.log(balance)

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 23.8969
console.log(otherNumber.toPrecision(3))

const hundreds = 100000
console.log(hundreds.toLocaleString());

//********************************************** *//

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(7.8));
console.log(Math.floor(1.1))
console.log(Math.min(3,4,5,6))
console.log(Math.max(9,10,23))

console.log(Math.random())

 console.log((Math.random()*10) + 1);
 console.log(Math.floor(Math.random()*10) + 1);

 const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())

let myCreatedDate = new Date()
console.log(myCreatedDate.toDateString(2025,7,15))




