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
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// ============ Задание 27 ===========
const isEveryUserActive = (users) => {
  return users.every((user) => user.isActive === true);
};

// ============ Задание 28 ===========
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// ============ Задание 29 ===========
const isAnyUserActive = (users) => {
  return users.some((user) => user.isActive === true);
};

// ============ Задание 30 ===========
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((ak, number) => {
  return ak + number;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

// ============ Задание 31 ===========
const players = [
  { name: "Манго", playtime: 1270, gamesPlayed: 4 },
  { name: "Поли", playtime: 469, gamesPlayed: 2 },
  { name: "Аякс", playtime: 690, gamesPlayed: 3 },
  { name: "Киви", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return total + player.playtime / player.gamesPlayed;
}, 0);

// ============ Задание 32 ===========
const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => {
    return total + user.balance;
  }, 0);
};

// ============ Задание 33 ===========
const getTotalFriendCount = (users) => {
  return users.reduce((allfreinds, array) => {
    allfreinds.push(...array.friends);
    return allfreinds;
  }, []).length;
};

// ============ Задание 34 ===========
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
];

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

// ============ Задание 35 ===========
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// ============ Задание 36 ===========
const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
  "Говард Лавкрафт",
];

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// ============ Задание 37 ===========
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
  firstAuthor.author.localeCompare(secondAuthor.author)
);

const sortedByReversedAuthorName = [...books].sort(
  (firstAuthor, secondAuthor) =>
    secondAuthor.author.localeCompare(firstAuthor.author)
);

const sortedByAscendingRating = [...books].sort(
  (firstRating, secondRating) => firstRating.rating - secondRating.rating
);

const sortedByDescentingRating = [...books].sort(
  (firstRating, secondRating) => secondRating.rating - firstRating.rating
);

// ============ Задание 38 ===========
const sortByAscendingBalance = (users) => {
  return users.sort(
    (firstBalance, secondBalance) =>
      firstBalance.balance - secondBalance.balance
  );
};

// ============ Задание 39 ===========
const sortByDescendingFriendCount = (users) => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length);
};

// ============ Задание 40 ===========
const sortByName = (users) => {
  return [...users].sort((firstName, secondName) =>
    firstName.name.localeCompare(secondName.name)
  );
};

// ============ Задание 41 ===========
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
  { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));

// ============ Задание 42 ===========
const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};

// ============ Задание 43 ===========
const getSortedFriends = (users) => {
  return [...users]
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
};

// ============ Задание 44 ===========
const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter((user) => user.gender === gender)
    .reduce((total, user) => {
      return total + user.balance;
    }, 0);
};
