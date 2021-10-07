/**
 * To run this file in Gitpod, use the
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// Arrow Function With Parameters

// Single Line Arrow Function With Parameters

// Implicit Returns

// Returning Multiple Lines

// no spread operator
let arr1 = [1,2,3]
let arr2 = arr1
arr2.push(4)
console.log('Second arry:', arr2)
console.log('First arry:', arr1)
// copying an array
let arr3 = [4,5,6]
let arr4 = [...arr3]
arr4.push(7)
console.log('Fourth array:', arr4)
console.log('third array:', arr3)

// copying an object
let obj1= {a:1,b:1,c:3}
let obj2 = {...obj1, d:4}
// overide object element
let obj3 = {...obj2, c:7}
console.log('third obj:', obj3)
console.log('Second obj:', obj2)

// copying only part of array/object
let arr5 = [...arr1, {...obj2}, 'x','y','z']
console.log('Fith array:', arr5)

let arr6 = [...arr1[2]]
console.log('sith array:', arr6)

// const arr = [1,2,3]
// const newArr = []
// const arrCopy = [...newArr, ...arr] // start with  [] ->  [], [1], [1,2], [1,2,3]
// console.log(arrCopy) // [1,2,3]

// const obj = { a: 1, b: 2 }
// const newObj = {}
// const objCopy = { ...newObj, ...obj } //start with {} -> {}, {a: 1}, {a: 1, b: 2}
// console.log(objCopy) // { a: 1, b: 2 }

// const sameProp = { a: 4 }

// // this overwrites with the right side winning
// const overWritten = {...newObj, ...obj, ...sameProp }
// console.log(overWritten) // { a: 4, b, 2 }