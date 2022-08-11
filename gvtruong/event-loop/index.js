// example 1: function big loop to simulate a blocking function

function task(message) {
  // emulate time consuming task
  let n = 10000000000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}

console.log("Start script...");
console.time();
task("Call an API");
console.timeEnd(); // default: 9553.782958984375 ms
console.log("Done!");

// callback is resolve issue blocking.

console.log("Start script...");

setTimeout(() => {
  task("Download a file.");
}, 1000);

console.log("Done!");

try {
  let result = add(10, 20);
  console.log(result);
} catch (e) {
  console.log({ name: e.name, message: e.message });
}
