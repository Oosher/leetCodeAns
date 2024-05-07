var createCounter = function(n) {
    
    return function nPlus() {
        return n++;
    };
    
};



const call =createCounter(10);

console.log(call());
console.log(call());
console.log(call());

