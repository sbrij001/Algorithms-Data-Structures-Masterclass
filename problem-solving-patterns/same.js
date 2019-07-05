// write a function called same
//accepts 2 arrays
// return true if every value in the arr has a corresponding value squared in the second array
// the frequency of values must be the same
//same([1,2,3],[4,1,9]) => true
//same([1,2,1],[4,4,1]) => false


// a NAIVE solution

function same(arr1,arr2){
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    //checks if the ele from arr1 squared is in arr2 using indexOf
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
      if (correctIndex === -1) {
        return false;
      }
      //will remove the element from the array if it matches
      arr2.splice(correctIndex, 1)
  }
  return true
}
