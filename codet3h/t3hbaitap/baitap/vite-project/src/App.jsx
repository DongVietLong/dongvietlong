import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="header row bg-light">
        <div className="header_box">
          <div className="img_cover">
            <img src="./src/img/Untitled.png" className="edit-img" alt="lỗi hiển thị" />
            <div className="editPhoto bg-white">
              <div className="text_photo"><i className="fa-solid fa-camera"></i> Chỉnh sửa ảnh bìa</div>
            </div>
          </div>
          <div className="header_name">
            <div className="infor">
              <div className="infor_avt">
                <img src="./src/img/284481578_1314771525719894_3714395749483230868_n.jpg" alt="lỗi hiển thị" className="avt" />
                <div className="icon">
                  <i className="fa-solid fa-camera icon_camera"></i>
                </div>
              </div>
              <div className="infor_name">
                <p className="name"></p>
                <p className="friend">3.5k bạn bè </p>
                <div className="avt_friend">
                  <img src="./src/img/273211368_3784968438393981_2418813121239177362_n.jpg" alt="" className="avt_listfriend" />
                  <img src="./src/img/273430886_3152898434987919_4204426877592786831_n.jpg" alt="" className="avt_listfriend" />
                  <img src="./src/img/278679421_333819668732616_8228329371902771593_n.jpg" alt="" className="avt_listfriend" />
                  <img src="./src/img/282226961_1613867875650622_7227141899873835288_n.jpg" alt="" className="avt_listfriend" />
                  <img src="./src/img/284481578_1314771525719894_3714395749483230868_n.jpg" alt="" className="avt_listfriend" />
                  <img src="./src/img/278679421_333819668732616_8228329371902771593_n.jpg" alt="" className="avt_listfriend" />
                </div>
              </div>
            </div>
            <div className="story">
              <button type="button" className="btn btn-primary btn-bg text-white "><i
                className="fa-solid fa-circle-plus story_text"></i>Thêm vào tin</button>
              <button type="button" className="btn btn-gray btn-bg "><i className="fa-solid fa-pen story_text"></i>Chỉnh sửa trang
                cá nhân</button>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light header_navbar div_navbar">
            <div id="app">
              <div className="blockSeeMore">

              </div>
              
            </div>

            <div className="more">
              <p className="dots"><i className="fa-solid fa-ellipsis"></i></p>
            </div>
          </nav>
        </div>
      </div>


      <div className="row justify-content-md-center">
            <div className="box-container ">
                <div className="container_introduce bg-light ">
                    <h4 className="title">Giới Thiệu</h4>
                    <button className="edit_introduce">Chỉnh sửa tiểu sử</button>
                    <div className="profile"><i className="fa-solid fa-graduation-cap"/>Đã học tại <span className="text_school">THPT CẦU
                        XE</span></div>
                    <div className="profile"><i className="fa-solid fa-graduation-cap"></i>Học Công Nghệ Thông Tin tại Trường Đại học Công
                        nghiệp Hà Nội</div>
                    <div className="profile"><i className="fa-solid fa-house-chimney"></i>Sống tại <span className="text_school">Hà Nội</span>
                    </div>
                    <div className="profile"><i className="fa-solid fa-location-dot"></i>Đến từ <span className="text_school">Hải Dương</span>
                    </div>
                    <div className="profile"><i className="fa-solid fa-heart"></i>Độc thân</div>
                    <div className="profile"><i className="fa-solid fa-wifi"></i>Có <span className="text_school">418 người</span> theo dõi
                    </div>
                    <button className="edit_introduce">Chỉnh sửa chi tiết</button>
                    <button className="edit_introduce">Thêm sở thích</button>
                    <div className="img">

                    </div>
                    <button className="edit_introduce">Chỉnh sửa phần Đáng chú ý</button>

                    <div className="grid_image">
                        <div className="header_grid">
                            <h4 className="text_header">Ảnh</h4>
                            <button className="seeAllPhotos">Xem tất cả ảnh</button>
                        </div>
                    </div>
                </div>
                <div className="container_news col ">
                    <div className="container_news_heading bg-light">
                        <div className="news_heading">
                            <img src="./src/img/284481578_1314771525719894_3714395749483230868_n.jpg" alt="" className="avt_listfriend" />
                            <input type="text" name="status" placeholder="Bạn đang nghĩ gì?" className="status" />
                        </div>
                        <div className="new_function">
                            <div className="new_live_stream">
                                <p className="text_live_stream"><i className="fa-solid fa-video news_icon1"></i>Video trực tiếp</p>
                            </div>
                            <div className="new_live_stream">
                                <p className="text_live_stream"><i className="fa-solid fa-image news_icon2"></i>Ảnh/video</p>
                            </div>
                            <div className="new_live_stream">
                                <p className="text_live_stream"><i className="fa-solid fa-flag news_icon3"></i>Sự kiện trong đời</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light box_posts">
                        <div className="posts">
                            <div className="container_posts">
                                <h3 className="text_container_posts">Bài viết</h3>
                            </div>
                            <div className="button_container_posts ">
                                <button className="button_posts_text"><i data-visualcompletion="css-img" className="post_icon hu5pjgll lzf7d6o1"
                                    ></i>Bộ
                                    lọc</button>
                                <button className="button_posts_text"><i data-visualcompletion="css-img" className="post_icon hu5pjgll lzf7d6o1"
                                    ></i>Quản
                                    lý bài viết</button>
                            </div>
                        </div>
                        <div className="function_posts">
                            <button className="button_fuction_posts bg-light"><i data-visualcompletion="css-img"
                                className="post_icon hu5pjgll op6gxeva"
                                ></i>Xem
                                theo danh sách</button>
                            <button className="button_fuction_posts bg-light"><i data-visualcompletion="css-img"
                                className="post_icon hu5pjgll m6k467ps"
                                ></i>Xem
                                theo danh sách</button>
                        </div>
                    </div>
                    <p className="text_news">Bài viết đã ghim</p>
                    <div className="post box_posts bg-light">
                        <div className="title">
                            <div className="title_left">
                                <div className="title_left_img">
                                    <img src="./src/img/284481578_1314771525719894_3714395749483230868_n.jpg" alt="" className="avt_listfriend" />
                                </div>
                                <div className="div_user_name">
                                    <p className="user_name">Đồng Viết Long</p>
                                    <p className="date_posts">12 tháng 10,2021 <i className="fa-solid fa-earth-oceania"></i></p>
                                </div>
                            </div>
                            <div className="title_icon">
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                        <div className="div_cap">
                            <p className="cap">Gõ cửa trái tim <i className="fa-solid fa-heart"></i></p>
                        </div>
                        <div className="img_posts">
                            <img src="./src/img/long3.jpg" alt="" className="img_posts_first" />
                        </div>
                        <div className="footer_posts">
                            <div className="icon_posts">
                                <i className="fa-solid fa-thumbs-up icon_posts_like"></i>
                                <i className="fa-solid fa-face-grin-squint icon_posts_smile"></i>
                                <i className="fa-solid fa-heart icon_posts_heart"></i>
                                <p className="count_icon">214</p>
                            </div>
                            <div className="count_comment">
                                <p className="text_count_comment">90 bình luận</p>
                            </div>
                        </div>
                        <div className="user_status">
                            <div className="icon_user_status">
                                <i className="fa-solid fa-heart icon_posts_heart"></i>
                                <p className="text_share_posts">Yêu thích</p>
                            </div>
                            <div className="comment_posts">
                                <i className="fa-solid fa-message"></i>
                                <p className="text_share_posts">Bình luận</p>
                            </div>
                            <div className="share_posts">
                                <i className="fa-solid fa-share"></i>
                                <p className="text_share_posts">Chia sẻ</p>
                            </div>
                        </div>
                        <div className="select_posts">
                            <p className="text_select_posts">Phù hợp nhất <i className="fa-solid fa-arrow-down"></i></p>
                        </div>
                        <div className="commentOfFriends">
                            <div className="img_commentOfFriends">
                                <img src="./src/img/273430886_3152898434987919_4204426877592786831_n.jpg" alt="" className="avt_listfriend" />
                            </div>
                            <div className="comment_friends">
                                <div className="box_comment">

                                </div>
                                <div className="feedback_comment">
                                    <p className="like_comment">Thích</p>
                                    <p className="feedback">Phản hồi</p>
                                </div>
                            </div>
                        </div>
                        <div className="commentOfFriends">
                            <div className="img_commentOfFriends">
                                <img src="./src/img/273430886_3152898434987919_4204426877592786831_n.jpg" alt="" className="avt_listfriend" />
                            </div>
                            <div className="comment_friends">
                                <div className="box_comment">

                                </div>
                                <div className="feedback_comment">
                                    <p className="like_comment">Thích</p>
                                    <p className="feedback">Phản hồi</p>
                                </div>
                            </div>
                        </div>
                        <div className="write_comment">
                            <div className="news_heading">
                                <img src="./src/img/284481578_1314771525719894_3714395749483230868_n.jpg" alt="" className="avt_listfriend" />
                                <input type="text" name="status" placeholder="Viết bình luận ......" className="status" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
