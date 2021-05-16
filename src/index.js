// ============ Задание 1 =============
function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }

  return "You are a minor";
}

// ============ Задание 2 =============
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}

// ============ Задание 3 =============
function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }

  return "The order is accepted, our manager will contact you";
  // Change code above this line
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

// ============ Задание 4 =============
const fruits = ["apple", "plum", "pear", "orange"];

// ============ Задание 5 =============
const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// ============ Задание 6 =============
const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[1] = "peach";
fruits[3] = "banana";

// ============ Задание 7 =============
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length;

// ============ Задание 8 =============
const fruits = ["apple", "peach", "pear", "banana"];

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// ============ Задание 9 =============
function getExtremeElements(array) {
  const lastElementIndex = array.length - 1;
  const firstElement = array[0];
  const lastElement = array[lastElementIndex];
  array = [firstElement, lastElement];

  return array;
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// ============ Задание 10 =============
function splitMessage(message, delimeter) {
  let words;

  words = message.split(delimeter);

  return words;
}

// ============ Задание 11 =============
function calculateEngravingPrice(message, pricePerWord) {
  const messageArray = message.split(" ");
  let total = messageArray.length * pricePerWord;

  return total;
}

// ============ Задание 12 =============
function makeStringFromArray(array, delimeter) {
  let string;

  string = array.join(delimeter);

  return string;
}

// ============ Задание 13 =============
function slugify(title) {
  const slug = title.toLowerCase().split(" ").join("-");

  return slug;
}

// ============ Задание 14 =============
const fruits = ["apple", "plum", "pear", "orange", "banana"];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

// ============ Задание 15 =============
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];

const allClients = oldClients.concat(newClients);

// ============ Задание 16 =============
function makeArray(firstArray, secondArray, maxLength) {
  let newArray = firstArray.concat(secondArray);

  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }

  return newArray;
}

// ============ Задание 17 =============
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  console.log(i);
}

// ============ Задание 18 =============
function calculateTotal(number) {
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }

  return total;
}

// ============ Задание 19 =============

const fruits = ["apple", "plum", "pear", "orange"];

for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i];
  console.log(fruit);
}

// ============ Задание 20 =============
function calculateTotalPrice(order) {
  let total = 0;

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  return total;
}

// ============ Задание 21 =============
function findLongestWord(string) {
  const array = string.split(" ");
  let longWord = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longWord.length) {
      longWord = array[i];
    }
  }
  return longWord;
}

// ============ Задание 22 =============

// ============ Задание 23 =============

// ============ Задание 24 =============

// ============ Задание 25 =============

// ============ Задание 26 =============
