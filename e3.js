function arrayCheck(num) {
  if (num.length === 1 && num[0] === 0) {
    console.log("Invalid input. Please enter a new array.");
  }
}

try {
  arrayCheck([1, 2, 3, 4, 5]); // This will not log anything
  arrayCheck([]); // This will log the error message
} catch (error) {
  console.log("Caught an error: " + error.message);
}
