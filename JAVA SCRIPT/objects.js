// javascripts objects are always in key value pair

let obj = {}; //empty object
console.log(obj);

// person object
let person = {
  // key(property/method) : value 
    name: "Shivam",
    age: 24,
    phone: 5678976666,
    gender: "Male",
    height: "190cm"
};
console.log(person);
console.log(`Hey ${person.name}, Thank you for singing up !`);
console.log(person.gender);
console.log(person["gender"]);

let str = "Hello";
console.log(str.length);    // dot notation
console.log(str["length"]); // square bracket notation

// nesting of objects
let captionAmerica ={
    firstName: "Steve",
    lastName: "Rogers",
    friends: ["Bucky","Tony Stark", "Brue Banner"],
    age: 102,
    isAvenger: true,
    address: {
        state: "Manhattan",
        city: "Ney York",
        Country: "USA"
    },
    sayHi: function (){
        console.log(`Hello my name is ${this.firstName}`); 
    }
};
 
console.log(captionAmerica);
console.log(captionAmerica.friends);
console.log(captionAmerica.friends[0]);
console.log("printed using bracket notation " + captionAmerica["friends"][0]);
captionAmerica.sayHi(); // method accessing
// nested objects
console.log(captionAmerica.address.city);

// for loop 
//in -> keyword in JS is used to get keys from that object
for(let key in captionAmerica){
    //haathi
    console.log(`${key} : ${captionAmerica[key]}`);
    //haathi jo variable h uske andar meri key ki value padi h 
    //value
    // variable ek andar jo binding value h wo chahiye
    console.log(captionAmerica[key]); //bracket notation usage
    
    
} 

// this keyword

let car = {
    name : "Farrari",
    model: 2022,
    startEngine: function() {
        console.log(`Starting the engine of ther car ${this.name}`);
    }
};

car.startEngine();


console.log(typeof captionAmerica.friends);





