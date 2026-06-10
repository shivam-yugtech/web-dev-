// Array -> is a collections of elements 

let cars = ['BMW','AUDI','MG',1,2,3,true];
// In JS you can store different values of different types in an Array
console.log(cars);

// accesing the elements in Array
console.log(cars[0]);
console.log(cars[3]);

// replacing elements in Array
cars[3] = 'Mahindra';
console.log(cars[3]);

// adding elememts in Array
cars[7]='Honda';
console.log(cars);

//Methods of an array

// 1) pop method -> this method removes the element from the last of array

cars.pop();
console.log("after popping the element\n"+cars);

// 2) push method -> it pushes element at the end of Array
cars.push("TATA");
console.log("after pushing an element");
console.log(cars);

// 3) unshift method -> this add elemnet at the starting of Array
cars.unshift("JLR");
cars.unshift("MUSTANG");
console.log(cars);

// 4) shift method -> this removes elemnet from 0th index of Array
cars.shift();
cars.shift();
console.log(cars);

console.log(cars.length);

// 2d Array

let array2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(array2d);
console.table(array2d);
console.log(array2d[1][2]);

