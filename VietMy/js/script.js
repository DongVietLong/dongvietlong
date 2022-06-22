
// document.getElementById("1").onclick = function() {Clickchange1()};
// function Clickchange1() {
//   const list1 = document.getElementById("1");
//   const list2 = document.getElementById("2");
//  list1.style.backgroundColor = "yellow";
//  list2.style.backgroundColor = "red";
//   console.log("aa");
// }
// document.getElementById("2").click = function() {Clickchange2()};
// function Clickchange2() {
//   const list1 = document.getElementById("1");
//   const list2 = document.getElementById("2");
//  list1.style.backgroundColor = "red";
//  list2.style.backgroundColor = "yellow";
//   console.log("bb");
// }

function myFunction() {
  const myNodelist = document.querySelector("1");
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.color = "red";
  }
}
