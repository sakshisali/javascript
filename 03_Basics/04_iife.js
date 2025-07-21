//immediately invoked function expression// (IIFE)

// (function chai (){
//     console.log(`DB CONNECTED`);

// })();

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

(function aurCode(){
    console.log(`2DB CONNECTED`)

})();

( (name) => {
    console.log(`sakshi, ${name}`)
})('vishakha')