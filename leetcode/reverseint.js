// Given a 32-bit signed integer, reverse digits of an integer.

var reverse = function(x) {
    //    turn to string
    //    turn to array
    //    reverse array
    let isNegativeNum = false;
    if (x<0){
        isNegativeNum = true;
        x = x *-1; 
    }
    let numString = (x +"").split("").reverse().join("")
    let result = Number(numString);
    if(result > 2**31) {
        return 0}
    return isNegativeNum ? result* -1 : result
};