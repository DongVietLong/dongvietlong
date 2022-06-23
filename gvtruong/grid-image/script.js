var app = document.getElementById("app");
var group = document.createElement("div");
group.classList = ["group-image"];

var total = 9;
var ratio = 3;
var sizeImage = 150;
var space = 10;
var radius = 16;

group.style.width = sizeImage * ratio + 10 + "px";
group.style.height = sizeImage * ratio + 10 + "px";
group.style.borderRadius = radius + "px";

for (let i = 0; i < total; i++) {
  let image = document.createElement("img");
  image.src = "https://picsum.photos/200/300?random=" + i;
  image.classList = ["image"];
  image.style.width = sizeImage + "px";
  image.style.height = sizeImage + "px";
  group.appendChild(image);
}

app.appendChild(group);
