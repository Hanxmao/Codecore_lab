// Write a function, isHomogenous, that takes an array and 
// returns true only if all its values are of the same type
//  (e.g. all the values are strings or all the values are numbers, etc).

//answer from tutor
function isHomogenous(arr) {
  let previousType; // type of the last iteration
  let currentType; // type of the current iteration

  // first iteration set the previousType
  if (Array.isArray(arr[0])) {
    previousType = 'array';
  } else {
    previousType = typeof arr[0];
  }

  // on every iteration check that previousType is the same as currentType
  for (let element of arr) {
    if (Array.isArray(element)) {
      currentType = 'array';
    } else {
      currentType = typeof element;
    }

    if (previousType !== currentType) {
      return false;
    }
    
    // swap the types
    previousType = currentType;
  }
  return true;
}



console.log(isHomogenous([1, 2, 3])) // true

console.log(isHomogenous(['a', 'b', 'c'])) // true

console.log(isHomogenous([[2], 'Xavier'])) // false

console.log(isHomogenous([[2], {colour: 'blue'}])) // false

console.log(isHomogenous([1, '2', 3])) // false