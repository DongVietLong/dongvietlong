

  var menu = document.querySelectorAll('#dropdown > li');
  for (var i = 0 ; i < menu.length; i++ )
  {
    menu[i].addEventListener("click",function()
    {
      
      var menuList = document.querySelectorAll('#dropdown >li > ul');
      for (var j = 0 ; j < menuList.length ; j++)
      {
        menuList[j].style.display = "none";
      }
      this.children[1].style.display = "block";
    });
  }

// var taps = ['bài viết','giởi thiệu','bạn bè']

// var root = document.getElementById("root");
// var tapcontainer = document.createElement("div");
// root.classList = ["container center h-max"];
// tapcontainer.classList = ["tap-container flex"];
// root.appendChild(tapcontainer);

const carouselImages = document.querySelector('.carousel__images');
const carouselButton = document.querySelectorAll('.carousel__button');
const numberOfImages = document.querySelectorAll('.carousel__images img').length;
let imagesIndex = 1;
let translateX = 0;

carouselButton.forEach(button =>{
   button.addEventListener('click', e =>{
if(e.target.id === 'previous'){
    if (imagesIndex !==1) {
      imagesIndex--; 
      translateX += 300;
    }
   }else{
    if (imagesIndex !== numberOfImages){
      imagesIndex++;
      translateX -= 300;
    }
   }
   carouselImages.style.transform = `translateX(${translateX}px)`;
   });
});

