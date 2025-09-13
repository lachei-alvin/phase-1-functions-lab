// Returns the number of blocks from HQ (42nd Street)
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42); // Absolute difference between location and HQ
}

// Returns the distance from HQ in feet
function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264; // Each block is 264 feet
}

// Returns the distance travelled in feet between start and destination
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264; // Absolute difference in blocks * feet per block
}

// Calculates the fare price based on distance travelled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination); // Get distance in feet

  if (distance <= 400) {
    return 0; // Free sample for distances up to 400 feet
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate of $25 for distances over 2000 feet
  } else {
    return "cannot travel that far"; // No rides over 2500 feet
  }
}
