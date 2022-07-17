// var images = [
//     "img/1.jpg",
//     "img/2.jpg",
//     "img/3.jpg",
//     "img/4.jpg",
//     "img/5.jpg",
//     "img/6.jpg",
//     "img/7.jpg",
//     "img/8.jpg",
//     "img/9.jpg"
// ];
// var app = document.getElementById("app");
// var group = document.getElementsByClassName["group_img"]
// var total = 9;
// var ratio = 3;
// var sizeImage = 150;
// var space = 10;
// var radius = 16;

// group.style.width = sizeImage * ratio + 10 + "px";
// group.style.height = sizeImage * ratio + 10 + "px";
// group.style.borderRadius = radius + "px";
var app = document.getElementById("app");
var group = document.createElement("div");
group.classList = ["group-image"];

var numImg = 9;
var ratio = 3;
var sizeImage = 145;
var space = 10;
var radius = 16;

group.style.width = sizeImage * ratio + 10 + "px";
group.style.height = sizeImage * ratio + 10 + "px";
group.style.borderRadius = radius + "px";

for (let i = 0; i < numImg; i++) {
  let image = document.createElement("img");
  image.src = "https://picsum.photos/200/300?random=" + i;
  image.classList = ["image"];
  image.style.width = sizeImage + "px";
  image.style.height = sizeImage + "px";
  group.appendChild(image);
}

app.appendChild(group);
