// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  //happy coding!
//   store array and make a hash
    hashMap = {}
// create a for loop for each element in array
  for (i=0;i<A.length;i++){
    if(hashMap[A[i]]){
      hashMap[A[i]]+=1
    }
    else{
      hashMap[A[i]] = 1
      }
   }   
  return Object.keys(hashMap).find(key=> (key %2) !== 0)
}