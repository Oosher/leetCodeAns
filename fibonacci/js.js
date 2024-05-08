var fibGenerator = function*() {
    let first = 0;
    let second = 1;

    while (true) {
        yield first ; 
        [first,second] = [second,first+second];
        
    }
};


 const gen = fibGenerator();
 console.log(gen.next().value);  // 0
 console.log(gen.next().value); // 1