// console.log("Hello Class");

// console.log(1);
// great();
// function great() {
//     console.log(2);
// }
// great();
// console.log(3);



// 

// console.log("2");

// setTimeout(function () {
//     console.log("Hello Dear");
// }, 1000);

// console.log("3");


// function signup(email, password, callBack) {
//     setTimeout(function () {
//         if (email === "za@gmail.com" && password === "090909") {
//             console.log("Ok");
//             callBack();
//         }
//     }, 1000)
// }

// signup("za@gmail.com", "090909", redirectTOTimeLine);

// function redirectTOTimeLine() {
//     console.log("Redircted To Firebase");
// }

// ---

// function signup(email, password, callBack, secondCallBack) {
//     setTimeout(function () {
//         if (email === "za@gmail.com" && password === "090909") {
//             console.log("Ok");
//             callBack(secondCallBack);
//         }
//     }, 1000)
// }

// signup("za@gmail.com", "090909",
//     function redirectTOTimeLine(cd) {
//         console.log(cd());
//     }, function redi() {
//         return "Wah Bhai Clean Code 😂"

//     });



// 
// Promise
// Promise bhai asgn hai yaad rakahna , bad me result aai ga , Promise asyc

// randomNum.ceil(randomNum)
let firstPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {

        let randomNum = Math.ceil(Math.random() * 100)

        if (randomNum % 2 === 0) {
            resolve(randomNum)
        } else {
            reject("IT is an odd number")
        }
    }, 1000)
})

firstPromise
    .then(function (success) {
        console.log("First Promise", success);
    })
    .catch(function (error) {
        console.error(error);

    })

