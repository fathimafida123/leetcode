/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let max=0
   for(let i=0;i<sentences.length;i++){   
 let word=  sentences[i].split(" ").length;
     if(max<word){
       max=word
     }
   } 
  return max
};
