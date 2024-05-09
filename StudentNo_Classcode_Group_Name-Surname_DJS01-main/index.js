/**
 * Debugging Guide
 * 1. Make the code more readable - solved
 * 2. Pick up calculation errors - solved
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc) - solved
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


// Function to calculate new velocity // input validation check to see if all argument are numbers
function calcNewVelocity(velocity, acceleration, time) { 
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') { 
    throw new Error('Error: velocity, acceleration, and time must be numbers.');
  }
  return velocity + ((acceleration*3.6)* time);
}

// Calculted new distance
const newDistance = initialDistance + (initialVelocity * (timeSeconds / 3600));

// Calculated remaining fuel
const remainingFuel = initialFuel - (fuelBurnRate * timeSeconds);

// Calculated new velocity (based on acceleration)
const newVelocity = calcNewVelocity(initialVelocity, acceleration, timeSeconds);

// Console.logs
console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);






