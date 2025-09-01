// ----------------------------------------------
// let userValue = +prompt("Enter Number");
// for (let i = 0; i < userValue; i++) {
//     console.log("Hello World" + i);

// }
// ----------------------------------------------

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }
// ----------------------------------------------
// for (let i = 1; i <= 5; i++) {
//     console.log("5 plate biryani" + i);
//     for (let j = 1; j <= 1; j++) {
//         console.log("1 bottle pepsi" + j);
//     }
//     for (let k = 1; k <= 1; k++) {
//         console.log("1 pastry" + k);
//     }
// }

// ---------------------------------MUbeen Question
// let input = document.getElementById("input");
// let p = document.getElementById("result");

// function check() {
//     p.innerHTML = input.value
// }
// ---------------------------------------

// for (let i = 0; i < 7; i++) {
//     let row = "";
//     for (let k = 0; k < 4; k++) {
//          row +=  "* ";
//     }
//     console.log(row ,  i);

// }
// ------------------------------------------
// for (let i = 0; i <= 50; i++) {
//     console.log(i % 2 === 0, i);
// }
// ---------------------------------------
// let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// let count = 0;
// for (let i = 0; i < myNum.length; i++) {
//     if (myNum[i] >= 10) {
//         count++
//     }
// }
// console.log(count);
// -----------------------------------------------
// ++++++un-complated
// let user = "zaheer";
// console.log(user.toUpperCase());
// console.log(user.toLowerCase());
// console.log(user[0].toUpperCase + );
// ----------------------------------------------
// let username = prompt("Enter Your Name");

// let upperName = username[0].toUpperCase();
// let lowerName = username.slice(1).toLowerCase();

// console.log(upperName + lowerName);
// -----------------------------------------------
// console.log("hello");

// for (let i = 1; i <= 10; i++) {
//     console.log("Hello Dear" + i);
// }
// -------------------------------------------

// let input = document.getElementById("input");
// let h1 = document.getElementById("head");

// function result() {
//     h1.innerHTML = "WelCome " + input.value
// }

// -----------------------------------------------------

// let col = document.getElementById("col");
// function result(color){
//     col.style.backgroundColor = color
// }
// ---------------------------------------------
// let totalMarks = 600;

// let username = "zaheer ali";
// let math = 70;
// let english = 60;
// let physics = 60;
// let chemistry = 40;
// let computer = 30;
// let coding = 90;

// let plueyourmarks = math + english + physics + chemistry + computer + coding;

// let percentage = plueyourmarks / totalMarks * 100;

// console.log(username + " " + percentage);
// ------------------------------------------------
let user = document.getElementById("user");
let total = document.getElementById("total");
let math = document.getElementById("math");
let english = document.getElementById("english");
let physice = document.getElementById("physice");
let computer = document.getElementById("computer");
let coding = document.getElementById("coding");


let h1 = document.getElementById("done");

let obtStdMarks = math.value + english.value + physice.value + computer.value + coding.value;

let totalmarks = total.value;

let persentage = obtStdMarks / total * 100;

function result() {
    h1.innerHTML = persentage.valueOf + " Ok!"
}