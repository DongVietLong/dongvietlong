// 1.Exc1
// const array=[1,2,3,4,5]
// const newArray= array.map(square)
// function square(num) {
//   return Math.pow(num,2)
// }
// console.log(newArray)

// 2.Exc2
// const array=[1,-4,12,0,-3,29,-150];
// const newArray= array.filter(positiveNums)
// function positiveNums(num) {
//   return num>0
// }
// const getSum = newArray.reduce(sum,0)
// function sum(total,number) {
//   return total + number
// }
// console.log(getSum)

// 3.Exc3

// part I
// const input = [12,46,32,64]
// const newInput = input.reduce(getMean,0);
// function getMean(mean, num) {
//   return mean+num/input.length
// }
// console.log(newInput)

// part II
// const input = [12,46,32,15,64]
// const newInput = input.sort(function(a, b){return a - b});

// function getMedian(array) {
// var half = Math.floor(array.length / 2);
//   if (array.length % 2!==0) return array[half];

//   return (array[half - 1] + array[half])/2
// }
// console.log(getMedian(newInput))

// 4.Exc4
// const input = "Nguyen Manh Tu";

// function getAbbrivation(a) {
//   const arr = a.split(" ");
//   const newArr = arr.map((word) => word[0]);
//   return newArr.join("");
// }
// console.log(getAbbrivation(input));
// 5.Exc5

// const input = [
//   {
//     name: 'Nguyen',
//     age: 18
//   },
//   {
//     name: 'Manh',
//     age: 54
//   },
//   {
//     name: 'Tu',
//     age: 25
//   },
//   {
//     name: 'Binh',
//     age: 27
//   },
// ]
// const ages= input.map(person => person.age)
// console.log(Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages))

// function findLongestWordLength(str) {
//   let arr = str.split(" ");
//   let longest = arr[0].length;
//   for (var i = 0; i < arr.length; i++) {
//     if (longest < arr[i].length) {
//       longest = arr[i].length
//     }
//   }
//   return longest;
// }
// findLongestWordLength("The quick brown fox jumped over the lazy dog");

// function largestOfFour(arr) {
//   let newArr= arr.map((a) => Math.max(...a))
//   return newArr;
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// var a = "nguyen manh tu";
// console.log(a.length);

// function confirmEnding(str, target) {
//   console.log(str.substring(str.length - target.length))
//   if (str.substring(str.length - target.length) === target) return true;
//   else return false;
// }

// confirmEnding("Bastian", "n");
// function repeatStringNumTimes(str, num) {
//   var result=""
//   for (let i=0; i<num;i++) {
//     result+=str
//   }
//   console.log(result)
//   return result;

// }
// repeatStringNumTimes("abc", 3);

// function truncateString(str, num) {
//   let string=""
//   for (let i=0; i<num; i++) {
//     string+=str[i]
//   }
//   console.log(`${string}...`)
//   return `${string}...`;
// }

// truncateString("A-tisket a-tasket A green and yellow basket", 10);

// function titleCase(str) {
//   let newSens=str.toLowerCase()
//   let newArr=newSens.split(" ").map((word) => word[0].toUpperCase()+word.slice(1)).join(" ");
//   return newArr;
// }

// titleCase("I'm a little tea pot");

// function frankenSplice(arr1, arr2, n) {
//   console.log(arr2.splice(n,0,arr1.toString()))
//   return arr2.splice(n,0,arr1.toString());
// }
// frankenSplice([1, 2, 3], [4, 5, 6], 1);

function chunkArrayInGroups(arr, size) {
  let group = [];
  let smallGroup = [];
  for (let i = 0; i < Math.floor(arr.length / size); i++) {
    console.log("i", i);
    for (let j = i*size; j < size; j++) {
      console.log("j", j);
      smallGroup.push();
    }
    group.push(smallGroup);
  }
  return group;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
