// (1) The 'if' function
// https://www.codewars.com/kata/54147087d5c2ebe4f1000805
function _if(bool, func1, func2) {
  bool ? func1() : func2()
}

// (2) Growth of a Population
// https://www.codewars.com/kata/563b662a59afc2b5120000c6
function nbYear(p0, percent, aug, p) {
  var years = 0
  while (p0 < p) {
    p0 += Math.floor((p0 * percent) / 100) + aug
    years++
  }
  return years
}

// (3) Sum of odd numbers
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
function rowSumOddNumbers(n) {
  return n ** 3
}

// (4) Find the smallest integer in the array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0]
  }
}

// (5) Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014
function sumTwoSmallestNumbers(numbers) {
  return numbers.sort((a, b) => a - b) && numbers[0] + numbers[1]
}

// (6) Simple multiplication
// https://www.codewars.com/kata/583710ccaa6717322c000105
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9
}

// (7) Convert a string to an array
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
function stringToArray(string) {
  return string.split(' ')
}

// (8) Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
  return n.toString().split('').reverse().map(Number)
}

// (9) Convert a Number to a String!
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8
function numberToString(num) {
  return num.toString()
}

// (10) Gravity Flip
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673
const flip = (d, a) => {
  return d === 'R' ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x)
}

// (11) Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f
function squareSum(numbers) {
  return numbers.reduce((acc, curr) => {
    return acc + curr ** 2
  }, 0)
}

// (12) Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
  return s
    .toLowerCase()
    .split('')
    .map((item, i) => {
      let j = i
      let currItem = item
      while (j > 0) {
        j--
        item += currItem
      }
      return item[0].toUpperCase() + item.slice(1)
    })
    .join('-')
}

// (13) Is this a triangle?
// https://www.codewars.com/kata/56606694ec01347ce800001b
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b
}

// (14) Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers) {
  let ascSortedNumbers = numbers.split(' ').sort((a, b) => a - b)
  let max = ascSortedNumbers[ascSortedNumbers.length - 1]
  let min = ascSortedNumbers[0]

  return `${max} ${min}`
}

// (15) Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155
function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  )
}

// (16) Multiply
// https://www.codewars.com/kata/50654ddff44f800200000004
function multiply(a, b) {
  return a * b
}

// (17) Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
function past(h, m, s) {
  return 1000 * (h * 3600 + m * 60 + s)
}

// (18) Invert values
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
function invert(array) {
  return array.map((item) => item * -1)
}

// (19) String repeat
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr(n, s) {
  return s.repeat(n)
}

// (20) Add Length
// https://www.codewars.com/kata/559d2284b5bb6799e9000047
function addLength(str) {
  return str.split(' ').map((item) => `${item} ${item.length}`)
}

// (21) How many lightsabers do you own?
// https://www.codewars.com/kata/51f9d93b4095e0a7200001b8
function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0
}

// (22) Powers of 2
// https://www.codewars.com/kata/57a083a57cb1f31db7000028
function powersOfTwo(n) {
  const arr = []
  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i))
  }
  return arr
}

// (23) Check same case
// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
function sameCase(a, b) {
  if (!a.match(/[a-zA-Z]/g) || !b.match(/[a-zA-Z]/g)) {
    return -1
  } else if (
    (a.match(/[A-Z]/g) && b.match(/[A-Z]/g)) ||
    (a.match(/[a-z]/g) && b.match(/[a-z]/g))
  ) {
    return 1
  } else {
    return 0
  }
}

// (24) Coefficients of the Quadratic Equation
// https://www.codewars.com/kata/5d59576768ba810001f1f8d6
function quadratic(x1, x2) {
  return [1, -x1 - x2, x1 * x2]
}

// (25) Quarter of the year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
const quarterOf = (month) => {
  return Math.ceil(month / 3)
}

// (26) A wolf in sheep's clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
  const wolfPosition = queue.indexOf('wolf')
  const endPosition = queue.length - 1
  return wolfPosition === endPosition
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${
        endPosition - wolfPosition
      }! You are about to be eaten by a wolf!`
}

// (27) Closest elevator
// https://www.codewars.com/kata/5c374b346a5d0f77af500a5a
function elevator(left, right, call) {
  return Math.abs(call - right) <= Math.abs(call - left) ? 'right' : 'left'
}

// (28) Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131
function points(games) {
  let score = 0
  games.map((game) => {
    if (Number(game[0]) > Number(game[2])) {
      score += 3
    } else if (Number(game[0]) === Number(game[2])) {
      score += 1
    } else {
      score += 0
    }
  })
  return score
}

// (29) Pillars
// https://www.codewars.com/kata/5bb0c58f484fcd170700063d
function pillars(numPill, dist, width) {
  return dist * 100 * (numPill - 1) + (numPill > 2 ? (numPill - 2) * width : 0)
}

// (30) Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2)
}

// (31) Total pressure calculation
// https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a
const solution = (M1, M2, m1, m2, V, T, R = 0.082) => {
  return ((m1 / M1 + m2 / M2) * R * (T + 273.15)) / V
}

// (32) Sum of differences in array
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
function sumOfDifferences(arr) {
  arr.sort((a, b) => b - a)
  let sum = 0
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1]
  }
  return sum
}

// (33) easy logs
// https://www.codewars.com/kata/5b68c7029756802aa2000176
function logs(x, a, b) {
  return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x)
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
  }

  let m1 = arr_val[0] * unit[arr_unit[0]]
  let m2 = arr_val[1] * unit[arr_unit[1]]
  let d = arr_val[2] * unit[arr_unit[2]]

  return (g * m1 * m2) / (d * d)
}

// (35) If you can't sleep, just count sheep!!
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
const countSheep = function (num) {
  let str = ''
  for (let i = 0; i < num; i++) {
    str += `${i + 1} sheep...`
  }
  return str
}

// (36) Draw stairs
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
function drawStairs(n) {
  let str = 'I'
  for (let i = 2; i <= n; i++) {
    str += '\n' + ' '.repeat(i - 1) + 'I'
  }
  return str
}

// (37) Expressions Matter
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
function expressionMatter(a, b, c) {
  let arr = [a + b + c, (a + b) * c, a + b * c, a * b * c, a * (b + c)]
  return Math.max(...arr)
}

// (38) Student's Final Grade
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100
  } else if (exam > 75 && projects >= 5) {
    return 90
  } else if (exam > 50 && projects >= 2) {
    return 75
  } else {
    return 0
  }
}

// (39) Area or Perimeter
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : 2 * l + 2 * w
}

// (40) Help the Elite Squad of Brazilian forces BOPE
// https://www.codewars.com/kata/5ab52526379d20736b00000e
function magNumber(info) {
  const weapons = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5,
  }
  return Math.ceil((info[1] * 3) / weapons[info[0]])
}

// (41) The Feast of Many Beasts
// https://www.codewars.com/kata/5aa736a455f906981800360d
function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  )
}

// (42) Find Nearest square number
// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
// function nearestSq(n) {
//   return (n ** 0.5).toFixed() ** 2;
// }
function nearestSq(n) {
  return Math.pow(Math.round(Math.sqrt(n)), 2)
}

// (43) Cat years, Dog years
// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
let humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) {
    return [1, 15, 15]
  }
  if (humanYears === 2) {
    return [2, 24, 24]
  }

  let [humanAge, catAge, dogAge] = [humanYears, 24, 24]
  while (humanYears > 2) {
    humanYears--
    catAge += 4
    dogAge += 5
  }

  return [humanAge, catAge, dogAge]
}

// (44) Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
  return Math.ceil(year / 100)
}

// (45) Define a card suit
// https://www.codewars.com/kata/5a360620f28b82a711000047
function defineSuit(card) {
  const suits = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades',
  }
  return suits[card[card.length - 1]]
}

// (46) Multiple of index
// https://www.codewars.com/kata/5a34b80155519e1a00000009
function multipleOfIndex(array) {
  return array.filter((item, index) => item % index === 0)
}

// (47) CSV representation of array
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
function toCsvText(array) {
  let csv = ''
  for (let item of array) {
    csv += item.join() + '\n'
  }
  return csv.slice(0, -1)
}

// (48) Multiplication table for number
// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
// function multiTable(number) {
//   let table = [];
//   for (let i = 1; i <= 10; i++) {
//     table.push(`${i} * ${number} = ${i * number}`);
//   }
//   return table.join("\n");
// }
function multiTable(number) {
  let table = ''
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}\n`
  }
  return table.slice(0, -1)
}

// (49) Type of sum
// https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba
function typeOfSum(a, b) {
  return typeof (a + b)
}

// (50) Array plus array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((a, b) => a + b)
}

// (51) The falling speed of petals
// https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b
function sakuraFall(v) {
  return v > 0 ? (5 * 80) / v : 0
}

// (52) Third Angle of a Triangle
// https://www.codewars.com/kata/5a023c426975981341000014
function otherAngle(a, b) {
  return 180 - (a + b)
}

// (53) Reversed sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
const reverseSeq = (n) => {
  let arr = []
  for (let i = n; i > 0; i--) {
    arr.push(i)
  }
  return arr
}

// (54) Convert to Binary
// https://www.codewars.com/kata/59fca81a5712f9fa4700159a
// function toBinary(n) {
//   return Number(n.toString(2));
// }
function toBinary(n) {
  let binary = ''
  let rem = 0
  while (n !== 0) {
    rem = n % 2
    n = parseInt(n / 2)
    binary += rem
  }
  return Number(binary.split('').reverse().join(''))
}

// (55) Potenciation
// https://www.codewars.com/kata/59fc72fe235f93838b002235
// function power(x, y) {
//   return x ** y;
// }
function power(x, y) {
  let total = 1
  for (i = 1; i <= y; i++) {
    total *= x
  }
  return total
}

// (56) !a == a?!
// https://www.codewars.com/kata/59f9796cffe75f9299000025
// const a = [];
const a = '0'

// (57) Return the day
// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
function whatday(num) {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  return weekdays[num - 1] || 'Wrong, please enter a number between 1 and 7'
}

// (58) Is he gonna survive?
// https://www.codewars.com/kata/59ca8246d751df55cc00014c
function hero(bullets, dragons) {
  return bullets >= dragons * 2
}

// (59) Simple Fun #352: Reagent Formula
// https://www.codewars.com/kata/59c8b38423dacc7d95000008
function isValid(formula) {
  if (
    (formula.includes(7) || formula.includes(8)) &&
    !(formula.includes(1) && formula.includes(2)) &&
    !(formula.includes(3) && formula.includes(4)) &&
    ((!formula.includes(5) && !formula.includes(6)) ||
      (formula.includes(5) && formula.includes(6)))
  ) {
    return true
  } else {
    return false
  }
}

// (60) For Twins: 2. Math operations
// https://www.codewars.com/kata/59c287b16bddd291c700009a
function iceBrickVolume(radius, bottleLength, rimLength) {
  return 2 * radius * radius * (bottleLength - rimLength)
}

// (61) For Twins: 1. Types
// https://www.codewars.com/kata/59c1302ecb7fb48757000013
function typeValidation(variable, type) {
  return typeof variable === type
}

// (62) Find the Integral
// https://www.codewars.com/kata/59811fd8a070625d4c000013
function integrate(c, e) {
  return `${c / ++e}x^${e}`
}

// (63) USD => CNY
// https://www.codewars.com/kata/5977618080ef220766000022
function usdcny(usd) {
  return (usd * 6.75).toFixed(2) + ' Chinese Yuan'
}

// (64) Contamination #1 -String-
// https://www.codewars.com/kata/596fba44963025c878000039
function contamination(text, char) {
  return char.repeat(text.length)
}

// (65) Aspect Ratio Cropping - Part 1
// https://www.codewars.com/kata/596e4ef7b61e25981200009f
function aspectRatio(x, y) {
  return [Math.ceil((y * 16) / 9), y]
}

// (66) FIXME: Replace all dots
// https://www.codewars.com/kata/596c6eb85b0f515834000049
// const replaceDots = function(str) {
//   return str.replace(/\./g,'-');
// }
const replaceDots = function (str) {
  return str.split('.').join('-')
}

// (67) Sum The Strings
// https://www.codewars.com/kata/5966e33c4e686b508700002d
// function sumStr(a, b) {
//   return String(+a + +b);
// }
function sumStr(a, b) {
  return String(Number(a) + Number(b))
}

// (68) Take the Derivative
// https://www.codewars.com/kata/5963c18ecb97be020b0000a2
function derive(c, e) {
  return c * e + 'x^' + (e - 1)
}

// (69) Capitalization and Mutability
// https://www.codewars.com/kata/595970246c9b8fa0a8000086
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1)
}

// (70) Pythagorean Triple
// https://www.codewars.com/kata/5951d30ce99cf2467e000013
function isPythagoreanTriple(i) {
  return i.sort((a, b) => a - b) && i[0] ** 2 + i[1] ** 2 === i[2] ** 2
}

// (71) 5 without numbers !!
// https://www.codewars.com/kata/59441520102eaa25260000bf
// function unusualFive() {
//   return ["", "", "", "", ""].length;
// }
function unusualFive() {
  return 'aaaaa'.length
}

// (72) Count Odd Numbers below n
// https://www.codewars.com/kata/59342039eb450e39970000a6
function oddCount(n) {
  return Math.floor(n / 2)
}

// (73) Get Nth Even Number
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed
function nthEven(n) {
  return n * 2 - 2
}

// (74) 8kyu interpreters: HQ9+
// https://www.codewars.com/kata/591588d49f4056e13f000001
function HQ9(code) {
  if (code === 'H') return 'Hello World!'
  if (code === 'Q') return 'Q'
  if (code === '9') return bottle(99)

  function bottle(n) {
    if (n === 2) {
      return `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`
    } else {
      return (
        `${n} bottles of beer on the wall, ${n} bottles of beer.
Take one down and pass it around, ${n - 1} bottles of beer on the wall.
` + bottle(n - 1)
      )
    }
  }
}

// (75) Simple Fun #261: Whose Move
// https://www.codewars.com/kata/59126992f9f87fd31600009b
// function whoseMove(lastPlayer, win) {
//   return (
//     (lastPlayer === "white" && win && "white") ||
//     (lastPlayer === "white" && !win && "black") ||
//     (lastPlayer === "black" && win && "black") ||
//     (lastPlayer === "black" && !win && "white")
//   );
// }
function whoseMove(lastPlayer, win) {
  return win ? lastPlayer : lastPlayer === 'white' ? 'black' : 'white'
}

// (76) Find the first non-consecutive number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}

// (77) Geometry Basics: Circle Circumference in 2D
// https://www.codewars.com/kata/58e43389acfd3e81d5000a88
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius
}

// (78) Geometry Basics: Distance between points in 2D
// https://www.codewars.com/kata/58dced7b702b805b200000be
// function distanceBetweenPoints(a, b) {
//   return ((a.x - b.x) ** 2 + (a.y - b.y) ** 2) ** 0.5;
// }
function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

// (79) Geometry Basics: Circle Area in 2D
// https://www.codewars.com/kata/58e3f824a33b52c1dc0001c0
function circleArea(circle) {
  return Math.PI * circle.radius ** 2
}

// (80) Do you speak "English"?
// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058
function spEng(sentence) {
  return sentence.search(/english/i) !== -1
}

// (81) Find out whether the shape is a cube
// https://www.codewars.com/kata/58d248c7012397a81800005c
var cubeChecker = function (volume, side) {
  return side > 0 && volume > 0 && side ** 3 == volume
}

// (82) Difference of Volumes of Cuboids
// https://www.codewars.com/kata/58cb43f4256836ed95000f97
function findDifference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2])
}

// (83) Find Multiples of a Number
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f
function findMultiples(integer, limit) {
  let arr = []
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i)
  }
  return arr
}

// (84) Who is going to pay for the wall?
// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7
function whoIsPaying(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name]
}

// (85) Merge two sorted arrays into one
// https://www.codewars.com/kata/5899642f6e1b25935d000161
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b)
}

// (86) Calculate Price Excluding VAT
// https://www.codewars.com/kata/5890d8bc9f0f422cf200006b
function excludingVatPrice(price) {
  return price !== null ? Number(((price * 100) / 115).toFixed(2)) : -1
}

// (87) Simple Fun #1: Seats in Theater
// https://www.codewars.com/kata/588417e576933b0ec9000045
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row)
}

// (88) NBA full 48 minutes average
// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd
function pointsPer48(ppg, mpg) {
  return Math.round(((48 * ppg) / mpg) * 10) / 10 || 0
}

// (89) Will there be enough space?
// https://www.codewars.com/kata/5875b200d520904a04000003
function enough(cap, on, wait) {
  return on + wait >= cap ? on + wait - cap : 0
}

// (90) Grasshopper - Terminal game combat function
// https://www.codewars.com/kata/586c1cf4b98de0399300001d
function combat(health, damage) {
  return Math.max(health - damage, 0)
}

// (91) Ensure question
// https://www.codewars.com/kata/5866fc43395d9138a7000006
function ensureQuestion(s) {
  return s.endsWith('?') ? s : s + '?'
}

// (92) All Star Code Challenge #18
// https://www.codewars.com/kata/5865918c6b569962950002a1
// function strCount(str, letter) {
//   return str.split(letter).length - 1;
// }
// function strCount(str, letter) {
//   return str.length - str.replace(new RegExp(letter, "gi"), '').length;
// }
function strCount(str, letter) {
  let count = 0
  for (let item of str.split('')) {
    if (item === letter) {
      count++
    }
  }
  return count
}

// (93) Thinkful - Logic Drills: Traffic light
// https://www.codewars.com/kata/58649884a1659ed6cb000072
function updateLight(current) {
  return { green: 'yellow', yellow: 'red', red: 'green' }[current]
}

// (94) Thinkful - Number Drills: Blue and red marbles
// https://www.codewars.com/kata/5862f663b4e9d6f12b00003b
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (
    (blueStart - bluePulled) / (blueStart - bluePulled + redStart - redPulled)
  )
}

// (95) Will you make it?
// https://www.codewars.com/kata/5861d28f124b35723e00005e
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft
}

// (96) BASIC: Making Six Toast.
// https://www.codewars.com/kata/5834fec22fb0ba7d080000e8
// function sixToast(num) {
//   return num - 6 < 0 ? (num - 6) * -1 : num - 6;
// }
function sixToast(num) {
  return Math.abs(num - 6)
}

// (97) ES6 string addition
// https://www.codewars.com/kata/582e4c3406e37fcc770001ad
function joinStrings(string1, string2) {
  return `${string1} ${string2}`
}

// (98) Duck Duck Goose
// https://www.codewars.com/kata/582e0e592029ea10530009ce
function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name
}

// (99) Sum Strings as Numbers
// https://www.codewars.com/kata/5324945e2ece5e1f32000370
// function sumStrings(a, b) {
//   return (BigInt(a) + BigInt(b)).toString()
// }
// function sumStrings(a, b) {
//   return String(BigInt(a) + BigInt(b))
// }
function sumStrings(a, b) {
  return `${BigInt(a) + BigInt(b)}`
}
