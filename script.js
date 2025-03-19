// Problem # 1

const isMatch = (text, pattern) => {
  if (pattern.length === 0) return text.length === 0;

  let firstMatch =
    text.length > 0 && (pattern[0] === text[0] || pattern[0] === ".");

  if (pattern.length >= 2 && pattern[1] === "*") {
    return (
      isMatch(text, pattern.slice(2)) ||
      (firstMatch && isMatch(text.slice(1), pattern))
    );
  } else {
    return firstMatch && isMatch(text.slice(1), pattern.slice(1));
  }
};

// console.time();
// console.log(isMatch("mississippik", "mis*is*.p*."));
// console.timeEnd();

// Problem # 2

var generate = function (numRows) {
  let res = [[1]];
  for (let i = 1; i < numRows; i++) {
    let prev = res[i - 1],
      row = [1];
    for (let j = 1; j < i; j++) row.push(prev[j - 1] + prev[j]);
    row.push(1);
    res.push(row);
  }
  return res;
};

// console.time();
// console.log(generate(5));
// console.timeEnd();

// Problem # 3

let searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return left;
};

// console.time();
// console.log(searchInsert([1, 3, 6], 5));
// console.timeEnd();

// Problem # 4

var divideArray = function (nums) {
  var abc = nums.sort((a, b) => a - b);
  var isPoss = true;
  for (let i = 0; i < abc.length; i += 2) {
    console.log(abc[i], abc[i + 1]);
    isPoss = abc[i] === abc[i + 1];
    if (!isPoss) {
      break;
    }
  }

  return isPoss;
};

// console.time();
// console.log(divideArray([15,13,5,20,18,2,20,8,20,17,10,19]));
// console.timeEnd();

// Problem # 5

var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return null;
};

// console.time();
// console.log(twoSum([-10 , -10] , -20));
// console.timeEnd();

// Problem # 6

var mergeKLists = function (lists) {
  const values = [];
  let mergedList = null;

  for (let list of lists) {
    while (list) {
      values.push(list.val);
      list = list.next;
    }
  }

  values.sort((a, b) => a - b);

  for (let i = values.length - 1; i >= 0; i--) {
    mergedList = { val: values[i], next: mergedList };
  }

  return mergedList;
};

// console.time();
// console.log(
//   mergeKLists([
//     null,
//     { val: -1, next: { val: 5, next: { val: 11, next: null } } },
//     null,
//     { val: 6, next: { val: 10, next: null } },
//   ])
// );
// console.timeEnd();

// Problem # 7

var minOperations = function (nums) {
  let res = 0;
  const fliped = [...nums]; // Create a copy
  const flip = (num) => 1 - num; // Flip 0 to 1 and 1 to 0

  for (let i = 0; i < nums.length; i++) {
    if (fliped[i] === 1) continue; // If already 1, move on

    if (i + 2 >= nums.length) return -1; // If flipping is impossible

    // Flip the current and next two elements
    fliped[i] = flip(fliped[i]);
    fliped?.[i + 1] = flip(fliped[i + 1]);
    fliped?.[i + 2] = flip(fliped[i + 2]);

    res++;
  }

  return res;
};


console.time();
console.log(minOperations([0, 1, 1, 1, 0, 0]));
console.timeEnd();

// Problem # 8

var reverseKGroup = function(head, k) {
  for(var i = 0 ; i<head.length ; i++){
      
  }
  return head
};

console.time();
console.log(minOperations([0, 1, 1, 1, 0, 0]));
console.timeEnd();
