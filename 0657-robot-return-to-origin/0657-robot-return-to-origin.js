/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let countx=0;
    let county=0;
    for(let i of moves){
        if(i=="R"){
            countx++;
        }
        else if(i=="L"){
            countx--;
        }
        else if(i=="U"){
            county++;
        }
        else if(i=="D"){
            county--;
        }
    }
    if(countx==0 && county==0){
        return true;
    }
    else{
        return false;
    }
    
};