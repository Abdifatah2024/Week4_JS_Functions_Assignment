/* ============================================================
   Week 4 — Functions Assignment
   ------------------------------------------------------------
   Write each function in its marked section.
   The test code at the bottom calls your functions and
   prints results to the console — don't change that part.
   ============================================================ */


/* ------------------------------------------------------------
   Task 1: greetUser(name) 👋

   Return a greeting string like "Hello, Fatuma!"

   greetUser("Fatuma") → "Hello, Fatuma!"
   greetUser("Asha")   → "Hello, Asha!"
   ------------------------------------------------------------ */

// ✍️ Solve it here ✍️
function greetUser(name) {
  return "Hello, " + name + "!";
}




/* ------------------------------------------------------------
   Task 2: calculateTip(bill, tipPercent) 💵

   Return the tip amount.
   Formula: bill * (tipPercent / 100)

   calculateTip(50, 20) → 10
   calculateTip(80, 15) → 12
   ------------------------------------------------------------ */

// ✍️ Solve it here ✍️
function calculateTip(bill, tipPercent) {
  let tip = bill * (tipPercent / 100);
  return tip;
}




/* ------------------------------------------------------------
   Task 3: celsiusToFahrenheit(c) 🌡️

   Return the temperature in Fahrenheit.
   Formula: (c * 9) / 5 + 32

   celsiusToFahrenheit(0)   → 32
   celsiusToFahrenheit(100) → 212
   ------------------------------------------------------------ */

// ✍️ Solve it here ✍️
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}




/* ------------------------------------------------------------
   Task 4: isAdult(age) 🎂

   Return true if age >= 18, otherwise false.
   Try writing this as an arrow function!

   isAdult(20) → true
   isAdult(15) → false
   ------------------------------------------------------------ */

// ✍️ Solve it here ✍️
const isAdult = (age) => age >= 18;




/* ------------------------------------------------------------
   🚀 STRETCH (optional): getInitials(firstName, lastName)

   Return initials like "F.A."
   getInitials("Fatuma", "Ali") → "F.A."
   ------------------------------------------------------------ */

// ✍️ Stretch: solve it here ✍️
function getInitials(firstName, lastName) {
  return firstName[0].toUpperCase() + "." + lastName[0].toUpperCase() + ".";
}




/* ============================================================
   👇 TEST CODE — DO NOT EDIT 👇
   This calls your functions and prints the results.
   ============================================================ */

console.log("=== Task 1: greetUser ===");
console.log(greetUser("Fatuma"));   // → "Hello, Fatuma!"
console.log(greetUser("Asha"));     // → "Hello, Asha!"

console.log("\n=== Task 2: calculateTip ===");
console.log(calculateTip(50, 20));  // → 10
console.log(calculateTip(80, 15));  // → 12

console.log("\n=== Task 3: celsiusToFahrenheit ===");
console.log(celsiusToFahrenheit(0));    // → 32
console.log(celsiusToFahrenheit(100));  // → 212
console.log(celsiusToFahrenheit(25));   // → 77

console.log("\n=== Task 4: isAdult ===");
console.log(isAdult(20));  // → true
console.log(isAdult(15));  // → false
console.log(isAdult(18));  // → true
