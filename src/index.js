// ============ Задание 1 ============
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags:["premium", "promoted", "top"],
  } ;

// ============ Задание 2 ============
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// ============ Задание 3 ============
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};


const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;


// ============ Задание 4 ============
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};


const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[numberOfTags - 1];


// ============ Задание 5 ============
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};


const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];


// ============ Задание 6 ============
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name =  'Henry Sibola';
apartment.tags.push("trusted");



// ============ Задание 7 ============
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city centre',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};


// ============ Задание 8 ============
const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  name,
  price,
  image,
  tags 
 
};

// ============ Задание 9 ============
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam"
  
  
};

// ============ Задание 10 ============
const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};

for (const key in apartment) {

}
const keys = ['descr', 'rating', 'price'];
const values = ['Spacious apartment in the city centre', 4, 2153];

// ============ Задание 11 ============
const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Spacious apartment in the city centre';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  
   if (apartment.hasOwnProperty(key)) {
     keys.push(key);
    values.push(apartment[key]);
  }
 
}

// ============ Задание 12 ============
function countProps(object) {
  let propCount = 0;

  for (const key in object) {

  if (object.hasOwnProperty(key)) {
    propCount += 1;
  }
  
}
    
  return propCount;
}

// ============ Задание 13 ============
const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
const values = [];

const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
  
}

// ============ Задание 14 ============
function countProps(object) {
 
  let propCount = 0;
  
  const values = [];

const keys = Object.keys(object);

  for (const key of keys) {
    
      propCount += 1;
    
  }

  return propCount;
 
}

// ============ Задание 15 ============
const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);

// ============ Задание 16 ============
function countTotalSalary(salaries) {
  let totalSalary = 0;
 const values = Object.values(salaries);
  
  for (let value of values) {
    
    
    totalSalary += value;
 
  }
  return totalSalary;
}


// ============ Задание 17 ============
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
 for (let color of colors) {
   hexColors.push(color.hex);
   rgbColors.push(color.rgb);
 }


// ============ Задание 18 ============
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  
  for (let product of products) {
    
    if (product.name === productName) {
      return product.price;
    }
    
  }

  return null;
 
}

// ============ Задание 19 ============
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];


function getAllPropValues(propName) {
 
  const array = [];
  
  for (let product of products) {
    
    
    if (product[propName]) {
      array.push(product[propName]);
    }
    
    
  }
  return array;
}

console.log(array);

// ============ Задание 20 ============
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
let  total = 0;
  
  for (let product of products){
  
    if (product.name === productName) {
      total = product.price * product.quantity;    
    
    }
  
  }
  
  return total;  
}


// ============ Задание 21 ============
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};


const {yesterday, today, tomorrow } = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

// ============ Задание 22 ============
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;


const meanTemperature = (yesterday + today + tomorrow) / 3;

// ============ Задание 23 ============
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday: highYesterday, 
  today: highToday,
  tomorrow: highTomorrow, 
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
} = highTemperatures;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// ============ Задание 24 ============
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];


for (const {hex, rgb} of colors) {
 
  hexColors.push(hex);
  rgbColors.push(rgb);
}

// ============ Задание 25 ============
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

const {
  today: {low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'},
  tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},

} = forecast;


// ============ Задание 26 ============
function calculateMeanTemperature(forecast) {
  
  const {
  today: {low: todayLow, high: todayHigh},
  tomorrow: {low: tomorrowLow, high: tomorrowHigh},

} = forecast;

    
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}


// ============ Задание 27 ============
const scores = [89, 64, 42, 17, 93, 51, 26];

const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);


// ============ Задание 28 ============
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// ============ Задание 29 ============
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {...defaultSettings, ...overrideSettings};

// ============ Задание 30 ============
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
 const newData = {completed, category, priority, ... data};
  return  newData; 
}


// ============ Задание 31 ============
function add(...args) {
  let sum = 0;
   for (let arg of args) {
     sum += arg;
   }
   return sum;
 }


// ============ Задание 32 ============
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    
    if (arg > firstNumber) {
    total += arg;
    }
  }

  return total;
  
}

// ============ Задание 33 ============

// ============ Задание 34 ============

// ============ Задание 35 ============

// ============ Задание 36 ============

// ============ Задание 37 ============


// ============ Задание 38 ============

// ============ Задание 39 ============

// ============ Задание 40 ============

