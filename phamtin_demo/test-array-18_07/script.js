var listFriend ={
    friend1:{
        name:'Ngọc Sơn',
        avatar:'./list-avatar-friend/Son.jpg',        
    },
    friend2:{
        name:'Nguyễn Hướng',
        avatar:'./list-avatar-friend/huong.jpg',        
    },
     friend3 : {
        name : 'Đinh Trường',
        avatar : './list-avatar-friend/truong.jpg',        
    },
     friend4 : {
        name : 'Đinh Quyết',
        avatar :'./list-avatar-friend/quyet.jpg',        
    }, 
    friend5 : {
        name :'Đinh Hoàng',
        avatar :'./list-avatar-friend/hoang.jpg',        
    },
    friend6:{
        name :'Cao Vương',
        avatar :'./list-avatar-friend/ca-heo-vuong.jpg',        
    },
    friend7 : {
        name :'Đinh Long',
        avatar :'./list-avatar-friend/long.jpg',        
    },
    friend8: {
        name :'Nông dân',
        avatar :'./list-avatar-friend/nong-dan.jpg',        
    },
    friend9:{
        name:'Dân chơi',
        avatar:'./list-avatar-friend/ngoai.jpg',        
    },

};
var listAvatar = document.getElementById("lits-avatar");
var avatar1 = document.createElement("div");
avatar1.classList = ["group-avatar"];

var a = Object.values(listFriend);
a.forEach ( function (avatarFriend) {
    let avatar2 = document.createElement("img");
    avatar2.src = avatarFriend.avatar;
    avatar2.classList = ["avatar list-avatar-friends"];
    avatar1.appendChild(avatar2);
});
listAvatar.appendChild(avatar1);




// tạo danh sách bạn bè

var containerFriends = document.getElementById("container-friend");
  containerFriends.classList =("container-friend");
  
var containerFriendsHeader = document.createElement("div");
  containerFriendsHeader.classList=("container-friends-header");
  containerFriends.appendChild(containerFriendsHeader);
var friend =document.createElement("a");
  friend.href = "#";
  friend.innerHTML="Bạn bè";
  containerFriendsHeader.appendChild(friend);
var seeAll =document.createElement("button");
  seeAll.innerHTML = "Xem tất cả bạn bè";
  containerFriendsHeader.appendChild(seeAll);
var amountFriends = document.createElement("span");
  amountFriends.innerHTML = "800 bạn bè";
  containerFriends.appendChild(amountFriends);
  
var listImage = document.createElement("div");
var group = document.createElement("div");
group.classList = ["group-friends"];

a.forEach ( function (friends) {
    let friend = document.createElement("div");
  friend.classList = ["friend1"];
  let avatar = document.createElement("img");
  avatar.classList = ["avatar2"]
    avatar.src = friends.avatar;
   friend.appendChild(avatar);

  let name = document.createElement("span");
  name.innerHTML = friends.name;
  friend.appendChild(name)
  group.appendChild(friend);
});

  

listImage.appendChild(group);
containerFriends.appendChild(listImage);