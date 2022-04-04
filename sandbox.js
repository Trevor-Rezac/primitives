//input : "alchemy rocks gold"
//expected output: "ymehcla skcor dlog"
function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

console.log(reverseWords('alchemy rocks gold'));
