// given 2 strings write  a function to determine if the second string
//is an anagram of the first
// an anagram is a word or phrased formed by rearranging the letters of another
// for example cinema & iceman


function validAnagram(first,second){
  //first check if the words are the same length
  if (first.length !== second.length) {
    return false
  }

  const lookup = {}

  for (var i = 0; i < first.length; i++) {
    let letter = first[i]
    // if letter exists add 1 else set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (var i = 0; i < second.length; i++) {
    let letter = second[i]
    // can't find letter or letter is 0 then it's not an anagram
    if (!lookup[letter]) {
      return false
    }else {
      lookup[letter] -= 1;
    }
  }
  return true
}
