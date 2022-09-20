import { useEffect, useState } from "react";
import Icon from "./Icon";
const items = [
    "./src/img/Banner-Coolmate-Active-opt-1.jpeg",
    "./src/img/Banner-CXp-2.jpeg",
    "./src/img/desktop_Banner-combo-tiet-kiem.jpg",
    "./src/img/Excool-Banner-website.jpg"
]
export default function Carousels() {
    const [active, setActive] = useState(0);
    // const setTime = setInterval(function(){
    //     next();
    // },2000)
    // clearInterval(setTime);
    const next = () => {
        const nextIndex = active === items.length - 1 ? 0 : active + 1;
        setActive(nextIndex);
    }
    const prev = () => {
        const prevIndex = active === 0 ? items.length - 1 : active - 1;
        setActive(prevIndex);
    }
    return (
        <div className="block_carousel">
            <div className="box_carousel">
                <button className="button_carousel-left" onClick={next}><Icon className="fa-solid fa-circle-arrow-left" /></button>
                <img className="Carousel_img" src={items[active]} alt="" />
                <button className="button_carousel-right" onClick={prev}><Icon className="fa-solid fa-circle-arrow-right" /></button>
            </div>
            <div className="block_button_seeMore">
                <a href="#" className="button_seeMore">Miễn phí vẫn chuyển cho <br></br>đơn hàng trên 200k</a>
                <a href="#" className="button_seeMore">60 ngày đổi trả vì <br></br>bất kì lý do gì</a>
                <a href="#" className="button_seeMore">Đến tận nơi nhận hàng trả <br></br>hoàn tiền trong 24h</a>
            </div>
        </div>
    )
}