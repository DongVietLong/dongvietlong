import Header from "./Header"
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer"
import Text from "./Text"
import Icon from "./Icon";
export default function Order() {
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/Combo")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setOrder(data);
            })
    }, [])
    const sett = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={order[i].img1} className="img_slick" />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="Order">

            <Header />
            <Text type="Order_Product">Trang Chủ</Text>
            <div className="block_Order">
                <Slider {...sett} className="block_previewImg">
                    {
                        order.map((value) => {
                            return (
                                <img key={value.id} src={value.img1} className="Order_img" />
                            )
                        })
                    }
                </Slider>
                <div className="describle_Order">
                    {
                        order.filter((x) => x.id === 1).map((value) => {
                            return (
                                <div key={value.id} className="detail_Order">
                                    <Text>{value.title}</Text>
                                    <div className="evaluate_Order">
                                        <Icon className="fa-solid fa-star icon_product" />
                                        <Icon className="fa-solid fa-star icon_product" />
                                        <Icon className="fa-solid fa-star icon_product" />
                                        <Icon className="fa-solid fa-star icon_product" />
                                        <Icon className="fa-solid fa-star icon_product" />
                                        {
                                            value.evaluate
                                        }
                                        <p className="quanlity">Đã bán ({value.quanlity})</p>
                                    </div>
                                    <div className="price_Order">
                                        <p className="new_price">{value.price}</p>
                                        <p className="old_price">{value.oldPrice}</p>
                                        <p className="discount_price">{value.discount}</p>
                                    </div>
                                    <Text>Ưu đãi giá trải nghiệm đến 17/10</Text>
                                    <p className="color">Màu sắc: Đen</p>
                                    <p className="size_order">Kích thước: M</p>
                                    <div className="size_productOrder">
                                                {
                                                    value.size.map((sizes, index) => {
                                                        return (
                                                            <button key={index} className='size_orderButton'>
                                                                {sizes}
                                                            </button>
                                                        )
                                                    })
                                                }
                                            </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>





            <Footer />
        </div>
    )
}