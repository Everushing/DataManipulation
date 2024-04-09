// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50 ='true')



// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd ='true')

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25 ='false')

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique = 'true')

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



  //////
  ///
  ////////////////Part 2

  // Constants
const totalDistance = 1500; // miles
const fuelBudget = 175; // dollars
const fuelCostPerGallon = 3; // dollars
const speeds = [55, 60, 75]; // miles per hour
const efficiencies = [30, 28, 23]; // miles per gallon

// Function to calculate fuel needed for the entire trip
function calculateFuelNeeded(speed, efficiency) {
    return totalDistance / (speed / efficiency);
}

// Function to calculate trip duration
function calculateTripDuration(speed) {
    return totalDistance / speed;
}

// Function to compare results at different speeds
function compareResults() {
    let results = '';
    for (let i = 0; i < speeds.length; i++) {
        const fuelNeeded = calculateFuelNeeded(speeds[i], efficiencies[i]);
        const tripDuration = calculateTripDuration(speeds[i]);
        const fuelExpense = fuelNeeded * fuelCostPerGallon;

        results += `At ${speeds[i]} miles per hour:\n`;
        results += `   Fuel needed: ${fuelNeeded.toFixed(2)} gallons\n`;
        results += `   Trip duration: ${tripDuration.toFixed(2)} hours\n`;
        results += `   Fuel expense: $${fuelExpense.toFixed(2)}\n`;
        results += `   Budget enough? ${fuelExpense <= fuelBudget ? 'Yes' : 'No'}\n\n`;
    }
    return results;
}

// Log the results
console.log(compareResults());