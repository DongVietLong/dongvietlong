const getIcon = document.querySelector('.menuIcon');
var app = document.getElementById('app');
console.log(app);
getIcon.onclick=function(){
    if(app.style.display = "none")
    {
      app.style.display = "block";
    }
    else if(app.style.display = "block"){
      app.style.display = "none";
    }
    console.log(1);
}