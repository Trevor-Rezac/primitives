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

  const numArr = digits.map((digit) => +digit);
  const initialValue = 0;
  const sum = numArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  const evenOrOdd = sum % 2 ? 'oddish' : 'evenish';
  return evenOrOdd;
}

console.log(oddishOrEvenish(41));
console.log(oddishOrEvenish(121));

//input: 16
// expected output: [
//   1, 2, 'Fizz', 4, 'Buzz',
//   'Fizz', 7, 8, 'Fizz', 'Buzz',
//   11, 'Fizz', 13, 14, 'FizzBuzz',
//   16
// ]
//output returns "fizz" for multiples of 3 and "buzz" for multiples of 5
//output return "fizzbuzz" for numbers which are multiples of both 3 and 5

function fizzBuzz(number) {
  const numArr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numArr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      numArr.push('Fizz');
    } else if (i % 5 === 0) {
      numArr.push('Buzz');
    } else {
      numArr.push(i);
    }
  }
  return numArr;
}

console.log('results: ', fizzBuzz(16));

//input: [ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]
//expected output: 'BbBb'
//input: [ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]
//expected output: 'foo'

// function uniqueString(strings) {

// }
