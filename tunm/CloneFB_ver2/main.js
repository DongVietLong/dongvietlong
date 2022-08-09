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
// call API
const baseURL = "https://62ebc1e5705264f263dfa66f.mockapi.io/v1";

const _axios = {
  get: (url, opts = {}) => {
    return fetch(url, {
      method: "GET",
      ...opts,
    });
  },
  post(url, payload, opts = {}) {
    return fetch(url, {
      method: "POST",
      body: payload,
      ...opts,
    });
  },
};

function getUserInfo() {
  return new Promise((resolve, reject) => {
    let userUrl = baseURL + "/user";

    _axios
      .get(userUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data[0]);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

window.addEventListener("DOMContentLoaded", function () {
  console.log("running when page loaded");

  getUserInfo()
    .then((data) => {
      const avatar = document.getElementById("avatar");
      const cover = document.getElementById("cover");
      const username = document.getElementById("username");
      const iconAvatar = document.getElementsByClassName("icon_avatar");
      username.innerHTML = data.name;
      cover.src = data.background;
      avatar.src = data.avatar;
        for (let i = 0; i < iconAvatar.length; i++) {
          iconAvatar[i].src = data.avatar;
        }
    })
    .catch((e) => {
      reject(e);
    });
});

function getFriendInfo() {
  return new Promise((resolve, reject) => {
    let userUrl = baseURL + "/friends";

    _axios
      .get(userUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
        console.log(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
window.addEventListener("DOMContentLoaded", function () {
  console.log("running when page loaded");

  getFriendInfo()
    .then((data) => {
      const friend_number = document.getElementById("friend_number");
      friend_number.innerHTML = data.length;
      const friendAvt = document.getElementsByClassName("friendAvt");
      for (let i = 0; i < friendAvt.length; i++) {
        friendAvt[i].src = data[i].avatar;
      }
    })
    .catch((e) => {});
});

function getImages() {
  return new Promise((resolve, reject) => {
    let userUrl = baseURL + "/images";

    _axios
      .get(userUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

window.addEventListener("DOMContentLoaded", function () {
  console.log("running when page loaded");

  getImages()
    .then((data) => {
      const images = document.getElementsByClassName("photo-size");
      const timePost = document.getElementsByClassName('time');
      const photoPost = document.getElementsByClassName('photoPost');
        for (let i = 0; i < images.length; i++) {
          images[i].src = data[i].imageUrl;
        }
        for (let i = 0; i < timePost.length; i++) {
        timePost[i].innerHTML=data[i].createdAt;
        }
        for (let i = 0; i < photoPost.length; i++) {
        photoPost[i].src=data[i].imageUrl;
        }
    })
    .catch((e) => {
      // alert(e.message);
    });
});

setTimeout(()=> {
document.getElementsByClassName('photo-container')[0].classList.remove('loading');
document.getElementsByClassName('profile')[0].classList.remove('loading');
document.getElementsByClassName('category-container')[0].classList.remove('loading');
document.getElementsByClassName('fb-body')[0].classList.remove('loading');

}, 2000)