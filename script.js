// Problem # 1

// "mississippi", "mis*is*p*."

// var isMatch = function (s, p) {
//   //   if (p.includes(".*")) {
//   //     return true;
//   //   }
//   let result = true;
//   const astelicLetters = [];
//   for (var i = 0; i < s.length; i++) {
//     if (p[i])
//       if (p[i + 1] !== "*" && p[i] !== "*") {
//         result = p[i] === s[i] || p[i] === ".";
//         if (!result) {
//           return result;
//         }
//       } else if (p[i + 1] === "*") {
//         astelicLetters.push(p[i]);
//         continue;
//       } else {
//         continue;
//       }
//   }

//   return true;
// };

// console.log(isMatch("abc", "a.*c"), "❤️ true");
// console.log(isMatch("ab", ".*c"), "❤️ false");
// console.log(isMatch("aaa", "ab*a*c*a"), "❤️ true");
// console.log(isMatch("aaa", "a*a"), "❤️ true");
// console.log(isMatch("aab", "c*a*b"), "❤️ true");
// console.log(isMatch("ab", ".*"), "❤️ true");
// console.log(isMatch("abc", "a.c"), "❤️ true");
// console.log(isMatch("abcd", "d*"), "❤️ false");
// console.log(isMatch("mississippi", "mis*is*ip*."), "❤️ true");
// console.log(isMatch("a", "ab*"), "❤️ true");
// console.log(isMatch("bbbba", ".*a*a"), "❤️ true");
// console.log(isMatch("aa", "a"), "❤️ false");

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

// console.log(isMatch("mississippik", "mis*is*.p*."), "❤️ true");

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
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (nums[mid] === target) return mid;
    if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }
  
  return left; 
};


console.time();
console.log(searchInsert([1, 3, 6], 5));
console.timeEnd();
