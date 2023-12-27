function numberisnegative(num) {
  if (Number(num) < 0) {
    throw new Error("Number is negative. Please enter a non-negative number.");
  }
}

try {
  numberisnegative(13); // This will not throw an exception
  numberisnegative(-2); // This will throw an exception
} catch (error) {
  console.log("Caught an error: " + error.message);
}
