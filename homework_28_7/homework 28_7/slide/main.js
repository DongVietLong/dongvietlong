var imagesLink = [
    "./image/1.jpg",
    "./image/2.jpg",
    "./image/3.jpg",
    "./image/4.jpg",
    "./image/5.jpg",  
  ];
  
  var app = document.getElementById("app");
  app.classList = ["container flex center"];
  var cacheID = 0;
  
  var carouselContainer = document.createElement("div");
  var indexSlide = document.createElement("img");
  var nextBtn = document.createElement("button");
  var prevBtn = document.createElement("button");
  var carouselControl = document.createElement("div");
  var carouselIndicators = document.createElement("div");
  
  nextBtn.innerHTML = ">";
  prevBtn.innerHTML = "<";
  
  carouselControl.classList = ["flex center carousel-control"];
  carouselContainer.classList = ["flex center carousel"];
  carouselIndicators.classList = ["flex center carousel-indicators"];
  indexSlide.classList = ["image"];
  indexSlide.src = imagesLink[0];
  
  carouselControl.appendChild(prevBtn);
  carouselControl.appendChild(nextBtn);
  carouselContainer.appendChild(indexSlide);
  carouselContainer.appendChild(carouselControl);
  app.appendChild(carouselContainer);
  
  for (let i = 0; i < imagesLink.length; i++) {
    let nodeIndicator = document.createElement("button");
    nodeIndicator.setAttribute("data-id", i);
    nodeIndicator.classList = ["indicator-item"];
    if (i == cacheID) {
      nodeIndicator.classList.add("active");
    }
    nodeIndicator.onclick = () => {
      clearInterval(timerId);
      cacheID = i;
      setImage(i);
    };
    carouselIndicators.appendChild(nodeIndicator);
  }
  carouselContainer.appendChild(carouselIndicators);
  
  var timerId = setInterval(() => {
    nextSlide();
  }, 3000);
  
  function nextSlide() {
    cacheID++;
    if (cacheID >= imagesLink.length) {
      cacheID = 0;
    }
    setImage(cacheID);
  }
  
  function prevSlide() {
    cacheID--;
    if (cacheID <= 0) {
      cacheID = imagesLink.length - 1;
    }
    setImage(cacheID);
  }
  
  prevBtn.onclick = function () {
    clearInterval(timerId);
    prevSlide();
  };
  
  nextBtn.onclick = function () {
    clearInterval(timerId);
    nextSlide();
  };
  
  function setImage(id) {
    indexSlide.src = imagesLink[id];
    updateActiveIndicator();
  }
  
  function updateActiveIndicator() {
    document.querySelectorAll(".indicator-item").forEach((ni) => {
      ni.classList.remove("active");
      if (ni.getAttribute("data-id") == cacheID) {
        ni.classList.add("active");
      }
    });
  }
  