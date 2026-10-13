/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let data= String(x).split("").reverse().join("")
   if(Number(x)===Number(data)){
    return  true
   }else{
   return false
   }

};