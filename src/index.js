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
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line

  const message = `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price.`;

  // Change code above this line
  return message;
}

console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));

// ===== Задание 13 ====
function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}
console.log(isAdult(20));
console.log(isAdult(14));
console.log(isAdult(8));
console.log(isAdult(37));

// ===== Задание 14 ====
function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  // Change code below this line

  const isMatch = password === SAVED_PASSWORD;

  // Change code above this line
  return isMatch;
}

isValidPassword("mangodab3st");
isValidPassword("kiwirul3z");
isValidPassword("jqueryismyjam");

// ===== Задание 15 ====
function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = "You are an adult";
  } else {
    message = "You are a minor";
  }

  return message;
}
checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);

// ===== Задание 16 ====
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (available >= ordered) {
    message = "Order is processed, our manager will contact you.";
  } else {
    message = "Not enough goods in stock!";
  }
  // Change code above this line
  return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

// ===== Задание 17 ====
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

// ===== Задание 18 ====
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  let totalPrice = pricePerDroid * orderedQuantity;
  // Change code below this line
  if (customerCredits >= totalPrice) {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  } else {
    message = "Insufficient funds!";
  }
  // Change code above this line
  return message;
}

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));

// ===== Задание 19 ====
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    // Change this line
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    // Change this line
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));

// ===== Задание 20 ====
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered === 0) {
    message = "There are no products in the order!";
  } else if (ordered > available) {
    message = "Your order is too large, there are not enough items in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  // Change code above this line
  return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));

// ===== Задание 21 ====
function isNumberInRange(start, end, number) {
  const isInRange = number > start && number < end; // Change this line

  return isInRange;
}
console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 76));

// ===== Задание 22 ====
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

  return canAccessContent;
}

console.log(checkIfCanAccessContent("pro"));
console.log(checkIfCanAccessContent("starter"));
console.log(checkIfCanAccessContent("vip"));
console.log(checkIfCanAccessContent("free"));

// ===== Задание 23 ====
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

console.log(isNumberNotInRange(10, 30, 17));
console.log(isNumberNotInRange(10, 30, 5));
console.log(isNumberNotInRange(20, 50, 24));
console.log(isNumberNotInRange(20, 50, 76));

// ===== Задание 24 ====
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  }

  // Change code above this line
  return discount;
}

console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300));
console.log(getDiscount(5000));
console.log(getDiscount(20000));
console.log(getDiscount(50000));

// ===== Задание 25 ====
function checkStorage(available, ordered) {
  let message;
  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";
  // Change code below this line

  // Change code above this line
  return message;
}

console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 150));
console.log(checkStorage(150, 180));

// ===== Задание 26 ====
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  message =
    password === ADMIN_PASSWORD
      ? "Access is allowed"
      : "Access denied, wrong password!";
  // Change code above this line
  return message;
}

console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));

// ===== Задание 27 ====
function getSubscriptionPrice(type) {
  let price;

  switch (type) {
    case "professional":
      price = 20;
      break;

    case "organization":
      price = 50;
      break;

    case "starter":
      price = 0;
      break;
  }

  return price;
}

console.log(getSubscriptionPrice("professional"));
console.log(getSubscriptionPrice("organization"));
console.log(getSubscriptionPrice("starter"));

// ===== Задание 28 ====
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
    case ADMIN_PASSWORD:
      message = "Welcome!";
      break;
    default:
      message = "Access denied, wrong password!";
  }

  return message;
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword(null));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));

// ===== Задание 29 ====
function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case "Australia":
      message = `Shipping to ${country} will cost 170 credits`;
      break;
    case "China":
      message = `Shipping to ${country} will cost 100 credits`;
      break;
    case "Chile":
      message = `Shipping to ${country} will cost 250 credits`;
      break;
    case "Jamaica":
      message = `Shipping to ${country} will cost 120 credits`;
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }

  // Change code above this line
  return message;
}

// ===== Задание 30 ====
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

// ===== Задание 31 ====
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// ===== Задание 32 ====
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}

// ===== Задание 33 ====
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line

  if (message.length > maxLength) {
    result = `${message.slice(0, maxLength)}...`;
  } else {
    result = message;
  }
  /// Change code above this line
  return result;
}

console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// ===== Задание 34 ====
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

// ===== Задание 35 ====
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  return result;
}

// ===== Задание 36 ====
function checkForSpam(message) {
  let result;
  // Change code below this line
  message = message.toLowerCase();
  result = message.includes("spam") || message.includes("sale");
  // Change code above this line
  return result;
}
