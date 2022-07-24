var getToggle = document.getElementById("toggle");
var modal = document.getElementById("exitToggle");

window.onclick = function (event) {
  if (event.target == modal) {
    getToggle.style.display = "none";
    modal.style.display = "none";
  }
};

function toggle() {
  if (!getToggle.style.display || getToggle.style.display === "none") {
    getToggle.style.display = "flex";
    modal.style.display = "block";
  }
}

var getMenu = document.getElementById("menu-mobile");

function openMenu() {
  if (getMenu.style.display == "none") {
    getMenu.style.display = "flex";
    // modal.style.display = "block";
  } else {
    console.log(getMenu.style.display);
    getMenu.style.display = "none";
  }
}
