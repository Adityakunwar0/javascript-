// Immediatley Invoked Function Expressions (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    // simple iife
    console.log(`DB CONNECTED TWO ${name}`)
}) ('Aditya')

