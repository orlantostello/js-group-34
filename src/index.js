// ============ Задание 1 ===========
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach((orderedItem) => (totalPrice += orderedItem));
  return totalPrice;
}

// ============ Задание 2 ===========
function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

// ============ Задание 3 ===========
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach((array) => {
    if (secondArray.includes(array)) {
      commonElements.push(array);
    }
  });

  return commonElements;
}

// ============ Задание 4 ===========
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// ============ Задание 5 ===========
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// ============ Задание 6 ===========
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => (totalPrice += item));

  return totalPrice;
};

// ============ Задание 7 ===========
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};

// ============ Задание 8 ===========
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
};

// ============ Задание 9 ===========
function changeEven(numbers, value) {
  const newArray = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else newArray.push(number);
  });
  return newArray;
}

// ============ Задание 10 ===========
const planets = ["Земля", "Марс", "Венера", "Юпитер"];

const planetsLengths = planets.map((planet) => planet.length);

// ============ Задание 11 ===========
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const titles = books.map((book) => book.title);

// ============ Задание 12 ===========
const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика"],
  },
];

const genres = books.flatMap((book) => book.genres);

// ============ Задание 13 ===========
const getUserNames = (users) => {
  return users.map((user) => user.name);
};

// ============ Задание 14 ===========
const getUserEmails = (users) => {
  return users.map((user) => user.email);
};

// ============ Задание 15 ===========
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// ============ Задание 16 ===========
const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика", "мистика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика", "приключения"],
  },
];

const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (allGenre, index, array) => array.indexOf(allGenre) === index
);

// ============ Задание 17 ===========
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Бернард Корнуэлл";

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// ============ Задание 18 ===========
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

// ============ Задание 19 ===========
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age >= minAge && user.age <= maxAge);
};

// ============ Задание 20 ===========

// ============ Задание 21 ===========

// ============ Задание 22 ===========

// ============ Задание 23 ===========

// ============ Задание 24 ===========

// ============ Задание 25 ===========

// ============ Задание 26 ===========

// ============ Задание 27 ===========

// ============ Задание 28 ===========

// ============ Задание 29 ===========

// ============ Задание 30 ===========

// ============ Задание 31 ===========

// ============ Задание 32 ===========

// ============ Задание 33 ===========

// ============ Задание 34 ===========

// ============ Задание 35 ===========

// ============ Задание 36 ===========

// ============ Задание 37 ===========

// ============ Задание 38 ===========

// ============ Задание 39 ===========

// ============ Задание 40 ===========

// ============ Задание 41 ===========

// ============ Задание 42 ===========

// ============ Задание 43 ===========

// ============ Задание 44 ===========

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => {
    if (user.friends.includes(friendName)) {
      return user.name;
    }
  });
};

console.log(getUsersWithFriend(users, "Adrian Cross"));
