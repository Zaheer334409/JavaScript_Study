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


function signup(email, password, callBack) {
    setTimeout(function () {
        if (email === "za@gmail.com" && password === "090909") {
            console.log("Ok");
            callBack();
        }
    }, 1000)
}

signup("za@gmail.com", "090909", redirectTOTimeLine);

function redirectTOTimeLine() {
    console.log("Redircted To Firebase");

}