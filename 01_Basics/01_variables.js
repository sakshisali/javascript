const accountId = 12345
let accountEmail = "sakshisali@123"
var accountPassword = "23456"
accountCity = "jaipur"

console.log(accountId);

// accountId = 2 not allow
// prefer not to use var
// because of issue in block scope and functional scope


accountEmail = "sakshi@123" 
accountPassword ="34567"
accountCity =  "Benguluru"

console.log(accountId);

console.table([accountEmail,accountPassword, accountCity])
