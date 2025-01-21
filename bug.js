function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (typeof x !== 'number') {
    return NaN; // Handle non-number case
  } else {
    return x + 1; 
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); //Output: NaN
console.log(foo(10)); // Output: 11
console.log(foo('hello')); //Output: NaN