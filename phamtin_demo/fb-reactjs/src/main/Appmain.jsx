
function  AppMain() {
 

  return (
    <main id="main">
        <div className="main">            
                <div className="main1 ">
                    <div className="col col-sm-12 col-md-12 col-lg-5 main-right" >
                        <div className=" introduce" >
                                 <h2> Giới thiệu</h2>
                                <button>Thêm tiểu sử</button>
                                <div className="container-fluid ">
                                    <img src="./src/img/word.png" alt=""/>
                                    <span>Làm việc tại truong dai hoc cong nghiep Ha noi</span>
                                </div>
                                <div className="container-fluid margin20">
                                    <img src="./src/img/word.png" alt=""/>
                                    <span >Làm việc tại <a href="#" className="content-left-link" >Trường đại học Bôn Ba</a></span>
                                </div>
                                <div className="container-fluid ">
                                   <img src="./src/img/word.png" alt=""/>
                                <span>Làm việc tại <a href="#" className="content-left-link" >Trường THPT Giao THủy C</a></span>
                                </div>
                               
                                <div className="container-fluid">
                                    <img src="./src/img/icon-hat.png" alt=""/>
                                    <span >Từng học tại <a href="#" className="content-left-link" >Trường đại học Bôn Ba</a></span>
                                </div>
                                <div className="container-fluid ">
                                    <img src="./src/img/icon-hat.png" alt=""/>
                                    <span className="">Từng học tại <a href="#" className="content-left-link" >Trường THPT Giao THủy C</a></span>
                                </div>
                                <div className="container-fluid ">
                                    <img src="./src/img/home.png" alt=""/>
                                    <span className="font-size20 margin-left">Sống tại <a href="#" className="content-left-link" >Nam Định</a></span>
                                </div>
                                <div className="container-fluid ">
                                    <img src="./src/img/map.png" alt=""/>
                                    <span >Đến từ  <a href="#" className="content-left-link" >Giao Thủy</a></span>
                                </div>
                                <div className="container-fluid">
                                    <img src="./src/img/head.png" alt=""/>
                                    <span >Độc thân </span>
                                </div>
                                <div className="container-fluid">
                                    <img src="./src/img/wifi.png" alt=""/>
                                    <span >Có <a href="#" className="content-left-link">165 người</a> theo dõi</span>                        
                                </div>
                                <button>Chỉnh sửa chi tiết</button>
                                <button>Thêm sở thích</button>
                                <button>Thêm nội dung đáng chú ý</button>
                                                    
                                             
                        </div>
                        
                        <div className="lits-img-old">
                            <div className="lits-img-old-header"> 
                                <span className="h2">Ảnh</span>
                                <button>Xem tất cả các ảnh</button>
                            </div>
                            <div id="list-image"></div> 
                        </div>
                        
                        <div id="container-friend"></div>
                        
                    </div>
                    
                    <div className="col col-sm-12 col-md-12 col-lg-7 main-left">
                        <div className="main-container">
                            <div className="status">
                                <a href="#" ><img src="./src/img/nha_tho_o_nam_dinh_5.jpg" alt="nha_tho_o_nam_dinh" className="avatar" id="avatar3"/></a>
                                <button className=" col add-status">Bạn đang suy nghĩ gì ?</button>
                            </div>
                            <hr className="w-75"/>
                            <div className="add-content">
                                <button> <span >&#127909;</span>  Video trực tiếp</button>
                                <button><span >&#128247;</span> Ảnh/ Video</button>
                                <button><span >&#9872;</span> Sự kiện trong đời</button>
                            </div>                   
                        </div>
                        <div className="main-container">
                            <div className="setting-content">
                                <span className="h2">Bài viết</span>
                                <div>   
                                    <button><span >&#9783;  </span>Bộ lọc</button>
                                    <button><span >&#128295;  </span> Quản lí bài viết</button>
                                </div>
                            </div>
                            <hr/>
                            <div className="setting-display">
                                <button className="col-6" ><span>&#9776;  </span>Xem theo danh sách</button>
                                <button className="col-6"><span >&#9638;  </span>Chế độ xem lưới</button>
                                
                            </div>
                        </div>
                       
                    
                       <div id="post">  </div>  
                </div>       
            
            </div> 
        </div>
    </main>
    
  )
}

export default AppMain

