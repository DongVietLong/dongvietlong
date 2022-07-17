
var listImage = document.getElementById("listImage");
var group = document.createElement("div");
group.classList = ["group-image"];

for (let i = 0; i < 9; i++) {
    let image = document.createElement("img");
    image.src = "https://baodanang.vn/dataimages/201802/original/images1425250_5.jpg" + i;
    image.classList = ["image"];
    group.appendChild(image);
}

listImage.appendChild(group)
