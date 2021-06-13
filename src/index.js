// ============ Задание 1 ===========
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach((orderedItem) => totalPrice += orderedItem);
  return totalPrice;
}

// ============ Задание 2 ===========
function filterArray(numbers, value) {
    const filteredNumbers = [];
    
  numbers.forEach(number => {
    if (number > value) {
        filteredNumbers.push(number); 
    }
  } );
       
    return filteredNumbers;
  }

// ============ Задание 3 ===========
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    
  firstArray.forEach(array => {
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

  orderedItems.forEach(item =>  totalPrice += item);

  return totalPrice;
}


// ============ Задание 7 ===========
const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
   
    return filteredNumbers;
  }


// ============ Задание 8 ===========
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
   
    return commonElements;
  }


// ============ Задание 9 ===========
function changeEven(numbers, value) {
    const newArray = [];
  
  numbers.forEach(number => {
     if (number % 2 === 0) {
        newArray.push(number + value);
      } else newArray.push(number);
    
  });
    return newArray;
  }


// ============ Задание 10 ===========
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsLengths = planets.map(planet => planet.length);


// ============ Задание 11 ===========


// ============ Задание 12 ===========

// ============ Задание 13 ===========


// ============ Задание 14 ===========


// ============ Задание 15 ===========

// ============ Задание 16 ===========


// ============ Задание 17 ===========

}

// ============ Задание 18 ===========


// ============ Задание 19 ===========
