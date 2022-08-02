var container = document.getElementById("container");

var headerContainer = document.createElement("img");
var searchBox = document.createElement("input");
var searchIcon = document.createElement("i");
var category = document.createElement("div");
var home = document.createElement("i");
var messenger = document.createElement("i");
var post = document.createElement("i");
var avatarIcon = document.createElement("img");
var wrapSearch = document.createElement("div");

container.style.borderBottom = "1px solid black";
headerContainer.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png";

headerContainer.style.width = 158 + "px";
headerContainer.style.height = 56 + "px";
headerContainer.classList = ["logo"]
searchIcon.classList = ["search-icon fa-solid fa-magnifying-glass"];
searchBox.type = "search";
searchBox.placeholder = "Search";
searchBox.classList = [
  "search-box form-control mr-sm-2 bg-light search pr-5 border-0",
];
searchBox.style.width = 300 + "px";
searchBox.style.height = 50 + "px";
home.classList = ["fa-solid fa-house h4 mb-0"];
messenger.classList = ["fa-brands fa-facebook-messenger h4 mb-0"];
post.classList = ["fa-solid fa-circle-plus h4 mb-0"];
avatarIcon.src = "./Photos/avatar.jpeg";
avatarIcon.style.width = 30 + "px";
avatarIcon.style.height = 30 + "px";
avatarIcon.style.borderRadius = 50 + "%";

wrapSearch.classList = [
  "wrapSearch position-relative justify-content-center align-items-center pr-4 rounded mb-3",
];
wrapSearch.style.backgroundColor = "#F8F9FA";

wrapSearch.appendChild(searchBox);
wrapSearch.appendChild(searchIcon);

container.appendChild(headerContainer);
container.appendChild(wrapSearch);
container.appendChild(category);
category.appendChild(home);
category.appendChild(messenger);
category.appendChild(post);
category.appendChild(avatarIcon);
category.classList = [
  "d-flex justify-content-between w-25 align-items-center mb-3 mr-5",
];

var album = document.getElementById("app");
var group = document.createElement("div");
group.classList = ["group-image"];

var ratio = 3;
var sizeImage = 250;
var space = 10;
var radius = 30;

group.style.width = sizeImage * ratio + 10 + "px";
group.style.height = sizeImage * ratio + 10 + "px";
group.style.borderRadius = radius + "px";

const images = [
  "./Photos/avatar.jpeg",
  "./Photos/cat_story.jpeg",
  "./Photos/memories.jpeg",
  "./Photos/office.jpeg",
  "./Photos/elecdam.jpeg",
  "./Photos/3mountains.jpeg",
  "./Photos/meow.jpeg",
  "./Photos/travel.jpeg",
  "./Photos/meo2.jpeg",
];

for (let i = 0; i < images.length; i++) {
  let image = document.createElement("img");
  image.src = images[i];
  image.classList = ["image"];
  image.style.width = sizeImage + "px";
  image.style.height = sizeImage + "px";
  group.appendChild(image);
}

album.appendChild(group);


