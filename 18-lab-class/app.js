// console.log("Hello World");

// let inputEmail = document.getElementById("email");
// let inputPassword = document.getElementById("password");

// function result() {
//     let emailTex = email.value
//     let passwordTex = password.value
//     console.log(emailTex , passwordTex);

// }
// result();
// ------------------------------------------
// let randomNumber = Math.random();
// console.log(randomNumber);
// ------------------------------------------
// function result() {
//     console.log("Hello World");
// }
// result()
// ------------------------------------------
// let randomNumber = Math.random();
// let roundNumber = Math.round(randomNumber);
// let roundNumber = Math.floor(randomNumber);
// let roundNumber = Math.ceil(randomNumber);

// console.log(roundNumber);
// -----------------------------------------
// let emailEl = document.getElementById("email");
// let passwordEl = document.getElementById("passwordEl");

// function result() {
//     let Elemail = email.value;
//     let Elpassword = password.value;
//     console.log(Elemail, Elpassword);
// }
// ----------------------------------------
// let totalMarks = 400;
// let username = prompt("Enter Username");
// let math = +prompt("Enter Math");
// let physics = +prompt("Enter physics");
// let bio = +prompt("Enter bio");
// let coding = +prompt("Enter coding");

// let obtmarks = math + physics + bio + coding;
// let persentage = obtmarks / totalMarks * 100;


// console.log(username + "Your Percentage is  " +  persentage + "%");
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------

// ******************practicce****************
// function salary Tax 50000 <= 0%, 100000 <= 0.5%, 150000 <= 1%

// function taxCalculator () {
//     let salary = prompt("Enter your salary?");
//     let tax = 0;
//     if (isNaN(salary)) {
//         console.log("Please enter a valid number.");
//     }

//     if (salary <= 50000) {
//         tax = salary;
//     }
//     else if (salary <= 100000) {
//         tax = salary * 0.05;
//     }
//     else {
//         tax = salary * 0.01;
//     }

//     console.log("Tax deducted " + tax);
//     console.log(salary);
// }

// --------------------------------------------


// let initAmountEl = document.getElementById("init-amount");
// let bidMessageEl = document.getElementById("show-message");
// initAmountEl.innerHTML = 1000;

// let userBidAmount;
// let userBidNumber;

// function playBiddingGame() {
//     userBidAmount = +prompt("Enter your Bid amount?");
//     userBidNumber = +prompt("Enter your a number 1 to 3");
//     let gnNumber = generatedNumber();
//     let matchedBid = isBidMatched(userBidNumber, gnNumber);
//     showBidMessage(userBidAmount, matchedBid);
// }

// function generatedNumber() {
//     let randomNumber = Math.ceil(Math.random() * 3);
//     return randomNumber;
// }

// function isBidMatched(userBidNumber, gnNumber) {
//     let matched = false;
//     if (userBidNumber === gnNumber) {
//         matched = true;
//     }
//     return matched;
// }

// function showBidMessage(userBidAmount, matchedBid) {
//     if (matchedBid) {
//         initAmountEl.innerHTML = Number(initAmountEl.innerHTML) + userBidAmount;
//         bidMessageEl.innerHTML = "Congrats! you won the bid " + userBidAmount + " has been added to your account.";
//     }
//     else {
//         initAmountEl.innerHTML = initAmountEl.innerHTML - userBidAmount;
//         bidMessageEl.innerHTML = "Sorry! you lost the bid " + userBidAmount + " has been deducted to your account.";
//     }
// }

// -----------------------------

// let userEmailEl = document.getElementById("email");
// let userPasswordEl = document.getElementById("password");
// let users = [];

// function register () {
//     let userInputMail = userEmailEl.value;
//     let userInputPass = userPasswordEl.value;
//     let user = {
//         email: userInputMail,
//         password: userInputPass
//     }
//     users.push(user);
//     console.log(userInputMail, userInputPass);
// }


// function login () {
//     console.log(users);
// }




// --------------------------------------------------------
// function checkGuess() {
//     let userGuess = parseInt(document.getElementById("userGuess").value);
//     let randomNumber = Math.floor(Math.random() * 5) + 1; // 1 to 5
//     let result = document.getElementById("result");

//     if (userGuess === randomNumber) {
//         result.innerText = "You Win!";
//         result.style.color = "lightgreen";
//     } else {
//         result.innerText = `You Lose! The correct number was ${randomNumber}`;
//         result.style.color = "red";
//     }
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ( Practice )+++++

