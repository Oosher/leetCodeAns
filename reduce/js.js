var reduce = function(nums, fn, init) {
    if(nums.length){
        let ans = 0 ;
        for (let i = 0; i < nums.length; i++) {
            ans = fn(init,nums[i]);
            init=ans;
            
        }
        return ans;
    }

    return init ;
};





function sum(accum, curr) { return accum + curr; }

function sumMul(accum, curr) { return accum + curr * curr; }

console.log( reduce ([1,2,3,4],sumMul , 100)) ;