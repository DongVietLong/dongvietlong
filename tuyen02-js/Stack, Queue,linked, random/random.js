//! random ra số nguyên ngẫu nhiên
function randomNumber(a) {
  let random = Math.random() * a;
  let rounding = Math.round(random);
  return rounding;
}
console.log(randomNumber(2.6));



// ! 1 mảng chứa các tên ngẫu nhiên
var arrString= ["dog", "cat", "fish", "tiger"];
var randomString = arrString[Math.floor(Math.random() * arrString.length)];
console.log(randomString)


//! random ra một giá trị bất kỳ
var arr = ["dog", "cat", "fish", "tiger", 1.23, 1.5, 3, 5];
var randomArr = arr[Math.floor(Math.random() * arr.length)];  
console.log(randomArr);