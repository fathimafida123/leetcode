/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   let arr1=[]
   let arr2=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            arr2.push(nums[i])
        }else{
            arr1.push(nums[i])
        }
   
    }
    nums.length=0;
    nums.push(...arr1,...arr2)
};