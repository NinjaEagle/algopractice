Link to problem: https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
  //may the code be with you
    // convert num to string
    // split string
    // loop through string
        // square # by parsing string into int then back to string
    // change back to integer
    
  let newNum = Math.abs(num).toString().split('')
  let arr = newNum.map((n) => {
    return (parseInt(n)**2).toString()
  })
  return parseInt(arr.join(''))
  
}