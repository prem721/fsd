// Set 8 Q2: find the longest word in a string
function longestWord(str) {
  const words = str.split(/\s+/).filter(Boolean);
  let longest = "";
  for (const w of words) {
    if (w.length > longest.length) longest = w;
  }
  return longest;
}
console.log(longestWord("JavaScript is a wonderful language")); // JavaScript
