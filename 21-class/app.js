let picEl = document.getElementById("pic");

// function changeImage (El) {
//     El.src = "./images/shoaib-akhter-1.jfif"
//         function condition () {
//         if (El.src === "./images/shoaib-akhter-1.jfif") {
//             console.log(El.src = "./images/shoaib-akhter.jfif")
//         }
//         else {
//             El.src = "./images/shoaib-akhter.jfif"
//         }
//     }
//     setInterval(condition, 5000);
// }

// function revertImage (El) {
//     El.src = "./images/shoaib-akhter.jfif"
// }







// function changeImage(El) {
//     El.src = "./images/shoaib-akhter-1.jfif";
// }

// function revertImage(El) {
//     El.src = "./images/shoaib-akhter.jfif";
// }


// let obj = {
//     name: "Talal",
//     userName: this.name
// }


// let obj1 = {
//     name: "Talal",
//     userName: this.name
// }





// let welcomeEl = document.getElementById("welcome-element");


// function changeTextStyle (El) {
//     if (El.className === "hidden") {
//         El.className = "special";
//     }
//     else {
//         El.className = "hidden";
//     }
// }

// --------------------------------------------------------
let capitalEl = document.getElementById("capital-city");
let provinceEl = document.getElementById("province");

function applied () {
    capitalEl.style.backgroundColor = "green"
    capitalEl.style.color = "lightgreen"
}

function reverted () {
    capitalEl.style.backgroundColor = "yellow"
    capitalEl.style.color = "black"

    let elementValue = capitalEl.value;

    if (elementValue.toLowerCase() === "karachi") {
        provinceEl.value = "Sindh";
    } else if (elementValue.toLowerCase() === "lahore") {
        provinceEl.value = "Punjab";
    } else if (elementValue.toLowerCase() === "peshawar") {
        provinceEl.value = "KP";
    }else if (elementValue.toLowerCase() === "quetta") {
        provinceEl.value = "Balochistan";
    }

    let elementStoredValue = elementValue[0].toUpperCase(); 
    let elementStoredValue1 = elementValue.slice(1);
    
    capitalEl.value = elementStoredValue + elementStoredValue1;

}
// -----------------------------------------------------------
// let capitalEl = document.getElementById("capital-city");
// let provinceEl = document.getElementById("province");


