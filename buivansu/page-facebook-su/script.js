let getElementNav = document.querySelectorAll('.navbar-activate-icon');

getElementNav.forEach((item) => {
    item.addEventListener('click', () => {
        getElementNav.forEach((item2) => {
            item2.classList.remove('active');
        });
        item.classList.add('active');
    });
});


var imgHeaderDes = document.querySelectorAll('.img .head__des-item');
imgHeaderDes.forEach((item) => {
    item.addEventListener('click', () => {
        imgHeaderDes.forEach((item2) => {
            item2.classList.remove('active');
        });
        item.classList.add('active');
    });
});

var videoHeaderDes = document.querySelectorAll('.video .head__des-item');
videoHeaderDes.forEach((item) => {
    item.addEventListener('click', () => {
        videoHeaderDes.forEach((item2) => {
            item2.classList.remove('active');
        });
        item.classList.add('active');
    });
});

var sportHeaderDes = document.querySelectorAll('.sport .head__des-item');
sportHeaderDes.forEach((item) => {
    item.addEventListener('click', () => {
        sportHeaderDes.forEach((item2) => {
            item2.classList.remove('active');
        });
        item.classList.add('active');
    });
});

var musicHeaderDes = document.querySelectorAll('.music .head__des-item');
musicHeaderDes.forEach((item) => {
    item.addEventListener('click', () => {
        musicHeaderDes.forEach((item2) => {
            item2.classList.remove('active');
        });
        item.classList.add('active');
    });
});