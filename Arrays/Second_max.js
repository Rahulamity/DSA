let arr = [10, 5, 20, 8, 15];

// Step 1: Find max
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

// Step 2: Find second max
let secondMax = null;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < max) {
    if (secondMax === null || arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
}

console.log("Second largest number is:", secondMax);