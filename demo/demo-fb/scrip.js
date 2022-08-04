var app = document.getElementById("app");
var group = document.createElement("div");

  


group.classList = ["group-image"];



var total = 9;
var ratio = 3;
var sizeImage = 130;
var space = 10;
var radius = 14;


group.style.width = sizeImage * ratio + 10 + "px";
group.style.height = sizeImage * ratio + 10 + "px";
group.style.borderRadius = radius + "px";

for (let i = 0; i <total; i++) {
  let image = document.createElement("img");
  image.src = "https://picsum.photos/200/300?random=" + i;
  
  image.classList = ["image"];
  image.style.width = sizeImage + "px";
  image.style.height = sizeImage + "px";
  group.appendChild(image);
}

app.appendChild(group);




const btn = document.getElementById('btn');
const click =document.getElementById('click');

btn.addEventListener('click',function handleClick(){
  if(click.style.display ==='none'){
    click.style.display ='block';
    btn.textContent= '...';
  
  }
  else {
    click.style.display='none';
    btn.textContent= '...';
  }

})
//bật nav//
// $(document).ready(function(){
//   $('#toggle').click(function(){
    
//     $('.navbar-x') .slideToggle();
    
//   });
// });

$(document).ready(function(){
  $("#toggle").click(function(){
    
    $(".navbar-x").show();
    
  });
  $(".navbar-x").click(function(){
    $(".navbar-x").hide();
  })
});

$(document).ready(function(){
  $(".avatar-new").click(function(){
    a =this.src;
    $("#imageszoom").attr("src","img/images.jpg");
    $(".full-img").show();
  
  });
  $(".full-img").click(function(){
    $(".full-img").hide();
  })
})





  

