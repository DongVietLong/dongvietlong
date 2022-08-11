export default function MainProfile() {
  return (
    <main class="main">
      <div class="main__nav">
        <div class="cover-image">
          <div class="cover-image-warp">
            <img
              class="cover-image-link"
              src="https://bom.so/nCxIiX"
              alt="cover facebook"
            />
            <button class="cover-image__btn-edit">
              <i class="btn-edit-icon fa-solid fa-camera"></i>
              <span class="d-none d-lg-block">Chỉnh sửa ảnh bìa</span>
            </button>
          </div>
        </div>
        <div class="avatar-and-infomation-and-edit">
          <div class="container container-fix">
            <div class="avatar">
              <img
                class="avatar__link-img"
                src="https://rgl.mobi/rhQbB"
                alt="avatar facebook"
              />
              <span class="avatar__btn-edit d-flex">
                <i class="avatar__btn-edit-icon fa-solid fa-camera"></i>
              </span>
            </div>
            <div class="infomation">
              <span class="infomation__name">Bùi Văn Sự</span>
              <a class="infomation__list-friend" href="#">
                8 bạn bè
              </a>
              <div class="infomation__des-friend-wrap">
                <img
                  class="thumbnail-friend friend1"
                  src="https://st.depositphotos.com/1005920/2667/i/450/depositphotos_26678809-stock-photo-logout-icon.jpg"
                  alt=""
                />
                <img
                  class="thumbnail-friend friend2"
                  src="https://image.shutterstock.com/image-vector/user-log-off-icon-flat-260nw-742110784.jpg"
                  alt=""
                />
                <img
                  class="thumbnail-friend friend3"
                  src="https://st.depositphotos.com/1008768/4036/i/600/depositphotos_40361845-stock-photo-logout-icon.jpg"
                  alt=""
                />
                <img
                  class="thumbnail-friend friend4"
                  src="https://images-na.ssl-images-amazon.com/images/I/61cLa-1q0fL.png"
                  alt=""
                />
                <i class="infomation__des-friend-add fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <div class="edit-information">
              <button class="edit-information__add-new d-flex">
                <span class="edit-information__plus-wrap d-flex">
                  <i class="edit-information__plus fa-solid fa-plus"></i>
                </span>
                Thêm vào tin
              </button>
              <button class="edit-information__btn d-flex">
                <i class="edit-information__btn-pen fa-solid fa-pen"></i>
                Chỉnh sửa trang cá nhân
              </button>
            </div>
          </div>
        </div>
        <div class="navbar-activate">
          <div class="container container-fix d-flex">
            <a href="#" class="navbar-activate-icon active">
              Bài viết
            </a>
            <a href="#introduce" class="navbar-activate-icon">
              Giới thiệu
            </a>
            <a href="#friend" class="navbar-activate-icon d-none d-sm-block">
              Bạn bè
            </a>
            <a href="#img" class="navbar-activate-icon d-none d-sm-block">
              Ảnh
            </a>
            <a href="#video" class="navbar-activate-icon d-none d-sm-block">
              Video
            </a>
            <a href="#sport" class="navbar-activate-icon d-none d-md-block">
              Thể thao
            </a>
            <a href="#music" class="navbar-activate-icon d-none d-md-block">
              Âm nhạc
            </a>
            <div class="dropdown show">
              <a
                class="btn btn-secondary dropdown-toggle navbar-activate-icon-see-more"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Xem thêm
              </a>

              <div
                class="dropdown-menu"
                id="navbar__see-more-list"
                aria-labelledby="dropdownMenuLink"
              >
                <a
                  class="dropdown-item d-sm-none"
                  id="navbar__see-more-icon"
                  href="#"
                >
                  Bạn bè
                </a>
                <a
                  class="dropdown-item d-sm-none"
                  id="navbar__see-more-icon"
                  href="#img"
                >
                  Ảnh
                </a>
                <a
                  class="dropdown-item d-sm-none"
                  id="navbar__see-more-icon"
                  href="#video"
                >
                  Video
                </a>
                <a
                  class="dropdown-item d-md-none"
                  id="navbar__see-more-icon"
                  href="#sport"
                >
                  Thể thao
                </a>
                <a
                  class="dropdown-item d-md-none"
                  id="navbar__see-more-icon"
                  href="#music"
                >
                  Âm nhạc
                </a>
                <a class="dropdown-item" id="navbar__see-more-icon" href="#">
                  Phim
                </a>
                <a class="dropdown-item" id="navbar__see-more-icon" href="#">
                  Chương trình TV
                </a>
                <a class="dropdown-item" id="navbar__see-more-icon" href="#">
                  Sách
                </a>
                <a class="dropdown-item" id="navbar__see-more-icon" href="#">
                  Thích
                </a>
                <a class="dropdown-item" id="navbar__see-more-icon" href="#">
                  Sự kiện
                </a>
                <a class="dropdown-item" id="navbar__see-more-icon" href="#">
                  Câu hỏi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="post set-item">
        <div class="container container-fix">
          <div class="row">
            <div class="col pl-0 col-12 col-lg-5">
              <div class="information-related">
                <div class="information-personal-wrap">
                  <span class="information-personal-title">Giới thiệu</span>
                  <ul class="information-personal-list">
                    <li class="personal-item personal-text-small">
                      nick phụ thôi
                    </li>
                    <li class="personal-item personal-item-btn">
                      Chỉnh sửa tiểu sử
                    </li>
                    <li class="personal-item personal-basic">
                      <i class="personal-item-icon fa-solid fa-house-chimney"></i>
                      <span>Sống tại Hà Nội</span>
                    </li>
                    <li class="personal-item personal-basic">
                      <i class="personal-item-icon fa-solid fa-clock"></i>
                      <span>Tham gia vào Tháng 7 năm 2018</span>
                    </li>
                    <li class="personal-item personal-basic">
                      <i class="personal-item-icon fa-solid fa-eye"></i>
                      <span>Có 5 người theo dõi</span>
                    </li>
                    <li class="personal-item personal-item-btn">
                      Chỉnh sửa chi tiết
                    </li>
                    <li class="personal-item personal-item-btn">
                      Thêm sở thích
                    </li>
                    <li class="personal-item personal-item-btn">
                      Thêm nội dung đáng chú ý
                    </li>
                  </ul>
                </div>

                <div class="information-personal-imgs">
                  <section class="d-flex align-items-center justify-content-between">
                    <span class="information-personal-title pt-0">Ảnh</span>
                    <span class="personal-imgs-view-all">Xem tất cả ảnh</span>
                  </section>
                  <div class="row row-fix">
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/0J1Gx6" alt="" />
                      </section>
                    </div>
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/94obiZ" alt="" />
                      </section>
                    </div>
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/94obiZ" alt="" />
                      </section>
                    </div>
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/94obiZ" alt="" />
                      </section>
                    </div>
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/94obiZ" alt="" />
                      </section>
                    </div>
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/94obiZ" alt="" />
                      </section>
                    </div>
                  </div>
                </div>

                <div class="information-personal-friend information-personal-imgs">
                  <section class="d-flex align-items-center justify-content-between">
                    <span class="information-personal-title pt-0">Bạn bè</span>
                    <span class="personal-imgs-view-all">
                      Xem tất cả bạn bè
                    </span>
                  </section>
                  <span class="personal-friend-desc d-block">8 người bạn</span>

                  <div class="row row-fix">
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/BFTgLv" alt="" />
                      </section>
                      <a href="" class="personal-friend-name">
                        Yuliada Frasdika Dika
                      </a>
                    </div>
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/BFTgLv" alt="" />
                      </section>
                      <a href="" class="personal-friend-name">
                        Yuliada Frasdika Dika
                      </a>
                    </div>
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/BFTgLv" alt="" />
                      </section>
                      <a href="" class="personal-friend-name">
                        Yuliada Frasdika Dika
                      </a>
                    </div>
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/O2ut5e" alt="" />
                      </section>
                      <a href="" class="personal-friend-name">
                        Mmh Hamzah
                      </a>
                    </div>
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/BFTgLv" alt="" />
                      </section>
                      <a href="" class="personal-friend-name">
                        Yuliada{" "}
                      </a>
                    </div>
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/BFTgLv" alt="" />
                      </section>
                      <a href="" class="personal-friend-name">
                        Frasdika Dika
                      </a>
                    </div>
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/BFTgLv" alt="" />
                      </section>
                      <a href="" class="personal-friend-name">
                        Yuliada Dika
                      </a>
                    </div>
                    <div class="col col-fix col-4">
                      <section class="information-personal-img">
                        <img src="https://bom.so/BFTgLv" alt="" />
                      </section>
                      <a href="" class="personal-friend-name">
                        Yuliada Dika
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col p-0 col-12 col-lg-7">
              <div class="posts-other">
                <div class="posts-type-set information-personal-wrap">
                  <section class="d-flex align-items-center justify-content-between">
                    <img
                      class="header__avatar"
                      src="https://rgl.mobi/rhQbB"
                      alt="avatar facebook"
                    />
                    <div class="posts-type-set-search friend-search-container">
                      <input
                        class="friend-search"
                        type="text"
                        placeholder="Bạn đang nghĩ gì?"
                      />
                    </div>
                  </section>
                  <ul class="posts-type-list d-flex align-items-center justify-content-between">
                    <li class="posts-type-item">
                      <i class="posts-type-icon--camera fa-solid fa-video"></i>
                      <span>Video trực tiếp</span>
                    </li>
                    <li class="posts-type-item">
                      <i class="posts-type-icon--image-video fa-solid fa-image"></i>
                      <span>Ảnh/video</span>
                    </li>
                    <li class="posts-type-item">
                      <i class="posts-type-icon--flag fa-solid fa-flag"></i>
                      <span>Sự kiện trong đời</span>
                    </li>
                  </ul>
                </div>

                <div class="post-manage information-personal-wrap">
                  <section class="d-flex align-items-center justify-content-end">
                    <span class="post-manage-head-tittle information-personal-title">
                      Bài viết
                    </span>
                    <button class="post-manage-head-btn posts-type-item">
                      <i class="post-head-icon--filter fa-solid fa-filter"></i>
                      <span>Bộ lọc</span>
                    </button>
                    <button class="post-manage-head-btn posts-type-item">
                      <i class="post-head-icon--setting fa-solid fa-gear"></i>
                      <span>Quản lý bài viết</span>
                    </button>
                  </section>
                  <ul class="post-manage-list d-flex align-items-center justify-content-between">
                    <li class="post-manage-item active">
                      <i class="post-item-icon--menu fa-solid fa-bars"></i>
                      <span>Xem theo danh sách</span>
                    </li>
                    <li class="post-manage-item">
                      <i class="post-item-icon--grid fa-solid fa-border-all"></i>
                      <span>Chế độ xem lưới</span>
                    </li>
                  </ul>
                </div>

                <div class="post information-personal-wrap">
                  <section class="d-flex align-items-center justify-content-between">
                    <div class="header__avatar-desc-wrap d-flex align-items-center justify-content-between">
                      <img
                        class="header__avatar mr-2"
                        src="https://rgl.mobi/rhQbB"
                        alt="avatar facebook"
                      />
                      <div class="posts-desc">
                        <span class="posts-desc-name">Bùi Văn Sự</span>
                        <span class="posts-desc-date">
                          13 tháng 9, 2021 .{" "}
                          <i class="fa-solid fa-earth-americas"></i>
                        </span>
                      </div>
                    </div>
                    <button class="friend-name-edit">
                      <i class="fa-solid fa-ellipsis"></i>
                    </button>
                  </section>
                  <section class="post-img">
                    <img
                      class="post-img-link mt-3"
                      src="https://bom.so/zVkkng"
                      alt=""
                    />
                    <span class="post-img-desc1 d-block">S LAZADA.VN</span>
                    <span class="post-img-desc2 d-block">
                      Giúp mình giành chiến thắng trò chơi Săn 600k của Lazada
                      bằng cách ấn vào link và tải ứng dụng
                    </span>
                  </section>

                  <ul class="post-action posts-type-list d-flex align-items-center justify-content-between">
                    <li class="posts-type-item">
                      <i class="posts-type-icon--like fa-regular fa-thumbs-up"></i>
                      <span>Thích</span>
                    </li>
                    <li class="posts-type-item">
                      <i class="posts-type-icon--cmt fa-regular fa-comment"></i>
                      <span>Bình luận</span>
                    </li>
                    <li class="posts-type-item">
                      <i class="posts-type-icon--share fa-solid fa-share"></i>
                      <span>Chia sẻ</span>
                    </li>
                  </ul>
                  <section class="post-img-comment d-flex align-items-center justify-content-between">
                    <img
                      class="header__avatar ml-0 mr-2"
                      src="https://rgl.mobi/rhQbB"
                      alt="avatar facebook"
                    />
                    <div class="post-comment posts-type-set-search friend-search-container">
                      <input
                        class="friend-search"
                        type="text"
                        placeholder="Viết bình luận"
                      />
                      <i class="fa-regular fa-face-smile"></i>
                      <i class="fa-solid fa-camera"></i>
                      <i class="fa-solid fa-gift"></i>
                      <i class="fa-solid fa-image"></i>
                    </div>
                  </section>
                </div>
                <div class="post information-personal-wrap">
                  <section class="d-flex align-items-center justify-content-between">
                    <div class="header__avatar-desc-wrap d-flex align-items-center justify-content-between">
                      <img
                        class="header__avatar mr-2"
                        src="https://rgl.mobi/rhQbB"
                        alt="avatar facebook"
                      />
                      <div class="posts-desc">
                        <span class="posts-desc-name">Bùi Văn Sự</span>
                        <span class="posts-desc-date">
                          13 tháng 9, 2021 .{" "}
                          <i class="fa-solid fa-earth-americas"></i>
                        </span>
                      </div>
                    </div>
                    <button class="friend-name-edit">
                      <i class="fa-solid fa-ellipsis"></i>
                    </button>
                  </section>
                  <section class="post-img">
                    <img
                      class="post-img-link mt-3"
                      src="https://bom.so/zVkkng"
                      alt=""
                    />
                    <span class="post-img-desc1 d-block">S LAZADA.VN</span>
                    <span class="post-img-desc2 d-block">
                      Giúp mình giành chiến thắng trò chơi Săn 600k của Lazada
                      bằng cách ấn vào link và tải ứng dụng
                    </span>
                  </section>

                  <ul class="post-action posts-type-list d-flex align-items-center justify-content-between">
                    <li class="posts-type-item">
                      <i class="posts-type-icon--like fa-regular fa-thumbs-up"></i>
                      <span>Thích</span>
                    </li>
                    <li class="posts-type-item">
                      <i class="posts-type-icon--cmt fa-regular fa-comment"></i>
                      <span>Bình luận</span>
                    </li>
                    <li class="posts-type-item">
                      <i class="posts-type-icon--share fa-solid fa-share"></i>
                      <span>Chia sẻ</span>
                    </li>
                  </ul>
                  <section class="post-img-comment d-flex align-items-center justify-content-between">
                    <img
                      class="header__avatar ml-0 mr-2"
                      src="https://rgl.mobi/rhQbB"
                      alt="avatar facebook"
                    />
                    <div class="post-comment posts-type-set-search friend-search-container">
                      <input
                        class="friend-search"
                        type="text"
                        placeholder="Viết bình luận"
                      />
                      <i class="fa-regular fa-face-smile"></i>
                      <i class="fa-solid fa-camera"></i>
                      <i class="fa-solid fa-gift"></i>
                      <i class="fa-solid fa-image"></i>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="introduce" class="introduce set-item">
        <div class="container container-fix">
          <div class="row">
            <div class="col col-12 col-lg-4">
              <div class="introduce-list-des">
                <a class="introduce__head-name" href="">
                  Giới thiệu
                </a>
                <ul class="introduce__list">
                  <li class="introduce__list-item active-item">Tổng quan</li>
                  <li class="introduce__list-item">Công việc học vấn</li>
                  <li class="introduce__list-item">Nơi từng sống</li>
                  <li class="introduce__list-item">
                    Thông tin liên hệ và cơ bản
                  </li>
                  <li class="introduce__list-item">
                    Gia đình và các mối quan hệ
                  </li>
                  <li class="introduce__list-item">Chi tiết về bạn</li>
                  <li class="introduce__list-item">Sự kiện trong đời</li>
                </ul>
              </div>
            </div>
            <div class="col col-12 col-lg-8">
              <ul class="introduce-detail-list">
                <li class="introduce-detail-item active-text">
                  <i class="introduce-detail-icon fa-solid fa-square-plus"></i>
                  <span class="introduce-detail-content">
                    Thêm nơi làm việc
                  </span>
                </li>
                <li class="introduce-detail-item">
                  <i class="introduce-detail-icon fa-solid fa-graduation-cap"></i>
                  <div class="introduce-detail-content">
                    <span>
                      Học Xây dựng dân dụng và công nghiệp tại Trường Đại học Mỏ
                      - Địa chất
                    </span>
                    <br />
                    <span class="introduce-detail--extra">
                      Niên khóa 2013 - 2019
                    </span>
                  </div>
                  <div class="introduce-detail--modifed d-flex">
                    <i class="fa-solid fa-lock"></i>
                    <button class="friend-name-edit">
                      <i class="fa-solid fa-ellipsis"></i>
                    </button>
                  </div>
                </li>
                <li class="introduce-detail-item">
                  <i class="introduce-detail-icon fa-solid fa-house-chimney"></i>
                  <span class="introduce-detail-content">Sống tại Hà Nội</span>
                  <div class="introduce-detail--modifed d-flex">
                    <i class="fa-solid fa-earth-americas"></i>
                    <button class="friend-name-edit">
                      <i class="fa-solid fa-ellipsis"></i>
                    </button>
                  </div>
                </li>
                <li class="introduce-detail-item active-text">
                  <i class="introduce-detail-icon fa-solid fa-square-plus"></i>
                  <span class="introduce-detail-content">Thêm quê quán</span>
                </li>
                <li class="introduce-detail-item active-text">
                  <i class="introduce-detail-icon fa-solid fa-square-plus"></i>
                  <span class="introduce-detail-content">
                    Thêm tình trạng mối quan hệ
                  </span>
                </li>
                <li class="introduce-detail-item">
                  <i class="introduce-detail-icon fa-solid fa-phone"></i>
                  <div class="introduce-detail-content">
                    <span>094 395 20 08</span>
                    <br />
                    <span class="introduce-detail--extra">Di động</span>
                  </div>
                  <div class="introduce-detail--modifed d-flex">
                    <i class="fa-solid fa-pen"></i>
                    <button class="friend-name-edit">
                      <i class="fa-solid fa-ellipsis"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="friend" class="friend set-item">
        <div class="container container-fix">
          <div class="head">
            <a class="head-name" href="">
              Bạn bè
            </a>
            <div class="friend-search-container">
              <i class="friend-search-icon fa-solid fa-magnifying-glass"></i>
              <input class="friend-search" type="text" placeholder="Tìm kiếm" />
            </div>
            <button class="head__add d-none d-lg-block">Lời mời kết bạn</button>
            <button class="head__add d-none d-lg-block">Tìm bạn bè</button>
            <button class="head-setting">
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <ul class="head__des">
            <li class="head__des-item active">Tất cả bạn bè</li>
            <li class="head__des-item">Người theo dõi</li>
            <li class="head__des-item">Đang theo dõi</li>
          </ul>

          <div class="row row-fix">
            <div class="col col-fix col-12 col-md-6">
              <div class="friend-info">
                <div class="friend-img">
                  <img
                    class="friend-img-link"
                    src="https://bom.so/BFTgLv"
                    alt=""
                  />
                </div>
                <span class="friend-name">Yuliada Frasdika Dika</span>
                <button class="friend-name-edit">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>
            </div>
            <div class="col col-fix col-12 col-md-6">
              <div class="friend-info">
                <div class="friend-img">
                  <img
                    class="friend-img-link"
                    src="https://bom.so/BFTgLv"
                    alt=""
                  />
                </div>
                <span class="friend-name">Yuliada Frasdika Dika</span>
                <button class="friend-name-edit">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>
            </div>
            <div class="col col-fix col-12 col-md-6">
              <div class="friend-info">
                <div class="friend-img">
                  <img
                    class="friend-img-link"
                    src="https://bom.so/BFTgLv"
                    alt=""
                  />
                </div>
                <span class="friend-name">Yuliada Frasdika Dika</span>
                <button class="friend-name-edit">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>
            </div>
            <div class="col col-fix col-12 col-md-6">
              <div class="friend-info">
                <div class="friend-img">
                  <img
                    class="friend-img-link"
                    src="https://bom.so/BFTgLv"
                    alt=""
                  />
                </div>
                <span class="friend-name">Yuliada Frasdika Dika</span>
                <button class="friend-name-edit">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>
            </div>
            <div class="col col-fix col-12 col-md-6">
              <div class="friend-info">
                <div class="friend-img">
                  <img
                    class="friend-img-link"
                    src="https://bom.so/BFTgLv"
                    alt=""
                  />
                </div>
                <span class="friend-name">Yuliada Frasdika Dika</span>
                <button class="friend-name-edit">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>
            </div>
            <div class="col col-fix col-12 col-md-6">
              <div class="friend-info">
                <div class="friend-img">
                  <img
                    class="friend-img-link"
                    src="https://bom.so/BFTgLv"
                    alt=""
                  />
                </div>
                <span class="friend-name">Yuliada Frasdika Dika</span>
                <button class="friend-name-edit">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>
            </div>
            <div class="col col-fix col-12 col-md-6">
              <div class="friend-info">
                <div class="friend-img">
                  <img
                    class="friend-img-link"
                    src="https://bom.so/BFTgLv"
                    alt=""
                  />
                </div>
                <span class="friend-name">Yuliada Frasdika Dika</span>
                <button class="friend-name-edit">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>
            </div>
            <div class="col col-fix col-12 col-md-6">
              <div class="friend-info">
                <div class="friend-img">
                  <img
                    class="friend-img-link"
                    src="https://bom.so/BFTgLv"
                    alt=""
                  />
                </div>
                <span class="friend-name">Yuliada Frasdika Dika</span>
                <button class="friend-name-edit">
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="img" class="img set-item">
        <div class="container container-fix">
          <div class="head">
            <a class="head-name" href="">
              Ảnh
            </a>
            <button class="head__add">Thêm ảnh/video</button>
            <button class="head-setting">
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </div>
          <ul class="head__des">
            <li class="head__des-item active">Ảnh của bạn</li>
            <li class="head__des-item">Album</li>
          </ul>
          <div class="row row-fix">
            <div class="col col-fix col-6 col-sm-4 col-md-3 col-lg-1-5">
              <a
                target="_blank"
                href="https://bom.so/vWXkcl"
                class="img__and-edit"
              />
              <img class="img__link" src="https://bom.so/vWXkcl" alt="" />
              <i class="img__and-edit-icon fa-solid fa-pen"></i>
              <a target="_blank" href="" />
            </div>

            <div class="col col-fix col-6 col-sm-4 col-md-3 col-lg-1-5">
              <a
                target="_blank"
                href="https://bom.so/Lbly5A"
                class="img__and-edit"
              />
              <img class="img__link" src="https://bom.so/Lbly5A" alt="" />
              <i class="img__and-edit-icon fa-solid fa-pen"></i>
              <a target="_blank" href="" />
            </div>

            <div class="col col-fix col-6 col-sm-4 col-md-3 col-lg-1-5">
              <a
                target="_blank"
                href="https://bom.so/A7kRqc"
                class="img__and-edit"
              />
              <img class="img__link" src="https://bom.so/A7kRqc" alt="" />
              <i class="img__and-edit-icon fa-solid fa-pen"></i>
              <a target="_blank" href="" />
            </div>

            <div class="col col-fix col-6 col-sm-4 col-md-3 col-lg-1-5">
              <a
                target="_blank"
                href="https://bom.so/MikPpC"
                class="img__and-edit"
              />
              <img class="img__link" src="https://bom.so/MikPpC" alt="" />
              <i class="img__and-edit-icon fa-solid fa-pen"></i>
              <a target="_blank" href="" />
            </div>

            <div class="col col-fix col-6 col-sm-4 col-md-3 col-lg-1-5">
              <a
                target="_blank"
                href="https://bom.so/WUOGyU"
                class="img__and-edit"
              />
              <img class="img__link" src="https://bom.so/WUOGyU" alt="" />
              <i class="img__and-edit-icon fa-solid fa-pen"></i>
              <a target="_blank" href="" />
            </div>

            <div class="col col-fix col-6 col-sm-4 col-md-3 col-lg-1-5">
              <a
                target="_blank"
                href="https://bom.so/WUOGyU"
                class="img__and-edit"
              />
              <img class="img__link" src="https://bom.so/WUOGyU" alt="" />
              <i class="img__and-edit-icon fa-solid fa-pen"></i>
              <a target="_blank" href="" />
            </div>

            <div class="col col-fix col-6 col-sm-4 col-md-3 col-lg-1-5">
              <a
                target="_blank"
                href="https://bom.so/fA7ccf"
                class="img__and-edit"
              />
              <img class="img__link" src="https://bom.so/fA7ccf" alt="" />
              <i class="img__and-edit-icon fa-solid fa-pen"></i>
              <a target="_blank" href="" />
            </div>

            <div class="col col-fix col-6 col-sm-4 col-md-3 col-lg-1-5">
              <a
                target="_blank"
                href="https://bom.so/1uMuKX"
                class="img__and-edit"
              />
              <img class="img__link" src="https://bom.so/1uMuKX" alt="" />
              <i class="img__and-edit-icon fa-solid fa-pen"></i>
              <a target="_blank" href="" />
            </div>

            <div class="col col-fix col-6 col-sm-4 col-md-3 col-lg-1-5">
              <a
                target="_blank"
                href="https://bom.so/m7vdOB"
                class="img__and-edit"
              />
              <img class="img__link" src="https://bom.so/m7vdOB" alt="" />
              <i class="img__and-edit-icon fa-solid fa-pen"></i>
              <a target="_blank" href="" />
            </div>
          </div>
        </div>
      </div>

      <div id="video" class="video set-item">
        <div class="container container-fix">
          <section class="head">
            <a class="head-name" href="">
              Video
            </a>
            <button class="head-setting">
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </section>
          <ul class="head__des">
            <li class="head__des-item active">Video của bạn</li>
          </ul>
        </div>
      </div>

      <div id="sport" class="sport set-item">
        <div class="container container-fix">
          <section class="head">
            <a class="head-name" href="">
              Thể thao
            </a>
            <button class="head-setting">
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </section>
          <ul class="head__des">
            <li class="head__des-item active">Đội thể thao</li>
            <li class="head__des-item">Vận động viên</li>
          </ul>
        </div>
      </div>

      <div id="music" class="music set-item">
        <div class="container container-fix">
          <section class="head">
            <a class="head-name" href="">
              Âm nhạc
            </a>
            <button class="head-setting">
              <i class="fa-solid fa-ellipsis"></i>
            </button>
          </section>
          <ul class="head__des">
            <li class="head__des-item active">Nghệ sĩ</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
