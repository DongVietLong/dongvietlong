var x = document.getElementById("toggle");
var modal = document.getElementById("myModal");

window.onclick = function (event) {
  console.log(event.target);
  if (event.target == modal) {
    x.style.display = "none";
    modal.style.display = "none";
  }
};

function toggle() {
  if ((x.style.display = "none")) {
    x.style.display = "flex";
    modal.style.display = "block";
  } else {
    x.style.display = "none";
    modal.style.display = "none";
  }
}
