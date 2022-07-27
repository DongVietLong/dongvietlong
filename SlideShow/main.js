let slideIndex = 0;
let getSlide = document.getElementsByClassName("slides");
let getDots = document.getElementsByClassName("dot");
// let timer = 2000;

getSlide[0].style.display = "flex";

function nextSlide() {
  slideIndex += 1;
  if (slideIndex > getSlide.length - 1) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
  timer = null;
//   setTimeout(function () {
//     timer = 1000;
//   }, 5000);
}
function prevSlide() {
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = getSlide.length - 1;
  }
  showSlide(slideIndex);
}

function showSlide(index) {
  for (let i = 0; i < getSlide.length; i++) {
    if (i == index) {
      getSlide[i].style.display = "flex";
      getDots[i].style.backgroundColor = "orange";
    } else {
      getSlide[i].style.display = "none";
      getDots[i].style.backgroundColor = "white";
    }
  }
}
// setInterval(function () {
//   nextSlide();
// }, timer);
