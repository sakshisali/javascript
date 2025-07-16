const obj1 = {1:"a", 2: "b"}
const obj2 ={3:"a", 4: "b"}

const obj3 ={...obj1,...obj2}
console.log(obj3)

const user =[
    {
        id : 1,
        email: "sakshi@gmail.com"
    },
     {
        id : 1,
        email: "sakshi@gmail.com"
    },
     {
        id : 1,
        email: "sakshi@gmail.com"
    },
]

user[1].email