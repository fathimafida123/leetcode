/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let arr =[...nums]
 let sr=arr.sort((a,b)=>b-a)
let res = sr[0];
return nums.indexOf(res)
}
