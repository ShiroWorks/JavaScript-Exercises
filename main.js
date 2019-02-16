// challange 1: reverse a string
//ex. reversString("hello") ==='olleh'

function reverseString(str) {
  /*Tip: If an empty string ("") is used as the separator, the string is split between each character.
  Note: The split() method does not change the original string.*/
  return str
    .split('')
    .reverse()
    .join('');
}
console.log(reverseString('hello'));

function reverseString2(str) {
  let revstr = '';
  for (const char of str) {
    revstr = char + revstr;
  }
  return revstr;
}

console.log(reverseString2('hello'));

function reverseString3(str) {
  output = '';

  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
}

console.log(reverseString3('hello'));

function reverseString4(str) {
  let output = '';
  for (let i = 0; i <= str.length - 1; i++) {
    output = str[i] + output;
  }
  return output;
}

console.log(reverseString4('hello'));

function reverseString5(str) {
  let output = '';
  str.split('').forEach(char => {
    output = char + output;
  });
  return output;
}

console.log(reverseString5('hello'));

function reverseString6(str) {
  return str.split('').reduce((str, char) => char + str, '');
}

console.log(reverseString6('helloo'));

// CHALLANGE 2 : VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true' , isPalindrome('hello') == false

function isPalindrome(str) {
  let reversestr = '';
  reversestr = str
    .split('')
    .reverse()
    .join('');

  let ispalin = str === reversestr ? true : false;
  return ispalin;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));

function isPalindrome2(str) {
  let revstring = str
    .split('')
    .reverse()
    .join('');
  return revstring === str;
}

console.log(isPalindrome2('racecar'));
console.log(isPalindrome2('hello'));

function isPalindrome3(str) {
  let revstring = '';
  for (const char of str) {
    revstring = char + revstring;
  }
  return str === revstring;
}

console.log(isPalindrome3('racecar'));
console.log(isPalindrome3('hello'));

// CHALLANGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const revString = int
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(revString) * Math.sign(int);
}

console.log(reverseInt(-234));

// CHALLANGE 4 : CAPITALIZE LETTERS
// Return a strig with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(' ');

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] =
      strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }
  return strArr.join(' ');
}

console.log(capitalizeLetters('game over'));

function capitalizeLetters2(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}
console.log(capitalizeLetters2('i love javscript'));

function capitalizeLetters3(str) {
  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });
}
console.log(capitalizeLetters3('i love javscript'));

// CHALLANGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  const charMap = {};

  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(function(char) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  for (let char in charMap) {
    //debugger;
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxCharacter('javascript'));

//CHALLANGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. for multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are miltiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 == 0 && i % 5 == 0) {
      output += 'FizzBuzz';
    } else if (i % 3 == 0) {
      output += 'Fizz';
    } else if (i % 5 == 0) {
      output += 'Buzz';
    } else {
      output += i;
    }
    console.log(output);
  }
}

fizzBuzz();

function fizzBuzz2() {
  for (let n = 1; n <= 100; n++) {
    let output = '';
    if (n % 3 == 0) output += 'Fizz';

    if (n % 5 == 0) output += 'Buzz';

    console.log(output || n);
  }
}

fizzBuzz2();

// CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen) {
  // Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  // Sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);

  // If multiple words, put into array
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );

  // Check if more than one array val
  if (longestWordArr.length === 1) {
    // Return the word
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}
// SOLUTION 2
//function longestWord(sen) {

//
// let maxLetters = 0;
// let outputArr = [];
// sen.toLowerCase()
//   .match(/\w+/g)
//   .forEach(word => {
//     if (!(word.length < maxLetters)) {
//       if (word.length > maxLetters) {
//         maxLetters = word.length;
//         outputArr = [];
//       }
//       outputArr.push(word);
//     }
//   });
// return outputArr.length > 1 ? outputArr : outputArr[0];
//}

// CHALLENGE 8: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // SOLUTION 1

  // // Init chunked arr
  // const chunkedArr = [];
  // // Set index
  // let i = 0;

  // // Loop while index is less than the array length
  // while (i < arr.length) {
  //   // Slice out from the index to the index + the chunk length and push on to the chunked array
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // Increment by chunk length
  //   i += len;
  // }

  // return chunkedArr;

  // SOLUTION 2

  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}
// SOLUTION 3
//function chunkArray(arr, len) {
//    let i=0, output = [], currArr = [];
//
//    arr.forEach(element => {
//        currArr.push(element);
//        i++;
//        if (i%len === 0 || i === arr.length) {
//            output.push(currArr);
//            currArr = [];
//            }
//        });
//    return output;

// SOLUTION 4
// return Array.from({ length: Math.ceil(arr.length / len) }, (v, i) =>
// arr.slice(i * len, i * len + len)
// );
//}
