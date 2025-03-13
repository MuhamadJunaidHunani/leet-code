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
log(mismatch)

console.log(isMatch("mississippik", "mis*is*.p*."), "❤️ true");