//BINARY SEARCH

var nums = [-8, 7, 6 ,4, 3, 0, 2, 1, 10, 9 , 23, 45, 87, 85];

let left = 0 ;
let right = nums.length -1 ;
let target = 9 ;

function findNine(){
    while(left <=right){
let mid = left + Math.floor((right-left)/2)

if(nums[mid] === target) {
    return mid
}else if (mid < target){
left = mid + 1
}else{
    right = mid -1
}

}

return -1
}

console.log(findNine(nums));


//[1.4](#array--largest-difference) Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element**
//javascript
var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
// [7, 8, 4, 9, 9, 15, 3, 1, 10] would return `11` based on the difference between `4` and `15`
// Notice: It is not `14` from the difference between `15` and `1` because 15 comes before 1.

findLargestDifference(array);

function findLargestDifference(array) {
  // If there is only one element, there is no difference
  if (array.length <= 1) return -1;

  // currentMin will keep track of the current lowest
  var currentMin = array[0];
  var currentMaxDifference = 0;

  // We will iterate through the array and keep track of the current max difference
  // If we find a greater max difference, we will set the current max difference to that variable
  // Keep track of the current min as we iterate through the array, since we know the greatest
  // difference is yield from `largest value in future` - `smallest value before it`

  for (var i = 1; i < array.length; i++) {
    if (array[i] > currentMin && (array[i] - currentMin > currentMaxDifference)) {
      currentMaxDifference = array[i] - currentMin;
    } else if (array[i] <= currentMin) {
      currentMin = array[i];
    }
  }

  // If negative or 0, there is no largest difference
  if (currentMaxDifference <= 0) return -1;

  return currentMaxDifference;
}
console.log(findLargestDifference(array));


// ## Recursion
// <a name="recursion--decimal-to-binary"></a><a name="4.1"></a>
// **[4.1](#recursion--decimal-to-binary) Write a recursive function that returns the binary string of a given decimal number**
//   Given `4` as the decimal input, the function should return `100`

//   javascript
  decimalToBinary(3); // 11
  decimalToBinary(8); // 1000
  decimalToBinary(1000); // 1111101000

  function decimalToBinary(digit) {
    if(digit >= 1) {
      // If digit is not divisible by 2 then recursively return proceeding
      // binary of the digit minus 1, 1 is added for the leftover 1 digit
      if (digit % 2) {
        return decimalToBinary((digit - 1) / 2) + 1;
      } else {
        // Recursively return proceeding binary digits
        return decimalToBinary(digit / 2) + 0;
      }
    } else {
      // Exit condition
      return '';
    }
  }



//   ## Numbers
// <a name="numbers--power-of-two"></a><a name="5.1"></a>
// - **[5.1](#numbers--power-of-two) Given an integer, determine if it is a power of 2. If so,
//   return that number, else return -1. (0 is not a power of two)**

  isPowerOfTwo(4); // true
  isPowerOfTwo(64); // true
  isPowerOfTwo(1); // true
  isPowerOfTwo(0); // false
  isPowerOfTwo(-1); // false

  // For the non-zero case:
  function isPowerOfTwo(number) {
    // `&` uses the bitwise n.
    // In the case of number = 4; the expression would be identical to:
    // `return (4 & 3 === 0)`
    // In bitwise, 4 is 100, and 3 is 011. Using &, if two values at the same
    // spot is 1, then result is 1, else 0. In this case, it would return 000,
    // and thus, 4 satisfies are expression.
    // In turn, if the expression is `return (5 & 4 === 0)`, it would be false
    // since it returns 101 & 100 = 100 (NOT === 0)

    return number & (number - 1) === 0;
  }

  // For zero-case:
  function isPowerOfTwoZeroCase(number) {
    return (number !== 0) && ((number & (number - 1)) === 0);
  }
  
  //[1.3](#array--unique) Removing duplicates of an array and returning an array of only unique elements**
 
  // ES6 Implementation
  var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

  Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]

  // ES5 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

  uniqueArray(array); // [1, 2, 3, 5, 9, 8]

  function uniqueArray(array) {
    var hashmap = {};
    var unique = [];

    for(var i = 0; i < array.length; i++) {
      // If key returns undefined (unique), it is evaluated as false.
      if(!hashmap.hasOwnProperty(array[i])) {
        hashmap[array[i]] = 1;
        unique.push(array[i]);
      }
    }

    return unique;
  }


  //TWO SUM 
  
  const twoSum = function(nums, target) {
    const hash = {}; // Stores seen numbers: {seenNumber: indexItOccurred}
  
    for (let i = 0; i < nums.length; i++) { // loop through all numbers
      const n = nums[i]; // grab the current number `n`.
      if (hash[target - n] !== undefined) { // check if the number we need to add to `n` to reach our target has been seen:
        return [hash[target - n], i]; // grab the index of the seen number, and the index of the current number
      }
      hash[n] = i; // update our hash to include the. number we just saw along with its index.
    }
    return []; // If no numbers add up to equal the `target`, we can return an empty array
  }
  
  console.log(twoSum([1, 2, 3], 5)); // [1, 2]


  console.log(decimalToBinary(192))


var aaray = [ 11, 15, 8, 3, 9, 16];


