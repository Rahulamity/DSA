// Given an array arr[] where no two adjacent elements are same, find the index of a peak element

function peakElement(arr) {
    // Code here
      let low = 0, high = arr.length - 1;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    // Check if mid is a peak
    if ((mid === 0 || arr[mid] > arr[mid - 1]) && (mid === arr.length - 1 || arr[mid] > arr[mid + 1])) {
        return mid;
    }
    
    // If the right neighbor is greater, move to the right half
    if (mid < arr.length - 1 && arr[mid] < arr[mid + 1]) {
        low = mid + 1;
    } else {  // Otherwise, move to the left half
        high = mid - 1;
    }
}

return -1;
} 