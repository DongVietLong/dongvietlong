import IconHeader from "./IconHeader";
import ButtonNav from "./ButtonNav";
function AppHeader() {
 

  return (
    <header> 
       <div id="header">
        <nav className="navbar-expand-sm bg-light navbar-dark fixed-top fixed-top-header ">  
            <div className="col fixed-top-header-left ">
               <a href="#"><img src="data:image/png;base64,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" alt="Facebook_f_logo" wight="60px" height="60px"/></a>
               <form >
                <input type="text" name="search" placeholder="Tìm kiếm trên Facebook"/>
              </form>
              
               <button className="seach media-none"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
           
          
            <div className="menu-header"  >               
                
                <ul>
                  
                    <IconHeader className={"fa-solid fa-house"} title={"Trang chủ"}/>
                    <IconHeader className={"fa-solid fa-tv"} title={"Watch"}/>
                    <IconHeader className={"fa-solid fa-cart-shopping"} title={"Marketplace"}/>
                    <IconHeader className={"fa-solid fa-people-group"} title={"Nhóm"}/>
                    <IconHeader className={"fa-solid fa-clapperboard"} title={"Media"}/>
                    
                </ul>
              </div>
              <div className="menu">
                <button><i className="fa-solid fa-bars"></i></button>
                <div id="1" className="none ">
                    <ul>
                        <li>
                            1S
                        </li>
                        <li>
                            1
                        </li>
                        <li>
                            1
                        </li>
                        
                    </ul>
                </div>
            </div>
                         
            <div className="col fixed-top-header-icon-right"> 
                <ul>
                  <IconHeader className={"fa-regular fa-message"} title={"Tin nhắn"}/>
                  <IconHeader className={"fa-regular fa-bell"} title={"Thông báo"}/>                                                        
                    <li><button data-toggle="tooltip" title="Tài khoản"><img src="./src/img/nha_tho_o_nam_dinh_5.jpg" alt="" className="avatar" id="avatar2"/></button></li>
                </ul>                          
                                
            </div>
          </nav>
        <div >
          <img id="background" src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/5/26/913299/Ngan-Ha25.jpg" alt="ảnh-nền" />            
        </div>



        <div className="information">
            <div className="col col-sm-12 col-md-12 col-lg-auto avatar-name">
                <div className=" col col-sm-12 col-md-12 col-lg-auto  center1">
                    <a href="#"><img src="./src/img/nha_tho_o_nam_dinh_5.jpg" alt="nha_tho_o_nam_dinh" id="avatar1" className="avatar-main" /></a></div>
                <div className=" col col-sm-12 col-md-12 col-lg-auto  flex name center1" >
                    <div className=" flex h1" id="username">Phạm Văn Tín</div>
                    <div ><a href="#" className="text-link">800  Bạn bè</a></div>
                    <div  id="lits-avatar" className="center1">
                   
                    </div>
                </div>
            </div>
            <div className="col col-sm-12 col-md-12  col-lg-auto add-information center1">
                <div className=" colcol-sm-12 col-md-12  col-lg-auto  center1"  >
                    <button type="button" className="btn btn-primary font-size20"> &#10010; Thêm vào tin</button>
                    <button type="button" className="btn btn-secondary font-size20"> &#9998; Chỉnh sửa trang cá nhân</button>            
                </div> 
            </div>         
            
            
                
        </div>
        <hr/>
       
       
        
         <div className="menu-information" >
            <div >
              <ul>
                <ButtonNav content={"Bài viết"} />
                <ButtonNav content={"Bạn bè"} />     
                <ButtonNav content={"Ảnh"}/>                            
                <ButtonNav content={"Video"}/>  
                <ButtonNav content={"Check in"}/>  
                <li className="dropdown">
                  
                      <button className=" dropdown-toggle nav-content" type="button" data-toggle="dropdown" >Xem thêm</button>
                        <ul className="dropdown-menu flex">
                        <ButtonNav content={"Thể thao"} />
                        <ButtonNav content={"Âm nhạc"} />     
                        <ButtonNav content={"Phim"}/>                            
                        <ButtonNav content={"Chương trình TV"}/>  
                        <ButtonNav content={"Sách"}/> 
                        <ButtonNav content={"Ứng dụng trò chơi"}/>                     
                      </ul>
                  
                </li>
                 
              </ul>
                
               
                             
            </div>
           
             <div className="dropdown">
                <button className="btn header-footer " type="button" data-toggle="dropdown" >&#9776;</button>
                  <ul className="dropdown-menu " >
                  <ButtonNav content={"Chế độ xem"} />
                  <ButtonNav content={"Tìm kiếm"} />     
                  <ButtonNav content={"Trạng thái tài khoản"}/>                            
                  <ButtonNav content={"Kho lưu trữ"}/>  
                  <ButtonNav content={"Kho lưu trữ tin"}/> 
                  <ButtonNav content={"Nhật kí hoạt động"}/>  
                  <ButtonNav content={"Cài đặt trang cá nhân và gắn thẻ"}/>                                                    
                </ul>
            </div>                         
         </div>    
       </div>
    </header>
          
  )
}

export default AppHeader
