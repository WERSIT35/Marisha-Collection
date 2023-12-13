//es aris photoebis karuseli

/*
const images = ["0000.jpeg", "0001.jpeg", "0002.jpeg", "0003.jpeg"];
let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const nextButton = document.getElementById("right");
const previousButton = document.getElementById("left");

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

previousButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

function updateImage() {
    sliderImage.style.opacity = 0;
    setTimeout(() => {
        sliderImage.src = `assets/Photos/${images[currentIndex]}`;
        sliderImage.alt = images[currentIndex];
        sliderImage.style.opacity = 1;
    }, 200);
}
updateImage();
*/

// const feri = document.getElementById("#btn");
// const icon=document.getElementById("iccon");

// function darkMode(){
//     var element = document.body;
//     element.classList.toggle("dark-mode");

//     var log = document.getElementById("log");
//     log.classList.toggle("dark-logo");

//     const textElements = document.querySelectorAll('.col h2, .col p, .col .price');
//     textElements.forEach(element => {
//         element.classList.toggle("dark-txt");
//     });
//     const shopElements=document.querySelectorAll(".shop .col");
//     shopElements.forEach(element=>{
//         element.classList.toggle("dark-shop");
//     });

//     const icon=document.getElementById("iccon");
//     icon.classList.toggle("dark-bulb");

//     const pic=document.getElementById("pic");
//     pic.classList.toggle("dark-logo");
// }

const feri = document.getElementById("btn");
const icon = document.getElementById("iccon");

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var log = document.getElementById("log");
    log.classList.toggle("dark-logo");

    const textElements = document.querySelectorAll('.col h2, .col p, .col .price');
    textElements.forEach(element => {
        element.classList.toggle("dark-txt");
    });

    // const shopElements = document.querySelectorAll(".shop .col");
    // shopElements.forEach(element => {
    //     element.classList.toggle("dark-shop");
    // });

    // Toggle between moon and sun icons
    if (icon.classList.contains("fa-moon")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        icon.classList.add("dark-bulb");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.remove("dark-bulb");
        icon.classList.add("fa-moon");
    }

    const pic = document.getElementById("pic");
    pic.classList.toggle("dark-logo");
}



