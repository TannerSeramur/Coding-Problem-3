// DocuSign Pre-Phone Screen Coding Problem #3
// This was my initial approach to this problem however after solving it I realized it was not the ideal solution,
// so I decided to take a different approach however felt I should still leave it here to showcase 
// my thought process


// inported package for communicating with user via CLI
const inquirer = require('inquirer');

// Asks for user input from CLI
let askForInput = async () => {
  let input = await inquirer.prompt({
    type: 'input',
    name: 'servers',
    message: 'Enter Server Name And Size (name:size) Separating Each With Single Space (e.g. A:1 B:2) ',
  });
  if (!/^((\w+:\d+\s?))*$/.test(input.servers)) {
    console.error('ERROR! Invalid Input, please enter input in valid form (name:size) Separating Each With Single Space (e.g. A:1 B:2)')
  } else {
    await getRandomServer(input.servers)
  }

  askForInput()
}


// Stores last user input so if new input is the same as last then it can continue using current HashTable
let lastInput;

// Creating empty HashTable 
var hashMap = new Map();

/**
 * Helper function to create new HashMap out of input
 * @param {String} str Must be in correct format eg 'X:1 Y:3' note the space between separating different inputs
 */
let createNewMap = (str) => {
  let valArray = str.split(' ')
  hashMap = new Map();
  valArray.forEach((item, idx) => {
    hashMap.set(item.split(':')[0], item.split(':')[1])
    return str
  });
  return str
}


/**
 * 
 * @param {String} str Using regex to check for valid input
 */
const checkForValidInput = (str) => {
  if (!/^((\w+:\d+\s?))*$/.test(str)) {
    throw ('Error')
  }
}


/**
 * 
 * @param {String} str function the assigned the proper server
 */
let getRandomServer = (str) => {

  // Here for testing purposes
  checkForValidInput(str);

  // Checks if new input is same as last input or if current HashTable is empty if so create new HashTable
  if (str !== lastInput || hashMap.size === 0) {
    createNewMap(str)
    lastInput = str
  }

  // Creates array of Key values in HashTable
  let mapItems = Array.from(hashMap);


  // grabs on of those Keys at random
  let randomMapKey = mapItems[Math.floor(Math.random() * mapItems.length)][0].toString();

  // Removes 1 value on rendomSelectedMapKey
  hashMap.set(randomMapKey, hashMap.get(randomMapKey) - 1)

  // if Key has a value of 0 remove key
  if (hashMap.get(randomMapKey) === 0) {
    hashMap.delete(randomMapKey)
  }

  console.log('Assigned Server: ', randomMapKey);
  return randomMapKey
}

// Starts Script
askForInput();

module.exports = getRandomServer;



