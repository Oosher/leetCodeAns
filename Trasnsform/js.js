var map = function(arr, fn) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i],i));
        
    }

    return newArr ;
};


function plusone(n) { return n + 1; };

function plusI(n, i) { return n + i; };



console.log( map([1,2,3,4],plusone));