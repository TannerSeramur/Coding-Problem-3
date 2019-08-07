// DocuSign Pre-Phone Screen Coding Problem #3
'use-strict'

/**
 * 
 * @param { String } str takes in a string as the input from cli and creates two arrays to hold server names and the appropriate weight
 */
let getRandomServerFromInput = (str) => {
  if (checkForValidInput(str)) {
    let valArray = str.split(' ')
    hashMap = {}
    valArray.forEach(item => hashMap[item.split(':')[0]] = Number(item.split(':')[1]));
    let serverNameArray = Object.keys(hashMap);
    let serverWeightArray = Object.values(hashMap).map(item => item / sumValues(hashMap));
    return getRandomItem(serverNameArray, serverWeightArray);
  } else {
    return 'Invalid Input, please enter input in valid form (name:size) Separating Each With Single Space (e.g. A:1 B:2)'
  }
}


//Helper functiong using regex to check for valid input
const checkForValidInput = (str) => {
  return /^((\w+:\d+\s?))*$/.test(str)
}

// Helper function to calculate the sum of a objects values
const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);

// Helper function to grab random number between min and max
let rand = (min, max) => {
  return Math.random() * (max - min) + min;
};


/**
 * 
 * @param { Array } list takes a array list of all the server names as strings from input
 * @param { Array } weight takes a array of numbers that represents how likely each server is to be chosen  
 */
let getRandomItem = (list, weight) => {
  let total_weight = weight.reduce((prev, cur) => prev + cur);

  let random_num = rand(0, total_weight);
  let weight_sum = 0;

  for (let i = 0; i < list.length; i++) {
    weight_sum += weight[i];
    weight_sum = +weight_sum.toFixed(2);

    if (random_num <= weight_sum) {
      return list[i];
    }
  }
};


console.log(getRandomServerFromInput(process.argv.splice(2).join(' ')))


module.exports = getRandomServerFromInput;