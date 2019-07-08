//patterns involves creating a window which can be an array or number from one postition to another
//depending on a certain condition the window either increases or closes
//very useful for keeping track of a subset of data in an array/string etc


//create a function called maxSubarraySum
// which accepts an array of integers and a number called n
// the function should calc the max sum of n consecutive ele in an arr
// maxSubarraySum([1,2,5,2,8,1,5,2], 2) => 10

//naive solution o(n^2)

function maxSubarraySum(array, num){
  if (num > array.length) {
    return null
  }
  //started at -Infinity in the case of an array of negative numbers
  //
  var max = -Infinity;
  //array.length - num + 1 make sure u are only add num digits at a time
  // u dont want to start at the end and add if num = 3 u wanna make sure ur starting at every 3rd num
  for (let i = 0; i < array.length - num + 1; i++) {
    let temp = 0;
    for (var j = 0; i < num; j++) {
      temp += array[i + j];
    }
    if (temp > max) {
      max = temp
    }
  }
  return max;
}
