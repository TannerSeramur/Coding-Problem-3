## Coding Problem #3

[![Build Status](https://travis-ci.org/TannerSeramur/Coding-Problem-3.svg?branch=master)](https://travis-ci.org/TannerSeramur/Coding-Problem-3)

### Author: Tanner Seramur

### Links and Resources  

* [repo](https://github.com/TannerSeramur/Coding-Problem-3)
* [travis](https://travis-ci.org/TannerSeramur/Coding-Problem-3/builds/569113281)

## Description
Write a program that takes server names and sizes as arguments and outputs the
name of a random server such that if server X is three times as big as server Y, then server
X gets assigned three times as often as server Y.

#### Sample Input
Input format should take a name And size (name:size) Separating Each With Single Space 
```txt
A:1 B:3
red:2 green:3 blue:6
A:1 B:8 C:1 D:8
```
#### Sample Output
```txt
1. B
2. blue
3. D
```

### Setup
* Install Dependencties: `npm i`

#### Running the app
To run the program, navigate to the root directory of this project
* `node index.js <input>`


#### Testing
* `npm test`
