const images = [
  "images/certificate1.png",
  "images/certificate2.png",
  "images/certificate3.png",
];

let currentIndex = 0;

function showImage() {
  document.getElementById("certImage").src = images[currentIndex];
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage();
}
