// assume 2 arrays are sorted
// returned a merged sorted array
// what do we do if the the 2 arrays are not the same size?

// Merging arrays pseudocode

// create an empty array
// take a look at the smallest values in each input array
  // use a while loop
  // need 2 counters one called i and one called j
  // j and i start at 0
// while there are 2 arrays
  // take the item of the first array of the first item
  // check of that value is smaller than the item of the second array of the 1 item
  // push the item that is smaller in the result arr
  // once we finish with all the values in the first array
  // we push the rest of the items from the second array

  function merge(arr1, arr2){
    const merged = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length &&  j < arr2.length){
      if (arr1[i] > arr2[j]{
        merged.push[arr1[i]]
        arr1[i]++
      } else {
        merged.push[arr2[j]]
        arr2[j]++
      }
    }

    while(j < arr2.length){
      merge.push(arr2[j])
      j++
    }

    while(i < arr1.length){
      merge.push(arr1[i])
      i++
    }
    return merged;
  }
