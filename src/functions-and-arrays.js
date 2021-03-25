// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
}

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
let LongestWord = "";
function findLongestWord(arrayWords) {
  if (arrayWords.length == 0) {
    return null;
  }
  let longestWord = "";
  for (let i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i].length > longestWord.length) {
      longestWord = arrayWords[i];
    }
  }
  return longestWord;
}

/*Resolução do professor Iteration 2:
function findLongestWord(wordArray){


  if (wordArray.length === 0) {
    return null;
  }

  ou

  if (!wordArray.length){
    return null
  }


  let longestWord= '';

for (let i = 0; i < wordAraay.length; i = i + 1) {
if (wordAraay[i].length > longestWord.length) {
  longestWord = wordArray[1];
}
}
return longestWord
}
*/

// Iteration #3: Calculate the sum
function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

/* Resolução do professor- iteration 3:

function sumNumbers(numberArray) {
let sum = 0;

for (let i = 0; i < numberArray.length; i++){
sum += numberArray[i];
}

return sum;
}
*/

//ITERATION 3.1 (BONUS):

function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      throw new Error("Unsupported data type sir or ma'am");
    }

    if (typeof arr[i] === "string") {
      sum += arr[i].length;
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(arrayNumbers) {
  if (arrayNumbers.length == 0) {
    return null;
  }
  let avg = sumNumbers(arrayNumbers) / arrayNumbers.length;
  return avg;
}

//Resolução do professor iteration 4 + BONUS:

function avg(arr) {
  if (!arr.length) {
    return null;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      sum += arr[i].length;
    } else {
      sum += arr[i];
    }
  }

  const avg = sum / arr.length;

  return parseFloat(avg.toFixed(2));
}

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];
function averageWordLength(arrWords) {
  if (arrWords.length == 0) {
    return null;
  }
  let wrds = 0;
  let wrdsavg = 0;
  for (let i = 0; i < arrWords.length; i++) {
    wrds += arrWords[i].length;
    wrdsavg = wrds / arrWords.length;
  } /// arrWords.length
  return wrdsavg;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

//Resolução do professor:

//Utilizando indexOf (Jeito correto):
function uniquifyArray(words) {
  if (!words.length) {
    return null;
  }

  const uniqueWords = [];

  for (let i = 0; i < words.length; i++) {
    const index = uniqueWords.indexOf(words[i]);

    if (index < 0) {
      uniqueWords.push(words[i]);
    }
  }
  return uniqueWords;
}

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

//Minha Resolução
/*function doesWordExist(arrWrds) {
  if (arrWrds.length == 0) {
    return null;
  }
  let ifExists = "";
  for (let i = 0; i < arrWrds.length; i++) {
    if (arrWrds[i] == ifExists) {
      return true;
    } else if (ifExists !== arrWrds[i]) {
      return false;
    }
  }
}*/

//RESOLUÇÃO DO PROFESSOR ITERARION 6:
function doesWordExist(wordArr, searchTerm) {
  if (wordArr.length == 0) {
    return null;
  }

  let found = false;

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === searchTerm) {
      found = true;
    }
  }
  return found;
}

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

//Minha Resolução
//function howManyTimes(arrayOfWords, wordsSearch) {
// var count = 0;
// arrayOfWords.forEach((v) => v === wordsSearch && count++);
// return count;
//}

//Resolução do professor: Iteration 7

function howManyTimes(arrayOfWords, wordsSearch) {
  if (!arrayOfWords.length) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < arrayOfWords.length; i++) {
    if (wordsSearch === arrayOfWords[i]) {
      count++;
    }
  }
  return count;
}

// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49,
    49,
    99,
    40,
    17,
    81,
    18,
    57,
    60,
    87,
    17,
    40,
    98,
    43,
    69,
    48,
    4,
    56,
    62,
    0,
  ],
  [
    81,
    49,
    31,
    73,
    55,
    79,
    14,
    29,
    93,
    71,
    40,
    67,
    53,
    88,
    30,
    3,
    49,
    13,
    36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22,
    31,
    16,
    71,
    51,
    67,
    63,
    89,
    41,
    92,
    36,
    54,
    22,
    40,
    40,
    28,
    66,
    33,
    13,
    80,
  ],
  [
    24,
    47,
    32,
    60,
    99,
    3,
    45,
    2,
    44,
    75,
    33,
    53,
    78,
    36,
    84,
    20,
    35,
    17,
    12,
    50,
  ],
  [
    32,
    98,
    81,
    28,
    64,
    23,
    67,
    10,
    26,
    38,
    40,
    67,
    59,
    54,
    70,
    66,
    18,
    38,
    64,
    70,
  ],
  [
    67,
    26,
    20,
    68,
    2,
    62,
    12,
    20,
    95,
    63,
    94,
    39,
    63,
    8,
    40,
    91,
    66,
    49,
    94,
    21,
  ],
  [
    24,
    55,
    58,
    5,
    66,
    73,
    99,
    26,
    97,
    17,
    78,
    78,
    96,
    83,
    14,
    88,
    34,
    89,
    63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16,
    39,
    5,
    42,
    96,
    35,
    31,
    47,
    55,
    58,
    88,
    24,
    0,
    17,
    54,
    24,
    36,
    29,
    85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19,
    80,
    81,
    68,
    5,
    94,
    47,
    69,
    28,
    73,
    92,
    13,
    86,
    52,
    17,
    77,
    4,
    89,
    55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88,
    36,
    68,
    87,
    57,
    62,
    20,
    72,
    3,
    46,
    33,
    67,
    46,
    55,
    12,
    32,
    63,
    93,
    53,
    69,
  ],
  [
    4,
    42,
    16,
    73,
    38,
    25,
    39,
    11,
    24,
    94,
    72,
    18,
    8,
    46,
    29,
    32,
    40,
    62,
    76,
    36,
  ],
  [
    20,
    69,
    36,
    41,
    72,
    30,
    23,
    88,
    34,
    62,
    99,
    69,
    82,
    67,
    59,
    85,
    74,
    4,
    36,
    16,
  ],
  [
    20,
    73,
    35,
    29,
    78,
    31,
    90,
    1,
    74,
    31,
    49,
    71,
    48,
    86,
    81,
    16,
    23,
    57,
    5,
    54,
  ],
  [
    1,
    70,
    54,
    71,
    83,
    51,
    54,
    69,
    16,
    92,
    33,
    48,
    61,
    43,
    52,
    1,
    89,
    19,
    67,
    48,
  ],
];

//Resolução do professor: Iteration 8.0(Bonus)
function greatestProduct(matrix) {
  let product = 1;

  const numberOfRows = matrix.length;
  const numberOfColumns = matrix[0].length;

  for (let row = 0; row < numberOfRows; row++) {
    for (column = 0; column < numberOfColumns - 3; column++) {
      let rowProduct =
        matrix[row][column] *
        matrix[row][column + 1] *
        matrix[row][column + 2] *
        matrix[row][column + 3];

      if (rowProduct > product) {
        product = rowProduct;
      }
    }
  }

  for (let column = 0; column < numberOfColumns; column++) {
    for (let row = 0; row < numberOfRows - 3; row++) {
      let columnProduct =
        matrix[row][column] *
        matrix[row + 1][column] *
        matrix[row + 2][column] *
        matrix[row + 3][column];

      if (columnProduct > product) {
        product = columnProduct;
      }
    }
  }

  return product;
}
