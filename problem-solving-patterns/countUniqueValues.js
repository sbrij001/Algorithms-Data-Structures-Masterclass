// create a function called count unique values
//accepts a sorted array, and counts the unique values in the array
//there can be negative numbers in the array but it will always be sorted.
// countUniqueValues([1,1,1,1,1,2]) => 2
// countUniqueValues([-2,-1,0,1,2]) => 4

function countUniqueValues(arr){
  if (arr.length === 0) {
    return 0
  }
  
  let i = 0
  for (var j = 1; i < arr.length; j++) {
    //compares arr[i] & array[j]
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}
