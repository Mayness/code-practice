// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false
function validatePIN (pin) {
  //return true or false
  return /^[0-9]{4|6}$/.test(pin) // 或：1,在()中用| 语句   2, 在[]中写连续的语句，注意没有|
}
console.time();
validatePIN('1234')
validatePIN('12345')
console.timeEnd();