var imagesLink = [
    "https://duhocvietglobal.com/wp-content/uploads/2018/12/dat-nuoc-va-con-nguoi-anh-quoc.jpg",
    "https://www.tugo.com.vn/wp-content/uploads/1-3339-1415416821.jpg",
    "https://images7.content-hci.com/commimg/myhotcourses/blog/post/myhc_94265_255px.jpg",
  ];
  
  var app = document.getElementById("app");
  app.innerHTML="...."
  app.classList = ["container flex center"];
//   var cacheID = 0;
//   var nav = document.createElement("nav");
//   var divContainer = document.createElement("div");
//   var divNavHeader = document.createElement("div");
//   var buttonNav = document.createElement("button");
//   var spanNav1 = document.createElement("span");
//   var spanNav2 = document.createElement("span");
//   var spanNav3 = document.createElement("span");
//   var spanNav4 = document.createElement("span");
//   var aNavbrand = document.createElement("a");
//   var imgNav = document.createElement("img");
  var p = document.createElement("p");

//   spanNav1.innerHTML = "Toggle navigation";
  p.innerHTML = "Toggle navigation";
//   divContainer.innerHTML="loo";

//   nav.classList=["navbar navbar-default navbar-fixed-top"]
//   divContainer.classList=["container"] 
//   divNavHeader.classList=["navbar-header"]
//   buttonNav.classList=["navbar-toggle collapsed"]
//   buttonNav.type=["button"]
//   aNavbrand.classList=["navbar-brand"]
//   aNavbrand.href=["#"]
//   imgNav.classList["facecook-logo"]
//   imgNav.src=["assets/images/facebook.png"]
 
//   buttonNav.data-toggle=["collapse"]
//   buttonNav.data-target=["#bs-example-navbar-collapse-1"]
//   spanNav1.classList=["sr-only"]
//   spanNav2.classList=["icon-bar"]
//   spanNav3.classList=["icon-bar"]
//   spanNav4.classList=["icon-bar"]

//   nav.appendChild(divContainer);
//   divContainer.appendChild(divNavHeader);
//   divNavHeader.appendChild(buttonNav);
//   buttonNav.appendChild(spanNav1);
//   buttonNav.appendChild(spanNav2);
//   buttonNav.appendChild(spanNav3);
//   buttonNav.appendChild(spanNav4);
//   divNavHeader.appendChild(aNavbrand);
//   aNavbrand.appendChild(imgNav);

// ------------------------------------------------
  
//   var carouselContainer = document.createElement("div");
//   var indexSlide = document.createElement("img");
//   var nextBtn = document.createElement("button");
//   var prevBtn = document.createElement("button");
//   var carouselControl = document.createElement("div");
//   var carouselIndicators = document.createElement("div");
  
//   nextBtn.innerHTML = "next";
//   prevBtn.innerHTML = "prev";
  
//   carouselControl.classList = ["flex center carousel-control"];
//   carouselContainer.classList = ["flex center carousel"];
//   carouselIndicators.classList = ["flex center carousel-indicators"];
//   indexSlide.classList = ["image"];
//   indexSlide.src = imagesLink[0];
  
//   carouselControl.appendChild(prevBtn);
//   carouselControl.appendChild(nextBtn);
//   carouselContainer.appendChild(indexSlide);
//   carouselContainer.appendChild(carouselControl);
//   app.appendChild(carouselContainer);
  
//   for (let i = 0; i < imagesLink.length; i++) {
//     let nodeIndicator = document.createElement("button");
//     nodeIndicator.setAttribute("data-id", i);
//     nodeIndicator.classList = ["indicator-item"];
//     if (i == cacheID) {
//       nodeIndicator.classList.add("active");
//     }
//     nodeIndicator.onclick = () => {
//       clearInterval(timerId);
//       cacheID = i;
//       setImage(i);
//     };
//     carouselIndicators.appendChild(nodeIndicator);
//   }
//   carouselContainer.appendChild(carouselIndicators);
  
//   var timerId = setInterval(() => {
//     nextSlide();
//   }, 5000);
  
//   function nextSlide() {
//     cacheID++;
//     if (cacheID >= imagesLink.length) {
//       cacheID = 0;
//     }
//     setImage(cacheID);
//   }
  
//   function prevSlide() {
//     cacheID--;
//     if (cacheID <= 0) {
//       cacheID = imagesLink.length - 1;
//     }
//     setImage(cacheID);
//   }
  
//   prevBtn.onclick = function () {
//     clearInterval(timerId);
//     prevSlide();
//   };
  
//   nextBtn.onclick = function () {
//     clearInterval(timerId);
//     nextSlide();
//   };
  
//   function setImage(id) {
//     indexSlide.src = imagesLink[id];
//     updateActiveIndicator();
//   }
  
//   function updateActiveIndicator() {
//     document.querySelectorAll(".indicator-item").forEach((ni) => {
//       ni.classList.remove("active");
//       if (ni.getAttribute("data-id") == cacheID) {
//         ni.classList.add("active");
//       }
//     });
//   }
  