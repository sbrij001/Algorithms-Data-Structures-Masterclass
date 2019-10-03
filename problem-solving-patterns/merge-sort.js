// trial solution 1
// function mergeTwoArrays(arr1, arr2){
//   const result = [];
//
//   result.push(arr1);
//   const newArr = result.push(arr2);
//   const flattend = newArr.flat()
//   const sort = flattend.sort()
//   return sort
// }

// solution 2
// follows the fundamentals of merge sort
function mergeTwoArrays(arr1, arr2){
  //base case
  if( arr1.concat(arr2).length === 1){
    return arr1.concat(arr2)
  }

  const left = arr1.sort();
  const right = arr2.sort();
  const merged = left.concat(right);
  console.log(merged)
}

// function merge(arr){
//
// }
