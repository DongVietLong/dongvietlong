const baseURL = 'https://62ebc1e5705264f263dfa66f.mockapi.io/v1'
var grid_image = document.querySelector('.grid_image');
var divGrid = document.createElement("div");
divGrid.classList = ["group-image"];
var sizeImage = 112;
var space = 16;
var radius = 20;
divGrid.style.width = 100 + "%";
divGrid.style.height = 400 + "px";
divGrid.style.borderRadius = radius + "px";

const _axios = {
    get(url, opts = {}) {
        return fetch(url, {
            method: "GET",
            ...opts,
        })
    },
    post(url, payload, opts = {}) {
        return fetch(url, {
            method: "POST",
            body: payload,
            ...opts,
        })
    }
}

function getUserInfo() {
    return new Promise((resolve, reject) => {

        let userUrl = baseURL + '/user'
        _axios.get(userUrl)
            .then(response => {
                return response.json()
            })
            .then(data => {
                resolve(data[0])
            })
            .catch(err => {
                reject(err)
            })
    })
}
function getpost() {
    return new Promise((resolve, reject) => {

        let userUrl = baseURL + '/posts'
        _axios.get(userUrl)
            .then(response => {
                return response.json()
            })
            .then(data => {
                resolve(data[0])
            })
            .catch(err => {
                reject(err)
            })
    })
}
function getGridImage() {
    return new Promise((resolve, reject) => {

        let userUrl = baseURL + '/images'
        _axios.get(userUrl)
            .then(response => {
                return response.json()
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
    })
}
window.addEventListener('DOMContentLoaded', function () {
    console.log('running when page loaded');

    getUserInfo()
        .then(data => {
            const avatar = document.querySelector('.avt')
            const background = document.querySelector('.edit-img')
            const username = document.querySelector('.name')
            username.innerHTML = data.name
            background.src = data.background
            avatar.src = data.avatar
        })
        .catch(e => {
            //  alert(e.message)
        })
    getpost()
        .then(base => {
            const cap = document.querySelector('.cap');
            const img_posts_first = document.querySelector('.img_posts_first');
            img_posts_first.src = base.avatar;
            cap.innerHTML = base.content;
        })
        .catch(e => {
            //  alert(e.message)
        })
    getGridImage()
        .then(data => {
            data.forEach(element => {
                if (element.id < 9) {
                    let createImage = document.createElement("img");
                    createImage.src = element.imageUrl;
                    createImage.classList = ["image_grid"];
                    createImage.style.width = 33 + "%";
                    createImage.style.height = sizeImage + space + "px";
                    divGrid.appendChild(createImage);
                }
            });
            grid_image.appendChild(divGrid);
        })
        .catch(e => {
            //  alert(e.message)
        })
})