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

//input: 121
//output: 'Evenish'
//because: 1 + 2 + 1 = 4

function oddishOrEvenish(number) {
  const digits = number.toString().split('');
  console.log('digits: ', digits);
  const numArr = digits.map((digit) => +digit);
  const initialValue = 0;
  const sum = numArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  const evenOrOdd = sum % 2 === 0 ? 'evenish' : 'oddish';
  return evenOrOdd;
}

console.log(oddishOrEvenish(41));
