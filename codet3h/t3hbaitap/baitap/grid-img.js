// grid-image
var gridImage=[
    "long3.jpg",
    "long1.jpg",
    "long2.jpg",
    "dongvietlong.jpg",
    "273211368_3784968438393981_2418813121239177362_n.jpg",
    "273430886_3152898434987919_4204426877592786831_n.jpg",
    "284481578_1314771525719894_3714395749483230868_n.jpg",
    "282226961_1613867875650622_7227141899873835288_n.jpg",
    "278679421_333819668732616_8228329371902771593_n.jpg",
]
var grid_image=document.querySelector('.grid_image');
var divGrid=document.createElement("div");
divGrid.classList=["group-image"];
var ratio=11;
var sizeImage = 112;
var space = 16;
var radius = 20;
divGrid.style.width = 100 + "%";
divGrid.style.height = 400 + "px";
divGrid.style.borderRadius = radius + "px";
for(let i=0;i<gridImage.length;i++)
{
    let createImage = document.createElement("img");
    createImage.src = gridImage[i];
    createImage.classList = ["image_grid"];
    createImage.style.width = 33 + "%";
    createImage.style.height = sizeImage + space + "px";
    divGrid.appendChild(createImage);
}
grid_image.appendChild(divGrid);