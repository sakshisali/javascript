function sayMyName (){
    console.log("S")
    console.log("k")
    console.log("k")
    console.log("s")
    console.log("h")
    console.log("i")
}
sayMyName()

function addTwoNumber (number1,number2){
    console.log(number1+number2)
}
addTwoNumber(100,100)

function subTwoNumber(number1,number2){
    console.log(number1-number2)
}subTwoNumber(99,22)

function mulTwoNumber(num1,num2){
    console.log(num1*num2)
}

mulTwoNumber(2,2)

function loginUSerMessage(userName){
    return `${userName} just logged in`

}
console.log(loginUSerMessage("sakshi"))

function cardArrival (name){
    return `${name} is arrival`
}
console.log(cardArrival("creditcard"))  

function calculateCardPrice(...num1){
    return num1

}
console.log(calculateCardPrice(23,400,200,400,800))


//function with object//

const user ={
    userName: "sakshi",
    price : 199

}
function handleObject(anyObject){
    console.log(`userName is ${anyObject.userName} and price is ${anyObject.price}`)

}
handleObject(user)

//function with Object//

const myArray = [100,200,300,400,500]

function returnSecondValue(getArray){
    return getArray[4]
}
console.log(returnSecondValue(myArray))





























