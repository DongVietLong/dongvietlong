(function () {
  let success = true;

  function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve([
            { username: "john", email: "john@test.com" },
            { username: "jane", email: "jane@test.com" },
          ]);
        } else {
          reject("Failed to the user list");
        }
      }, 1000);
    });
  }

  function onFulfilled(users) {
    console.log(users);
  }
  function onRejected(error) {
    console.log(error);
  }

  const promise = getUsers();
  promise.then(onFulfilled, onRejected);
})();

(function () {
  // example with rejected state.
  let success = false;

  function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve([
            { username: "john", email: "john@test.com" },
            { username: "jane", email: "jane@test.com" },
          ]);
        } else {
          reject("Failed to the user list");
        }
      }, 1000);
    });
  }

  const promise = getUsers();

  promise.catch((error) => {
    console.log(error);
  });
})();
