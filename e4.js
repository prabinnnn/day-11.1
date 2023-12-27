function checkstring(num) {
  if (num.string === 0) {
    console.log("invalid.please enter new sring");
  }
  try {
    checkstring("hello");
    checkstring("");
  } catch (error) {
    console.log("error message");
  }
}
