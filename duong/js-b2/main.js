const nav = document.getElementById("nav");
nav.classList = [" nav__container "];

const tabs = [
  {
    label: "Bài viết",
  },
  {
    label: "Giới thiệu",
  },
  {
    label: "Bạn bè",
  },
  {
    label: "Ảnh",
  },
  {
    label: "Video",
  },
  {
    label: "Check in",
  },
  {
    label: "Xem thêm",
  },
];

createTab(tabs, nav);
/**
 * @function createNode
 *
 * @argument {1} ~ DOM ID
 * @argument {2} ~ Tag
 * @argument {3} ~ Content
 * @argument {4} ~ ClassName
 * @argument {5} ~ Event
 * @argument {6} ~ Handler
 * 
 * @returns NODE
 * */
 function createNode({
    id = Math.random() * 1000,
    tag = "div",
    content = null,
    className = "",
    event = "click",
    handler = () => {},
}) {
    const node = document.createElement(tag);
    node.innerHTML = content;
    node.className = className;
    node.id = id;
    node.addEventListener(event, handler);
    return node;
}

/**
 * @function handleToggleClass
 *
 * @argument {1} ~ DOM ID
 * @argument {2} ~ ClassName
 *
 * */
function handleToggleClass(id, className) {
    const node = document.getElementById(id);
    if (!node) return;
    node.classList.toggle(className);
}

/**
 * @function removeAllClassActive
 * @argument {1} ~ Selector
 * @argument {2} ~ ClassName
 * */

function removeAllClassActive(selector, className) {
    const nodeList = document.querySelectorAll(selector);
    if (!nodeList.length) return;
    nodeList.forEach((node) => {
        node.classList.remove(className);
    });
}

function createTab(tabs, root) {
    let activeId = 0;

    const nodeList = tabs.map((tab, idx) => {
        const tabId = `tab-${idx}`;
        return createNode({
            content: tab.label,
            className: `tab ${idx === 0 ? "active" : ""}`,
            event: "click",
            id: tabId,
            handler: () => {
                if (activeId === idx) return;
                activeId = idx;
                removeAllClassActive(".tab", "active");
                handleToggleClass(tabId, "active");
            },
        });
    });

    const tabContainer = createNode({
        className: "tab-container flex",
    });

    nodeList.forEach((node) => {
        tabContainer.appendChild(node);
    });
    
    root.appendChild(tabContainer);
    const seeMore = document.createElement('div');
    seeMore.style.background = "#3a3b3c";
    seeMore.style.fontWeight = 'bold';
    seeMore.style.height = '36px';
    seeMore.style.padding = '0px 16px';
    seeMore.style.borderRadius = '6px'; 
    seeMore.style.cursor = 'pointer';
    seeMore.innerHTML = "...";
    nav.appendChild(seeMore)
}
// List-image
var imageList = document.getElementById("imagelist");
var group = document.createElement("div");
var title = document.createElement("div")
var titleHeading = document.createElement("div");
var titleLink = document.createElement("div");
titleHeading.innerHTML = "Ảnh";
titleLink.innerHTML = "Xem tất cả ảnh";
group.classList = ["group-image"];
title.appendChild(titleHeading);
title.appendChild(titleLink);
title.classList = ["imagelist__link"]


var total = 9;
var ratio = 3;
var sizeImage = 128;
var space = 10;
var radius = 16;

group.style.width = sizeImage * ratio + 10 + "px";
group.style.height = sizeImage * ratio + 10 + "px";
group.style.borderRadius = radius + "px";

for (let i = 0; i < total; i++) {
  let image = document.createElement("img");
  image.src = "https://picsum.photos/200/300?random=" + i;
  image.classList = ["image"];
  image.style.width = sizeImage + "px";
  image.style.height = sizeImage + "px";
  group.appendChild(image);
}
titleHeading.style.fontSize = "20px";
titleHeading.style.fontWeight = "bold";
titleLink.style.color = "#4599FF";


imageList.appendChild(title);
imageList.appendChild(group);

// Listimage-1
// List-image
var imageList1 = document.getElementById("imagelist1");
var group = document.createElement("div");
var title = document.createElement("div")
var titleHeading = document.createElement("div");
var titleLink = document.createElement("div");
titleHeading.innerHTML = "Ảnh";
titleLink.innerHTML = "Xem tất cả ảnh";
group.classList = ["group-image"];
title.appendChild(titleHeading);
title.appendChild(titleLink);
title.classList = ["imagelist__link"]
var para = document.createElement('p');


var total = 9;
var ratio = 3;
var sizeImage = 128;
var space = 10;
var radius = 16;

group.style.width = sizeImage * ratio + 10 + "px";
group.style.height = sizeImage * ratio + 10 + "px";
group.style.borderRadius = radius + "px";

for (let i = 0; i < total; i++) {
  let image = document.createElement("img");
  image.src = "https://picsum.photos/200/300?random=" + i;
  image.classList = ["image"];

  image.style.width = sizeImage + "px";
  image.style.height = sizeImage + "px";
  group.appendChild(image);
  group.appendChild(para);
}
titleHeading.style.fontSize = "20px";
titleHeading.style.fontWeight = "bold";
titleLink.style.color = "#4599FF";

imageList.appendChild(title);

imageList.appendChild(group);



