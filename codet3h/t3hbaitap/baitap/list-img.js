var list_img = [
    "long3.jpg",
    "long1.jpg",
    "long2.jpg"
]
var list_title = [
    "Đi để trở về",
    "Mộc Châu",
    "Ninh Bình"
]
const getImg = document.querySelector('.img');
for(let i=0;i<list_img.length;i++)
{
    var div = document.createElement("div");
    var img = document.createElement("img");
    var p=document.createElement("p");
    div.classList.add("box-image")
    p.classList.add("text-image");
    p.innerHTML = list_title[i];
    img.src = list_img[i];
    img.classList.add("image");
    div.appendChild(img);
    div.appendChild(p);
    getImg.appendChild(div);
}
var getIconMenu=document.querySelector('.icon_menu_display');
getIconMenu.addEventListener('click',function(){
    window.location="./menu.html";
})
