/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let mul=1;
    let sum=0;
    let res=0;
    let num = String(n);
    for(let i of num){
        mul*=Number(i);
        sum+=Number(i);
       
    }
     res=mul-sum;
  return res;  
}