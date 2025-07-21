const user= {
    userName: "sakshi",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`)
    }



}
user.welcomeMessage()

const addTwo = (num1, num2) => {
    return num1+num2

}
console.log(addTwo(3,5))


const subTwo = (num1, num2) => (num1+num2)

console.log(addTwo(3,5))

