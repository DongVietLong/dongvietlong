let slideIndex = 0;
let getSlide = document.getElementsByClassName("slides");
getSlide[0].style.display = "flex";

function nextSlide() {
  slideIndex += 1;
  if (slideIndex > getSlide.length - 1) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
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
    } else {
      getSlide[i].style.display = "none";
    }
  }
}
