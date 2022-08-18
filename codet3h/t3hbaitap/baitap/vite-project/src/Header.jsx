export default function Header() {
    return (
        <div className="div">
            <div className="header_menu">

                <div className="navbar_search">
                    <img src="./src/img/md_5aeedeff67ded.jpg" alt="" className="avt_listfriend" />
                    <div className="block_search">
                        <i className="fa-solid fa-magnifying-glass icon_search"></i>
                        <input type="text" className="input_search" placeholder="Tìm kiếm trên facebook" />
                    </div>
                </div>
                <div className="list_icon">
                    <i className="fa-solid fa-house-chimney icon_navbar_center"></i>
                    <i className="fa-solid fa-font-awesome icon_navbar_center"></i>
                    <i className="fa-brands fa-youtube icon_navbar_center"></i>
                    <i className="fa-solid fa-store icon_navbar_center"></i>

                </div>
                <div className="list_icon">
                    <div className="icon_menu_display">
                        <i className="fa-solid fa-bars icon_navbar_right"></i>
                    </div>
                    <i className="fa-solid fa-plus icon_navbar_right"></i>
                    <i className="fa-brands fa-facebook-messenger icon_navbar_right"></i>
                    <i className="fa-solid fa-bell icon_navbar_right"></i>
                    <img src="./src/img/284481578_1314771525719894_3714395749483230868_n.jpg" alt="" className="avt_menu" />
                </div>

            </div>
            
        </div>
    )
}