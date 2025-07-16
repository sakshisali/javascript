
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

const tinderUser  = new Object()  //singleton object//
console.log(tinderUser)           // Non-singlrton object//

tinderUser.id ="123a"
tinderUser.name = "sakshi"
tinderUser.isLoggedIn = true

// console.log(tinderUser)

const regularUser = {
    email : "sakshi@gmail.com",
    fullName : {
        userFullName :{
            firstname : "sakshi",
            lastname : "sali"
        }

     }
}
console.log(regularUser.fullName.userFullName.firstname);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 ={3:"a", 4: "b"}

const obj3 ={...obj1,...obj2}
console.log(obj3)







