//Multiple Pointers
// creating pointers or values that correspond to an index or position
// and move towards the begininng, end, or middle based on a certain condition


//write a function called sumZero accepts a sorted array of integers
// the function should find the first pair where the sum is 0
// return an array that includes both values that sum to zero
// or undefined if the pair does not exist.
//sumZero([-3,-2,-1,0,1,2,3]) => [-3,3]
//sumZero([1,2,3]) => undefined


// NAIVE SOLUTION
// Time complexity o(n^2)
//space complexity - o(1)
function sumZero(arr){
  for (let i = 0; i < arr.length; i++) {
    for (var j = i + 1; i < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i],arr[j]]
      }
    }
  }
}

//REFACTORED SOLUTION
//time complexity o(N)
//space complexity o(1)

function sumZero(arr){
  let left = 0
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left],arr[right]]
    }else if (sum > 0) {
      right--;
    }else {
      left ++
    }
  }
}
