// tạo danh sách ảnh

function images(data) {
  var listImage = document.getElementById("list-image");
  var group = document.createElement("div");
  group.classList = ["group-image"];

  for (let i = 0; i < 9; i++) {
    let image = document.createElement("img");
    image.src = data[i].imageUrl;
    image.classList = ["image-old"];

    group.appendChild(image);
  }

  listImage.appendChild(group);
}



// tạo danh sách avatar ban be
function friendAvatar(data) {
  var listAvatar = document.getElementById("lits-avatar");
  var avatar1 = document.createElement("div");
  avatar1.classList = ["group-avatar"];

  for (let i = 0; i < 9; i++) {
    let a = Math.floor(Math.random() * data.length);
    let avatar2 = document.createElement("img");
    avatar2.src = data[a].avatar;
    avatar2.classList = ["avatar list-avatar-friends"];
    avatar1.appendChild(avatar2);
  }
  listAvatar.appendChild(avatar1);

  listAvatar.appendChild(avatar1);
}

// tạo danh sách bạn bè

function friends(data) {
  var containerFriends = document.getElementById("container-friend");
  containerFriends.classList = "container-friend";

  var containerFriendsHeader = document.createElement("div");
  containerFriendsHeader.classList = "container-friends-header";
  containerFriends.appendChild(containerFriendsHeader);
  var friend = document.createElement("a");
  friend.href = "#";
  friend.innerHTML = "Bạn bè";
  containerFriendsHeader.appendChild(friend);
  var seeAll = document.createElement("button");
  seeAll.innerHTML = "Xem tất cả bạn bè";
  containerFriendsHeader.appendChild(seeAll);
  var amountFriends = document.createElement("span");
  amountFriends.innerHTML = "800 bạn bè";
  containerFriends.appendChild(amountFriends);

  var listImage = document.createElement("div");
  var group = document.createElement("div");
  group.classList = ["group-friends"];

  for (let i = 0; i < 9; i++) {
    let friend = document.createElement("div");
    friend.classList = ["friend1"];
    let avatar = document.createElement("img");
    avatar.classList = ["avatar2"];
    avatar.src = data[i].avatar;
    friend.appendChild(avatar);

    let name = document.createElement("a");
    name.href = "#";
    name.innerHTML = data[i].name;
    friend.appendChild(name);
    group.appendChild(friend);
  }

  listImage.appendChild(group);
  containerFriends.appendChild(listImage);
}
//thông tin người dùng
function user(data) {
  const avatar1 = document.getElementById("avatar1");
  const avatar2 = document.getElementById("avatar2");
  const avatar3 = document.getElementById("avatar3");

  const background = document.getElementById("background");
  const username = document.getElementById("username");

  username.innerHTML = data.name;
  background.src = data.background;
  avatar1.src = data.avatar;
  avatar2.src = data.avatar;
  avatar3.src = data.avatar;

  return ( avatarUser = data.avatar);
}

const baseURL = "https://62ebc1e5705264f263dfa66f.mockapi.io/v1";

const _axios = {
  get(url, opts = {}) {
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
        console.log("aaaaa",err);
      });
  });
}

function getFriends() {
  return new Promise((resolve, reject) => {
    let userUrl = baseURL + "/friends";

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
        console.log(err);
      });
  });
}

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


function getPosts() {
  return new Promise((resolve, reject) => {
    let userUrl = baseURL + "/posts";

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


function posts(data){
  const listPost = document.getElementById("post");
  
  var post = data.map(function(post) {
   
    return `
      <div class="main-container">
        <div class="header-main-container row">
            <div  style="margin-left: 10px;"><a href="#"><img src=${post.avatar} alt="nha_tho_o_nam_dinh" class="avatar"></a></div>
            <div class="col">
              <p><a href="#"><strong>${post.author}</strong></a></p>
              <a href="#">${post.createdAt.slice(0, 10)}.</a>

            </div>
            <div class="setting-status">
                <button type="button" data-toggle="dropdown" >&#9477;</button>
                  
            </div>                 
            
        </div>
        <span >${post.content}</span>
        
        <div class="amount-like">
            <div class="flex row">
                <span >&#128077;</span>
                <span >&#128150;</span>
                <span> 22</span>
            </div>
            <button> ${post.countComment} bình luận</button>
        </div>
        <hr>
        <div class="interactive">
            <button><span >&#128077;</span> Thích </button>
            <button><span >&#128172;</span>Bình luận </button>
            <button><span >&#10150;</span>Chia sẻ </button>                        
        </div>
        <hr>
        <div>Phù hợp nhất</div>
        <div class="comment"> 
            <img src=${post.avatar} alt="avtar" class="avatar">
                <div class="comment-new">
                <input type="text" placeholder="Viết bình luận ..." >
                <div>
                    <button title="bình luận" data-toggle="tooltip">&#128513;</button>
                    <button title="bình luận" data-toggle="tooltip">&#128525;</button>
                    <button title="bình luận" data-toggle="tooltip">&#128531;</button>
                    <button title="bình luận" data-toggle="tooltip"> &#x1F62D;</button>
                </div> 
                
            </div>
        </div>
        
                                      
        </div>                                                                       
        </div>                    
      </div>             
    </div>

    `;
  });
  listPost.innerHTML = post;
  
}

window.addEventListener("DOMContentLoaded", function () {
  
  

    Promise.all([getUserInfo(),getFriends(),getImages(),getPosts()])
    .then(function(all) {
      const UserInfo = all[0];
      const Friends = all[1];
      const Images = all[2];
      const Posts = all[3];

      user(UserInfo);
      friends(Friends);
      friendAvatar(Friends);
      images(Images);
      posts(Posts);

    }) 
    .catch((e) => {
     
      // alert(e.message);
      const err = document.getElementById("err");  
      const header = document.getElementById("header");
      const main = document.getElementById("main");  
      header.classList.add('media-none');
      main.classList.add('media-none'); 
      err.innerHTML = " ! Bạn đang gặp lỗi:"  + e.message
      err.classList.remove('none');


    })
    .finally(() => {
      const loadding = document.getElementById("loading");
      const header = document.getElementById("header");
      const main = document.getElementById("main");      

      loadding.classList.add('none');
      header.classList.remove('none');
      main.classList.remove('none');

      
    });
  



  // getUserInfo()
  //   .then((data) => {
  //     user(data);
  //   })
  //   .catch((e) => {
  //     alert(e.message);
  //   });

  // getFriends()
  //   .then((data) => {
  //     friends(data);
  //     friendAvatar(data);
  //   })
  //   .catch((e) => {
  //     alert(e.message);
  //   });

  // getImages()
  //   .then((data) => {
  //     images(data);
  //   })
  //   .catch((e) => {
  //     alert(e.message);
  //   });

  // getPosts()
  // .then((data) => {
  //     console.log("post",data);
  //     renderPost(data);
  //   })
  //   .catch((e) => {
  //     alert(e.message);
  //   });
});
