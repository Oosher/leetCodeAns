var filter = function(arr, fn) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i],i))
            newArr.push(arr[i]);
        
    }

    return newArr;
    
};




function biggerThan10(n){
    return n>10?n:null;
}

function firstIndex(n, i) { return i === 2; }

console.log( filter([1,20,30,50,0,5],firstIndex) );