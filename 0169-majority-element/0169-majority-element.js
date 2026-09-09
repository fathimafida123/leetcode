/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    for(let i of nums){
    let count=0;
    for(let j of nums){
        if(i===j){
            count++
        }
    }
    if(count>nums.length/2){
        return i
    }
    }
};