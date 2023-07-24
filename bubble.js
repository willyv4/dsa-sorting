/* Bubble sort!

Time Complexity: O(n^2) (Quadratic) 

What is it?

Bubble sort is a sorting algorithm that works by comparing each item in an array with the next item in the array,
essentially comparing two items at a time and swapping their places according to the comparison condition.
It continues this process until the whole array is sorted.

When is it useful?

Due to bubble sort's inefficiency,
it is only useful for small datasets as it has a time complexity of O(n^2),
which is quadratic time. This means that as the size of the dataset (n) grows,
the time it takes to sort the data grows nearly exponentially.

*/

// Implementation
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      // Loop to compare adjacent elements in the array
      if (arr[j] > arr[j + 1]) {
        // If the current element is greater than the next element, perform a swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true; // Set the swapped variable to true to indicate that a swap occurred
      }
    }
    if (!swapped) break; // If no swaps occurred during this pass, the array is already sorted, so exit the loop
  }
  return arr;
}

console.log(bubbleSort([1, 5, 2, 8, 0, 3, 6, 4, 8]));

/*
@Explanation

The bubbleSort function uses the Bubble Sort algorithm to sort the given array.

- The outer loop iterates over the array to perform a pass through the elements.
- The inner loop compares adjacent elements in the array and swaps them if they are in the wrong order.
- This process continues until the largest element "bubbles up" to the end of the array after each pass.

The algorithm repeats this process until no swaps are made during a pass, which indicates that the array is fully sorted.

The result of the sorted array is then logged to the console and returned.

For the input [1, 5, 2, 8, 0, 3, 6, 4, 8], the function will log the sorted array [0, 1, 2, 3, 4, 5, 6, 8, 8].
*/

module.exports = bubbleSort;
