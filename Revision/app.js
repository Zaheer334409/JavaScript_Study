// console.log("Hello Dear");



// let fruits = ["Apple", "Banana", "Strawberry"];
// let veg = ["Spinach", "Potato", "oninon"];
// fruits.push("Kiwi");  // Added last value 
// fruits.pop();  // removre last value  
// fruits.unshift("Kiwi"); // first value added
// fruits.shift();
// fruits.shift();

// console.log(fruits);


let fruits1 = fruits.slice(); Array, String
// fruits.length Array, String
fruits.splice(4, 0, "Kiwi");
fruits[4] = "Kiwi";
let fruitsAndVegis = fruits.concat(veg);
console.log(fruitsAndVegis);

// toUpperCase()
// toLowerCase()
// length
// slice
// indexOf()
// concat() string, Array
// charAt() string

// let firstName = "Mubeen";
// let lastName = "Ul Islam";

// let tittle = "developer";

// tittle.toUpperCase();

// console.log(tittle.toUpperCase());
// split(0);

// let uppercase = tittle[0].toUpperCase();

// let lowerCase = uppercase + tittle.slice(1);

// console.log(lowerCase);



// console.log(firstName.charAt(2));



// let numbers = [2, 4, 8, 5, 3];
// //    [2, 4, 3, 5, 8];
// for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = 0; j < numbers.length - 1 - i; j++) {
//         if (numbers[j] > numbers[j + 1]) {

//             let temp = numbers[j];
//             numbers[j] = numbers[j + 1];
//             numbers[j + 1] = temp;
//             console.log(i, numbers);
//         }
//     }
// }