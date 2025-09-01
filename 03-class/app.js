// let num1 = 2;
// let num2 = 5;

// console.log(num1++ + --num2 + num2++ + num1++ + num2-- + num2++);

// ____________________________________________________________________

// 03-class

// let num1 = 2;
// let num2 = 8;

// console.log(num1 % num2);

// array


// let std = ["zaheer","hassan","raza","hamad","asad"];

// std[4] = "Hussain";
// std[2] = "Zaman";

// console.log(std);


// let user1 = prompt("Enter YOur HObbies-1");
// let user2 = prompt("Enter YOur HObbies-2");
// let user3 = prompt("Enter YOur HObbies-3");
// let user4 = prompt("Enter YOur HObbies-3");

// console.log([user1, user2, user3, user4]);

// console.log("Hello");

// console.log([prompt("Enter YOur HObbies-1"), prompt("Enter YOur HObbies-1"), prompt("Enter YOur HObbies-1"), prompt("Enter YOur HObbies-1"), prompt("Enter YOur HObbies-1")]);

// datatype 
// boolean  _______ turn ---- false

// let online = true;
// console.log(online);


// let offline = false;
// console.log(offline);

// let num1 = 2;
// let num2 = 3;
// document.writeln("Hello SMIT", num1 + num2);

// let user = prompt("Enter Your User Name");
// document.writeln(user);

// console.log("Hello Js");
// ______________________________Practice________________________________

// let num1 = 10;
// let num2 = 2;

// console.log(num1 % num2);

// let num1 = 2;
// let num2 = 7;

// console.log(num2 % num1); 

// let std = ["Zaheer", "Ali", "Ammad", "Hasssan", "Hurirah", "Hussain", "Abdullah", "Farhan"];
// std[4] = "Fayaz"
// std[6] = "Jabbbar"
// console.log(std);

// let std_1 = prompt("Enter Student Roollno");
// let std_2 = prompt("Enter Student Roollno");
// let std_3 = prompt("Enter Student Roollno");
// let std_4 = prompt("Enter Student Roollno");
// let std_5 = prompt("Enter Student Roollno");
// let std_6 = prompt("Enter Student Roollno");
// console.log([ std_1, std_2 , std_3 , std_4 , std_5 , std_6 ]);


// let online = true;
// console.log(online);


// let offline = false;
// console.log(offline);


// let user = prompt("Enter User_Name");
// document.writeln(user);
// console.log(user);

// let user = prompt("Enter Your Name");
// console.log(user);
// document.writeln(user);

let totalmarks = 400;
let user = prompt("Enter Student Name");
let per = "%";


let english = +prompt("Enter Your English Marks");
let math = +prompt("Enter Your Math  Marks");
let physics = +prompt("Enter Your PHYSICE Marks");
let Computer = +prompt("Enter Your ComputerMarks");

let stdmarks = english + math + physics + Computer;
let percentage = stdmarks / totalmarks * 100;

console.log(user + "   " + "----------" + "   " + percentage  + per);

