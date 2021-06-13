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
const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => {
    if (user.friends.includes(friendName)) {
      return user;
    }
  });
};

// ============ Задание 21 ===========
const getFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((elem, index, arr) => arr.indexOf(elem) === index);
};

// ============ Задание 22 ===========
const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive === true);
};

// ============ Задание 23 ===========
const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive !== true);
};

// ============ Задание 24 ===========
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
];
const BOOK_TITLE = "Сон смешного человека";
const AUTHOR = "Роберт Шекли";

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

// ============ Задание 25 ===========
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

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
