'use strict'

let getRandomServerFromInput = require('../index.js');

describe('Running tests on index.js', () => {
  it('Will return a error message on invalid input', () => {
    expect(getRandomServerFromInput('bad input')).toEqual('Invalid Input, please enter input in valid form (name:size) Separating Each With Single Space (e.g. A:1 B:2)')
  });

  it('Will return a inputed server name', () => {
    expect(getRandomServerFromInput('A:1')).toEqual('A')
  });

  it('Will return a server name with multipule inputs', () => {
    const array = ['A', 'B', 'C', 'D', 'E', 'hi'];
    expect(array.includes(getRandomServerFromInput('A:1 B:2 C:3 D:4 E:5 hi:6'))).toEqual(true);
    expect(typeof getRandomServerFromInput('A:1 B:2 C:3 D:4 E:5 hi:6')).toEqual('string');
  })



  it('distributed server load proportionally', () => {
    let num = 10000
    let results = {
      A: 0,
      B: 0,
      C: 0
    };
    while (num) {
      results[getRandomServerFromInput('A:3 B:5 C:2')]++
      num--
    }
    expect(2000 < results['A'] && results['A'] < 2500).toEqual(false);
    expect(2800 < results['A'] && results['A'] < 3200).toEqual(true);
    expect(4800 < results['B'] && results['B'] < 5200).toEqual(true);
    expect(1800 < results['C'] && results['C'] < 2200).toEqual(true);


  })
});