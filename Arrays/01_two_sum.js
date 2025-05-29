// Approach: HashMap
// Time: O(n), Space: O(n)

const input = [1, 3, 10, 11, 13];
function twoSum(arr, target) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(arr[i], i);
    }
    return [];
}

console.log(twoSum(input, 13))