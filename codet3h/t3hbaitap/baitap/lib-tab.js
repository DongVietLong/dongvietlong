var app = document.getElementById("app");
app.classList = ["container center h-max"];

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
    label: "Xem Thêm"
  }
];
const SeeMor = [
  {
    item: "Thể Thao"
  },
  {
    item: "Âm nhạc"
  },
  {
    item: "Phim"
  },
  {
    item: "Chương Trình TV"
  },
];
createTab(tabs, app);
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
  handler = () => { },
}) {
  const node = document.createElement(tag);
  node.innerHTML = content;
  node.className = className;
  node.id = id;
  node.addEventListener(event, handler);
  return node;
}
function createList({
  className = "",
  content = null,
}) {
  const node = document.createElement("li");
  node.className = className;
  node.innerHTML = content;
  return node
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
  const content = document.getElementById(id).innerHTML;
  console.log(id);
  if (!node) return;
  if(content === "Xem Thêm")
  {
    var getDIV=document.querySelector('.blockSeeMore');
    console.log(getDIV);
    getDIV.classList.toggle('display');
  }
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
        if (activeId === idx && (tab.label != "Xem Thêm")) return;
        activeId = idx;
        removeAllClassActive(".tab", "active");
        handleToggleClass(tabId, "active");
      },
    });
  });


  const nodeTab = SeeMor.map((tab) => {
    console.log(tab.item);
    return createList(
      {
        content: tab.item,
        className: "li_SeeMore",
      }
    )
  })
  const createUl = document.createElement("ul");
  createUl.classList = ["ul_SeeMore"];
  var getDIv=document.querySelector('.blockSeeMore');
  getDIv.appendChild(createUl);
  nodeTab.forEach((acc) => {
    createUl.appendChild(acc);
  })


  const tabContainer = createNode({
    className: "tab-container flex",
  });
  tabContainer.appendChild(getDIv);
  nodeList.forEach((node) => {
    tabContainer.appendChild(node);
  });

  root.appendChild(tabContainer);
}
