// ===== Задание 1 ====
const productName = "Droid";
const pricePerItem = 2000;

// ===== Задание 2 ====
let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line

productName = "Repair droid";
pricePerItem = 3500;

// ===== Задание 3 ====
const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

// ===== Задание 4 ====
const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;

// ===== Задание 5 ====
const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// ===== Задание 6 ====
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// ===== Задание 7 ====
function sayHi() {
  console.log("Hello, this is my first function!");
}
sayHi();

// ===== Задание 8 ====
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// ===== Задание 9 ====
function add(a, b, c) {
  // Change code below this line

  return a + b + c;

  // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// ===== Задание 10 ====
function makeMessage(name, price) {
  // Change code below this line
  const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
}

// ===== Задание 11 ====
function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
}

// ===== Задание 12 ====
