// trial solution 1
function mergeTwoArrays(arr1, arr2){
  const result = [];

  result.push(arr1);
  const newArr = result.push(arr2);
  const flattend = newArr.flat()
  const sort = flattend.sort()
  return sort 
}
