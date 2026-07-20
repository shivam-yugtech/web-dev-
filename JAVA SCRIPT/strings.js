// // string is a sequence of characters

// var str = "Hello Coders";
// //   H e l l o  <space>  C o d e r  s
// //   0 1 2 3 4     5     6 7 8 9 10 11
// console.log(str);
// console.log(str[4]);
// console.log(str.length);

// // string Methods

// // 1. Extraction method 

// //slice method
// // slice(start,end) -> start index is inclusive and 
// //                     end index is exclusive

// var slicedstr = str.slice(6,11); //start index se shuru hoga aur 
//                                // ending index se ek pehle tak string katege 
// console.log(slicedstr);
// console.log(str); // original source of information is not changed

// var slicedstr = str.slice(6); // start se leke puri end tak string kategi
// var slicedstr = str.slice(2,-4); //start se leke peeche ke end time jane chod do

// //substring method

// // substr(start,length); start index se shuru hoga aur aage ke kitne chacarter capture krne h

// let ans = str.substr(2,6);
// console.log(ans);
// console.log(str);

// // replacing
// str="yolo";
// console.log(str);

// // To lower and upper case 

// console.log(str.toUpperCase());
// str="FOMO"
// console.log(str.toLowerCase());

// //concatenation method -> combine 2 strings and make them one string

// let firststring = "Believe in ";
// let secondstring = "your self.";

// let concatenatedstr = firststring + secondstring;
// console.log(concatenatedstr);

// //concat method
// let concatstr = firststring.concat(secondstring," and me ");
// console.log(concatstr);

// // trim method -> remove all whitespaces of starting and ending of a string

// let trimstr = "           hello     how are you    ";
// console.log(trimstr);
// console.log(trimstr.length);

// console.log(trimstr.trim());
// console.log(trimstr.trim().length);


var str = "Hello hello my name hello is shivam";
console.log(str);
//divides stirng on the basis of argument and puts them in an array
// var a=str.split("");
// var a=str.split(" ");
// var a=str.split("e");
var a=str.split("hello");
console.log(a);











