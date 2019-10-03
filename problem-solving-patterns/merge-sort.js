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
  const result = [];
  let firstItemArr1 = arr1[0];
  let firstItemArr2 = arr2[0];
  let i = 1;
  let j = 1;
  // base case
  if(arr1.length === 0){
    return arr2
  }
    if(arr2.length === 0){
    return arr1
  }

  while(firstItemArr1 || firstItemArr2 ){
    if(!firstItemArr1 || firstItemArr1 < firstItemArr2){
      result.push(firstItemArr1)
      firstItemArr1 = arr1[i]
      i++
    }else{
      result.push(firstItemArr2)
      firstItemArr2 = arr2[j]
      j++
    }
  }
  console.log(result)
}

mergeTwoArrays([0,3,4,31],[4,6,30])
