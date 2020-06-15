/*
 * Given two non-empty arrays of integers, write a function that determines
 * whether the second array is a subsequence of the first one.
 * A subsequence of an array is a set of numbers that aren't necessarily adjacent
 * in the array but that are in the same order as they appear in the array. For
 * instance, the numbers.
 *  form a subsequence of the array
 * Note that a single number in an array and the array itself are both valid subsequences of the array.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * See my solutions
 */


function isValidSubsequence(array, sequence) {
  var validation = [];
  for(let n = 0; n <= array.length; n++){
    if(array[n] === undefined){
      for(let n = 0; n < sequence.length; n++){
        if(sequence[n] !== validation[n])	return false;
      }
      return true;
    }
    else if(sequence.indexOf(array[n]) !== -1)	validation.push(array[n]);
  }
}

function isValidSubsequence2(array, sequence) {
  var c = -1;
  for(let key of sequence){
    if((array.indexOf(key) !== -1) && (array.indexOf(key) > c)){
      c = array.indexOf(key);	array[array.indexOf(key)] = '-';
    }
    else	return false;
  }
  return true;
}


/*
 * Sample Input
 * array = [5, 1, 22, 25, 6, -1, 8, 10]
 * sequence  = [1, 6, -1, 10]
 */
