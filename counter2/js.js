var createCounter = function(init) {
    let counter = init ; 
    return {
        increment:()=>counter+=1,
        decrement:()=>counter-=1,
        reset:()=>counter=init,
    }
};




const counter = createCounter(0);

console.log( counter.increment());
console.log( counter.increment());
console.log( counter.decrement());
console.log( counter.decrement());
console.log( counter.reset());
