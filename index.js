function calcTotalCandies(children, candy) {
  // Calculate the maximum number of candies that can be eaten altogether
  const totalCandiesEaten = Math.floor(candy / children) * children;

  // Log the result
  console.log(totalCandiesEaten);
}

// Test cases
calcTotalCandies(3, 10); // expected output: 9
calcTotalCandies(4, 20); // expected output: 16
calcTotalCandies(6, 25); // expected output: 24
