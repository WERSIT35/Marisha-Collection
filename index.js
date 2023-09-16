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


