// (1) The 'if' function
// https://www.codewars.com/kata/54147087d5c2ebe4f1000805
function _if(bool, func1, func2) {
  bool ? func1() : func2();
}

// (2) Growth of a Population
// https://www.codewars.com/kata/563b662a59afc2b5120000c6
function nbYear(p0, percent, aug, p) {
  var years = 0;
  while (p0 < p) {
    p0 += Math.floor((p0 * percent) / 100) + aug;
    years++;
  }
  return years;
}

// (3) Sum of odd numbers
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
function rowSumOddNumbers(n) {
  return n ** 3;
}

// (4) Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

// (5) Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014
function sumTwoSmallestNumbers(numbers) {
  return numbers.sort((a, b) => a - b) && numbers[0] + numbers[1];
}

// (6) Simple multiplication
// https://www.codewars.com/kata/583710ccaa6717322c000105
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// (7) Convert a string to an array
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
function stringToArray(string) {
  return string.split(" ");
}

// (8) Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

// (9) Convert a Number to a String!
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8
function numberToString(num) {
  return num.toString();
}

// (10) Gravity Flip
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673
const flip = (d, a) => {
  return d === "R" ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x);
};

// (11) Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f
function squareSum(numbers) {
  return numbers.reduce((acc, curr) => {
    return acc + curr ** 2;
  }, 0);
}

// (12) Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
  return s
    .toLowerCase()
    .split("")
    .map((item, i) => {
      let j = i;
      let currItem = item;
      while (j > 0) {
        j--;
        item += currItem;
      }
      return item[0].toUpperCase() + item.slice(1);
    })
    .join("-");
}

// (13) Is this a triangle?
// https://www.codewars.com/kata/56606694ec01347ce800001b
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b;
}

// (14) Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers) {
  let ascSortedNumbers = numbers.split(" ").sort((a, b) => a - b);
  let max = ascSortedNumbers[ascSortedNumbers.length - 1];
  let min = ascSortedNumbers[0];

  return `${max} ${min}`;
}

// (15) Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// (16) Multiply
// https://www.codewars.com/kata/50654ddff44f800200000004
function multiply(a, b) {
  return a * b;
}

// (17) Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
function past(h, m, s) {
  return 1000 * (h * 3600 + m * 60 + s);
}

// (18) Invert values
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
function invert(array) {
  return array.map((item) => item * -1);
}

// (19) String repeat
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr(n, s) {
  return s.repeat(n);
}

// (20) Add Length
// https://www.codewars.com/kata/559d2284b5bb6799e9000047
function addLength(str) {
  return str.split(" ").map((item) => `${item} ${item.length}`);
}

// (21) How many lightsabers do you own?
// https://www.codewars.com/kata/51f9d93b4095e0a7200001b8
function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

// (22) Powers of 2
// https://www.codewars.com/kata/57a083a57cb1f31db7000028
function powersOfTwo(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i));
  }
  return arr;
}

// (23) Check same case
// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
function sameCase(a, b) {
  if (!a.match(/[a-zA-Z]/g) || !b.match(/[a-zA-Z]/g)) {
    return -1;
  } else if (
    (a.match(/[A-Z]/g) && b.match(/[A-Z]/g)) ||
    (a.match(/[a-z]/g) && b.match(/[a-z]/g))
  ) {
    return 1;
  } else {
    return 0;
  }
}

// (24) Coefficients of the Quadratic Equation
// https://www.codewars.com/kata/5d59576768ba810001f1f8d6
function quadratic(x1, x2) {
  return [1, -x1 - x2, x1 * x2];
}

// (25) Quarter of the year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

// (26) A wolf in sheep's clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
  const wolfPosition = queue.indexOf("wolf");
  const endPosition = queue.length - 1;
  return wolfPosition === endPosition
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        endPosition - wolfPosition
      }! You are about to be eaten by a wolf!`;
}

// (27) Closest elevator
// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
function elevator(left, right, call) {
  return Math.abs(call - right) <= Math.abs(call - left) ? "right" : "left";
}

// (28) Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131
function points(games) {
  let score = 0;
  games.map((game) => {
    if (Number(game[0]) > Number(game[2])) {
      score += 3;
    } else if (Number(game[0]) === Number(game[2])) {
      score += 1;
    } else {
      score += 0;
    }
  });
  return score;
}

// (29) Pillars
// https://www.codewars.com/kata/5bb0c58f484fcd170700063d
function pillars(numPill, dist, width) {
  return dist * 100 * (numPill - 1) + (numPill > 2 ? (numPill - 2) * width : 0);
}

// (30) Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// (31) Total pressure calculation
// https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a
const solution = (M1, M2, m1, m2, V, T, R = 0.082) => {
  return ((m1 / M1 + m2 / M2) * R * (T + 273.15)) / V;
};

// (32) Sum of differences in array
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
function sumOfDifferences(arr) {
  arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }
  return sum;
}

// (33) easy logs
// https://www.codewars.com/kata/5b68c7029756802aa2000176
function logs(x, a, b) {
  return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
}

// (34) Find the force of gravity between two objects
// https://www.codewars.com/kata/5b609ebc8f47bd595e000627
const solution1 = (arr_val, arr_unit, g = 6.67e-11) => {
  const unit = {
    kg: 1,
    g: 1e-3,
    mg: 1e-6,
    μg: 1e-9,
    lb: 0.453592,
    m: 1,
    cm: 1e-2,
    mm: 1e-3,
    μm: 1e-6,
    ft: 0.3048,
  };

  let m1 = arr_val[0] * unit[arr_unit[0]];
  let m2 = arr_val[1] * unit[arr_unit[1]];
  let d = arr_val[2] * unit[arr_unit[2]];

  return (g * m1 * m2) / (d * d);
};

// (35) If you can't sleep, just count sheep!!
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
const countSheep = function (num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += `${i + 1} sheep...`;
  }
  return str;
};

console.log(Array(3));
