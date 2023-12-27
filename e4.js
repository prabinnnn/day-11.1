function checkString(inputString) {
  if (typeof inputString !== "string" || inputString.length === 0) {
    console.log("Invalid input. Please enter a non-empty string.");
  }
}

try {
  checkString("hello"); // This will not log anything
  checkString(""); // This will log the error message
} catch (error) {
  console.log("Caught an error: " + error.message);
}
