// solve for base cases if on of the arrays is empty return other array
// create a merged arr that we will return
//create two variable that will store the first element in arr for both arrs
//loop and check if the number is true
// loop thru the arrays
// check if first arr element is less than second array element
// if so push that ele into merged arr
// if not push ele of the second arr
// return merged arr

function merge = (nums1, m, nums2,n) => {
  const merged = [];
  let firstEleInNums1 = nums1[0];
  let firstEleInNums2 = nums1[0];
  i = 1;
  j = 1;
  // base cases
  if(m === 0){
      return nums2
  }
  if(n === 0){
      return nums1
  }


[1,2,3] [2,5,6]
firstEleInNums1 = 1
firstEleInNums1 = 2
  while(firstEleInNums1 || firstEleInNums2){
    if(!firstEleInNums1 || firstEleInNums1 < firstEleInNums2 ){
      merged.push(firstEleInNums1)
      firstEleInNums1 = arr[i]
      i++
    }else {
      merge.push(firstEleInNums2)
      firstEleInNums2 = arr[j]
      j++
    }
  }

}
