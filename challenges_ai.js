/* ============================================================
   Week 4 — Functions Assignment (AI-assisted, advanced version)
   ------------------------------------------------------------
   This second version was written with help from an AI
   assistant (Claude). My own version is in challenges.js.

   What makes this version more advanced:
   - JSDoc comments describing each function
   - Input validation that throws clear errors
   - Default parameters
   - Rounding money to 2 decimal places
   - Trimming extra spaces from names
   - Handles middle names in getInitials
   - A small test helper that prints PASS / FAIL
   ============================================================ */


/**
 * Task 1 — Returns a greeting for the given name.
 * @param {string} name
 * @returns {string} e.g. "Hello, Fatuma!"
 */
const greetUser = (name = "friend") => {
  const cleanName = String(name).trim() || "friend";
  return `Hello, ${cleanName}!`;
};


/**
 * Task 2 — Returns the tip amount, rounded to 2 decimal places.
 * @param {number} bill        the bill total
 * @param {number} tipPercent  tip as a percent (default 15)
 * @returns {number}
 */
const calculateTip = (bill, tipPercent = 15) => {
  if (!Number.isFinite(bill) || !Number.isFinite(tipPercent)) {
    throw new TypeError("bill and tipPercent must be numbers");
  }
  if (bill < 0 || tipPercent < 0) {
    throw new RangeError("bill and tipPercent cannot be negative");
  }
  const tip = bill * (tipPercent / 100);
  return Math.round(tip * 100) / 100;
};


/**
 * Task 3 — Converts Celsius to Fahrenheit.
 * @param {number} c  temperature in °C
 * @returns {number}  temperature in °F
 */
const celsiusToFahrenheit = (c) => {
  if (!Number.isFinite(c)) {
    throw new TypeError("temperature must be a number");
  }
  return (c * 9) / 5 + 32;
};


// Constant so the adult age is easy to change in one place
const ADULT_AGE = 18;

/**
 * Task 4 — Returns true if age is 18 or older.
 * @param {number} age
 * @returns {boolean}
 */
const isAdult = (age) => Number.isFinite(age) && age >= ADULT_AGE;


/**
 * Stretch — Returns initials like "F.A.".
 * Works with middle names too: "Fatuma Hodan", "Ali" → "F.H.A."
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
const getInitials = (firstName = "", lastName = "") =>
  `${firstName} ${lastName}`
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part[0].toUpperCase()}.`)
    .join("");


/* ============================================================
   TEST CODE — same tests as challenges.js, plus PASS/FAIL
   ============================================================ */

const check = (label, actual, expected) => {
  const ok = actual === expected;
  console.log(`${ok ? "✅ PASS" : "❌ FAIL"}  ${label} → ${JSON.stringify(actual)}`);
};

console.log("=== Task 1: greetUser ===");
check('greetUser("Fatuma")', greetUser("Fatuma"), "Hello, Fatuma!");
check('greetUser("Asha")', greetUser("Asha"), "Hello, Asha!");
check('greetUser("  Ali  ")', greetUser("  Ali  "), "Hello, Ali!");

console.log("\n=== Task 2: calculateTip ===");
check("calculateTip(50, 20)", calculateTip(50, 20), 10);
check("calculateTip(80, 15)", calculateTip(80, 15), 12);
check("calculateTip(33.33, 10)", calculateTip(33.33, 10), 3.33);

console.log("\n=== Task 3: celsiusToFahrenheit ===");
check("celsiusToFahrenheit(0)", celsiusToFahrenheit(0), 32);
check("celsiusToFahrenheit(100)", celsiusToFahrenheit(100), 212);
check("celsiusToFahrenheit(25)", celsiusToFahrenheit(25), 77);

console.log("\n=== Task 4: isAdult ===");
check("isAdult(20)", isAdult(20), true);
check("isAdult(15)", isAdult(15), false);
check("isAdult(18)", isAdult(18), true);

console.log("\n=== Stretch: getInitials ===");
check('getInitials("Fatuma", "Ali")', getInitials("Fatuma", "Ali"), "F.A.");
check('getInitials("fatuma hodan", "ali")', getInitials("fatuma hodan", "ali"), "F.H.A.");

console.log("\n=== Error handling ===");
try {
  calculateTip("50", 20);
} catch (err) {
  console.log(`✅ PASS  calculateTip("50", 20) threw: ${err.message}`);
}
