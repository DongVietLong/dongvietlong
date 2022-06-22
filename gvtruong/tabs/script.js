const app = document.getElementById("app");
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
];

createTab(tabs, app);
