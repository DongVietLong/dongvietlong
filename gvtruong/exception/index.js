// (function () {
//   function add(x, y) {
//     if (typeof x !== "number") {
//       throw "The first argument must be a number";
//     }
//     if (typeof y !== "number") {
//       throw "The second argument must be a number";
//     }
//
//     return x + y;
//   }
//
//   try {
//     const result = add("a", 10);
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
// })();

// using class Error

// (function () {
//   function add(x, y) {
//     if (typeof x !== "number") {
//       throw new Error("The first argument must be a number");
//     }
//     if (typeof y !== "number") {
//       throw new Error("The second argument must be a number");
//     }
//
//     return x + y;
//   }
//
//   try {
//     const result = add("a", 10);
//     console.log(result);
//   } catch (e) {
//     console.log(e.name, ":", e.message);
//   }
// })();

class NumberError extends Error {
  constructor(value) {
    super(`"${value}" is not a valid number`);
    this.name = "InvalidNumber";
  }
}
//
// (function () {
//   function getUserById(id) {
//     if (typeof id !== "number" || id <= 0) {
//       throw new Error("Invalid id argument");
//     }
//
//     return new Promise((resolve, reject) => {
//       resolve({
//         id: id,
//         username: "admin",
//       });
//     });
//   }
//
//   getUserById("a")
//     .then((user) => console.log(user.username))
//     .catch((err) => console.log(err));
//
//   try {
//     getUserById("a")
//       .then((user) => console.log(user.username))
//       .catch((err) => console.log(`Caught by .catch ${error}`));
//   } catch (error) {
//     console.log(`Caught by try/catch ${error}`);
//   }
// })();

(function () {
  let authorized = false;

  function getUserById(id) {
    return new Promise((resolve, reject) => {
      if (!authorized) {
        // throw new Error("Unauthorized access to the user data");
        reject("Unauthorized access to the user data");
      }

      resolve({
        id: id,
        username: "admin",
      });
    });
  }

  try {
    getUserById(10)
      .then((user) => console.log(user.username))
      // .catch((err) => console.log(`Caught by .catch ${err}`));
  } catch (error) {
    console.log(`Caught by try/catch ${error}`);
  }
})();
