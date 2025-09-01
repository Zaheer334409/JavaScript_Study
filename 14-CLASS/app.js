// console.log("hello ");
// let text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quasi quod enim, fuga animi tempore";

// text = text.toLowerCase();
// let makeUpper = true;
// let result = " ";

// for (let i = 0; i < text.length; i++) {
//     let char = text[i];
//     if (makeUpper && char >= "a" && char <= "z") {
//         result = result + char.toUpperCase();
//         makeUpper = false;
//     }
//     else {
//         result = result + char
//     }
//     if (char === " ") {
//         makeUpper = true
//     }
// }
// console.log(result);

// for (let i = 1; i <= 10; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//         row = row + "* "
//     }
//     document.writeln(row)    
// }

// let userInput = +prompt("Enter Your Number");

// for (let i = 0; i < 10; i++) {
//     console.log(userInput + " x " + 1 + " = " + userInput * 1 , i);
// }

let birthMonth = ["jan", "feb", "mar", "apr", "may"];
let userBirthMonth = prompt("Enter YOur Birth Month?");

userBirthMonth = userBirthMonth.slice(0, 3);
userBirthMonth = userBirthMonth.toLowerCase();

console.log(userBirthMonth);

if (userBirthMonth === birthMonth[0]) {
    console.log("Done");
} else if (userBirthMonth === birthMonth[1]) {
    console.log("Done");
} else if (userBirthMonth === birthMonth[2]) {
    console.log("Done");
} else if (userBirthMonth === birthMonth[3]) {
    console.log("Done");
} else if (userBirthMonth === birthMonth[3]) {
    console.log("Done");
} else {
    console.log("Go Back");
}

