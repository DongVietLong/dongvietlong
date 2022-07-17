let body = document.querySelector('body');
body.style = 'background-color: #18191a;';

let mainNav = document.querySelector('.main__nav');
mainNav.style = 'background-color: #242526;';

// Header //
let header = document.querySelector('.header');
header.setAttribute('style', 'height: 55px; background-color: #242526; border-bottom: 1px solid #b0b3b844; position: fixed; top: 0; left: 0; right: 0; z-index: 1;');

let headerLogoAndSearch = document.querySelector('.header__logo-and-search');
headerLogoAndSearch.setAttribute('style', 'min-height: 55px; align-items: center; justify-content: space-between;');

let headerLogoFacebook = document.querySelector('.header__logo-facebook');
headerLogoFacebook.setAttribute('style', 'max-width: 40px; margin-right: 10px;');

let headerSearchInput = document.querySelector('.header__search-input');
headerSearchInput.setAttribute('style', 'background-color: rgba(0, 0, 0, 0); flex: 1; outline: none; color: #b0b3b8;');

let headerSearchIcon = document.querySelector('.header__search-icon');
headerSearchIcon.setAttribute('style', 'color: #b0b3b8; padding: 0 10px 0 15px;');

let headerSearch = document.querySelector('.header__search');
headerSearch.setAttribute('style', 'flex: 1; height: 40px; border-radius: 25px; justify-content: space-between; align-items: center; background-color: #3a3b3c;');

let headerNavbarList = document.querySelector('.header__navbar-list');
headerNavbarList.setAttribute('style', 'height: 55px; list-style: none; align-items: center; justify-content: space-around;');

let headerNavbarListi = document.getElementsByClassName('header__navbar-list-link');
for (var i = 0; i <= 5; i++ ) {
    headerNavbarListi[i].setAttribute('style', 'color: #b0b3b8; font-size: 22px; padding: 0 10px;');
}

let headerNavbarUser = document.querySelector('.header__navbar-user');
headerNavbarUser.setAttribute('style', 'height: 100%; align-items: center; justify-content: end;');

let headerNavbarUserLink = document.getElementsByClassName('header__navbar-user-link');
for (var i = 0; i < 3; i++ ) {
    headerNavbarUserLink[i].setAttribute('style', 'display: block; border-radius: 50%; margin-left: 10px; height: 40px; width: 40px; display: flex; align-items: center; background-color: #3a3b3c;');
}

let headerNavbarUserLinkIcon = document.getElementsByClassName('header__navbar-user-link-icon');
for (var i = 0; i < 3; i++ ) {
    headerNavbarUserLinkIcon[i].setAttribute('style', 'color: #e4e6eb; font-size: 18px; margin: auto;');
}

let headerAvatar = document.querySelector('.header__avatar');
headerAvatar.setAttribute('style', 'max-width: 40px; margin-left: 10px; border-radius: 50%;');


// Main //
// ------------------- cover img //
let coverImage = document.querySelector('.cover-image');
coverImage.setAttribute('style', 'margin-top: 55px; position: relative;');

let coverImageWarp = document.querySelector('.cover-image-warp');
coverImageWarp.setAttribute('style', 'max-height: 350px; overflow: hidden; max-width: 940px; margin: 0 auto; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;');

let coverImageLink = document.querySelector('.cover-image-link');
coverImageLink.setAttribute('style', 'max-width: 940px; margin: -100% auto 0;');

let coverImageBtnEdit = document.querySelector('.cover-image__btn-edit');
coverImageBtnEdit.setAttribute('style', 'position: absolute; bottom: 5%; right: 17%; padding: 0 10px; min-height: 35px; min-width: 100px; border: none; border-radius: 5px; font-weight: 500; outline: none;');

let btnEditIcon = document.querySelector('.btn-edit-icon');
btnEditIcon.setAttribute('style', 'padding-right: 3px;');


// ------------------- infomation user //
let avatarAndInfomationAndEdit = document.querySelector('.avatar-and-infomation-and-edit');
avatarAndInfomationAndEdit.setAttribute('style', 'max-width: 940px; margin: 0 auto; padding: 0 15px;');

let containerMoveUp = document.querySelector('.container-move-up');
containerMoveUp.setAttribute('style', 'position: relative; top: -30px;');

let avatar = document.querySelector('.avatar');
avatar.setAttribute('style', 'display: flex; position: relative;');

let avatarLinkImg = document.querySelector('.avatar__link-img');
avatarLinkImg.setAttribute('style', 'width: 175px; height: 175px; border-radius: 50%; border: 4px solid #242526; margin: auto;');

let avatarBtnEdit = document.querySelector('.avatar__btn-edit');
avatarBtnEdit.setAttribute('style', 'width: 35px; height: 35px; border-radius: 50px; position: absolute; bottom: 5%; right: 21%; background-color: #3a3b3c;');

let avatarBtnEditIcon = document.querySelector('.avatar__btn-edit-icon');
avatarBtnEditIcon.setAttribute('style', 'margin: auto; font-size: 20px; color: #e4e6eb;');

let infomation = document.querySelector('.infomation');
infomation.setAttribute('style', 'height: 100%; flex-direction: column; justify-content: center;');

let infomationName = document.querySelector('.infomation__name');
infomationName.setAttribute('style', 'color: #e4e6eb; font-size: 33px; font-weight: 650;');

let infomationListFriend = document.querySelector('.infomation__list-friend');
infomationListFriend.setAttribute('style', 'color: #b0b3b8; font-size: 16px; font-weight: 500;');

let infomationDesFriend = document.querySelector('.infomation__des-friend');
infomationDesFriend.setAttribute('style', 'margin-top: 5px; position: relative;');

let thumbnailFriend1 = document.querySelector('.thumbnail-friend1');
thumbnailFriend1.setAttribute('style', 'height: 35px; width: 35px; border-radius: 50%; position: absolute; border: 2px solid #242526;');

let thumbnailFriend2 = document.querySelector('.thumbnail-friend2');
thumbnailFriend2.setAttribute('style', 'height: 35px; width: 35px; border-radius: 50%; position: absolute; border: 2px solid #242526; margin-left: 20px;');

let thumbnailFriend3 = document.querySelector('.thumbnail-friend3');
thumbnailFriend3.setAttribute('style', 'height: 35px; width: 35px; border-radius: 50%; position: absolute; border: 2px solid #242526; margin-left: 40px;');

let thumbnailFriend4 = document.querySelector('.thumbnail-friend4');
thumbnailFriend4.setAttribute('style', 'height: 35px; width: 35px; border-radius: 50%; position: absolute; border: 2px solid #242526; margin-left: 60px;');

let infomationDesFriendAdd = document.querySelector('.infomation__des-friend-add');
infomationDesFriendAdd.setAttribute('style', 'color: #b0b3b8; font-size: 18px; display: block; position: absolute; top: 9px; left: 11px; margin-left: 60px;');

let editInformation = document.querySelector('.edit-information');
editInformation.setAttribute('style', 'height: 100%; align-items: flex-end; padding-bottom: 12px;');

let editInformationAddNew = document.querySelector('.edit-information__add-new');
editInformationAddNew.setAttribute('style', 'font-size: 16px; font-weight: 500; min-height: 40px; border: none; border-radius: 7px; margin-right: 10px; align-items: center; padding-right: 10px; color: #e4e6eb; background-color: #2374e1;');

let editInformationPlusWrap = document.querySelector('.edit-information__plus-wrap');
editInformationPlusWrap.setAttribute('style', 'width: 20px; height: 20px; background-color: #e4e6eb; margin: 0 8px; border-radius: 50%;');

let editInformationPlus = document.querySelector('.edit-information__plus');
editInformationPlus.setAttribute('style', 'color: #2374e1; margin: auto;');

let editInformationBtn = document.querySelector('.edit-information__btn');
editInformationBtn.setAttribute('style', 'flex: 1; font-size: 16px; line-height: 16px; border-radius: 7px; font-weight: 500; min-height: 40px; color: #e4e6eb; background-color: #3a3b3c; border: none; align-items: center; justify-content: space-around; padding-right: 10px;');

let navbarActivate = document.querySelector('.navbar-activate');
navbarActivate.setAttribute('style', 'border-top: 1px solid #b0b3b844; min-height: 60px; max-width: 940px; margin: 0 auto; padding: 0 30px; align-items: center; justify-content: start;');

let navbarActivateIcon = document.getElementsByClassName('navbar-activate-icon');
for (var i = 0; i < 7; i++ ) {
    navbarActivateIcon[i].setAttribute('style', 'padding: 18px 15px; color: #b0b3b8; height: 100%;');
}

let navbarActivateMore = document.querySelector('.navbar-activate-more');
navbarActivateMore.setAttribute('style', 'padding-left: 5px; transform: translateY(-10%);');




// ------------------------IMG //
let setItem = document.getElementsByClassName('set-item');
for (var i = 0; i < setItem.length; i++) {
    setItem[i].setAttribute('style', 'background-color: #242526; max-width: 940px; margin: 20px auto 0; padding: 0 30px 20px; border-radius: 10px;');
}

let imgAndEdit = document.getElementsByClassName('img__and-edit');
for (var i = 0; i < imgAndEdit.length; i++) {
    imgAndEdit[i].setAttribute('style', 'max-height: 212.5px; border-radius: 10px; overflow: hidden; margin: 5px 0; position: relative;');
}

let imgLink = document.getElementsByClassName('img__link');
for (var i = 0; i < imgLink.length; i++) {
    imgLink[i].setAttribute('style', 'width: 100%;');
}

let imgAndEditIcon = document.getElementsByClassName('img__and-edit-icon');
for (var i = 0; i < imgAndEditIcon.length; i++) {
    imgAndEditIcon[i].setAttribute('style', 'padding: 10px; border-radius: 50%; font-size: 15px; background-color: rgba(0, 0, 0, 0.5); color: aliceblue; position: absolute; right: 5%; top: 5%;');
}

let head = document.getElementsByClassName('head');
for (var i = 0; i < head.length; i++) {
    head[i].setAttribute('style', 'padding-top: 20px; display: flex;');
}

let headName = document.getElementsByClassName('head-name');
for (var i = 0; i < headName.length; i++) {
    headName[i].setAttribute('style', 'color: #e4e6eb; font-size: 22px; font-weight: 650; flex: 1; display: block;');
}

let headAddImgVideo = document.querySelector('.head__add-img-video');
headAddImgVideo.setAttribute('style', 'background-color: rgba(0, 0, 0, 0); color: #2374e1; border: none; border-radius: 5px; font-weight: 500;');

let headHeadSetting = document.getElementsByClassName('head__head-setting');
for (var i = 0; i < headHeadSetting.length; i++) {
    headHeadSetting[i].setAttribute('style', 'min-width: 50px; height: 35px; margin-left: 20px; color: #e4e6eb; background-color: #3a3b3c; border: none; border-radius: 5px;');
}

let headDes = document.getElementsByClassName('head__des');
for (var i = 0; i < headDes.length; i++) {
    headDes[i].setAttribute('style', 'display: flex; list-style: none; padding: 0; margin-top: 30px;');
}

let headDesItem = document.getElementsByClassName('head__des-item');
for (var i = 0; i < headDesItem.length; i++) {
    headDesItem[i].setAttribute('style', 'color: #e4e6eb; padding: 0 15px 20px; margin-right: 15px;');
}






/*
let tenBien = document.querySelector('.tenClass');
tenBien.setAttribute('style', '');
*/