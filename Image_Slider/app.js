// console.log("Hello World");

let sliderImages = document.getElementsByClassName("slider-images");
let topImagesIndex = 0;

setInterval(function () {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.zIndex = 0;
    }
    sliderImages[topImagesIndex].style.zIndex = 10;
    topImagesIndex++

    if (topImagesIndex >= sliderImages.length) {
        topImagesIndex = 0;
    }
}, 2000);
// 
setInterval(function () {
    for (let i = 0; i < sliderImages.length; i++) {
        topImagesIndex[i].style.zIndex = 0;
    }

    sliderImages[topImagesIndex].style.zIndex = 10
    topImagesIndex++

    if (topImagesIndex >= sliderImages.length) {
        topImagesIndex++
    }
}, 2000)
// 

function swaperight() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.zIndex = 0;
    }
    sliderImages[topImagesIndex].style.zIndex = 10;
    topImagesIndex++

    if (topImagesIndex >= sliderImages.length) {
        topImagesIndex = 0;
    }
}

//
function swapeleft() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.zIndex = 0;
    }
    topImagesIndex--
    if (topImagesIndex === 0) {
        topImagesIndex = sliderImages.length - 1
    }
    sliderImages[topImagesIndex].style.zIndex = 10;
}

