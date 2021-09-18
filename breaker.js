const num = 1234;
function breaker(guess){
    var result= "";
    var numString = num.toString();
    var guessString = guess.toString();
    for(i=0; i<guessString.length; i++){
        for(j=0;j<numString.length; j++){
            if(guessString[i]== numString[j]){
                if(i===j){
                    result+="X"
                }else{
                    result+="-"
                }
            }
        }
    }
    return result;
}

module.exports.breaker = breaker;