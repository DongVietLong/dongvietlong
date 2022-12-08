import { useSelector } from 'react-redux'
import { removeItem } from './Redux/cartSlice'
import { useDispatch } from 'react-redux'
import Header from './Header';
import Footer from './Footer';
import Text from './Text';
import { useEffect, useState,useRef } from 'react';

export default function Cart() {
    const [isActive,setActive] = useState();
    const [pay, SetPay] = useState([]);
    const [check,setCheck] = useState();
    useEffect(() => {
        fetch('http://localhost:3000/Pay')
            .then(data => {
                return data.json()
            })
            .then(dataPay => {
                SetPay(dataPay);
            })
    }, [])
    const handleDisCount = (id)=>{
        setActive(id);
        setCheck(id);
    }

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach(item => {
            totalQuantity += item.quanlityProduct
            totalPrice += item.price * item.quanlityProduct
        })
        return { totalPrice, totalQuantity }
    };
    return (
        // src/pages/Cart.js
        <div className="BlockCart">
            <Header />
            <div className="Cart">
                <div className="Cart_left">
                    <div className="BlockCart_left">
                        <Text type="Order_Product">Thông tin vận chuyển</Text>
                        <div className="Insert_information">
                            <div className="nameOrphone">
                                <input type="text" name='Họ tên' placeholder='Họ tên' className='input_Name' />
                                <input type="text" name='Số điện thoại' placeholder='Số điện thoại' className='input_Name' />
                            </div>
                            <div className="Email">
                                <input type="text" name='Email' placeholder='Email' className='input_Email' />
                            </div>
                            <div className="address">
                                <input type="text" name='address' placeholder='address' className='input_address' />
                            </div>
                            <div className="addressDetail">
                                <select className="select_option">
                                    <option value="" className="item_option">Hải Dương</option>
                                    <option value="" className="item_option">Hải Phòng</option>
                                    <option value="" className="item_option">Nam Định</option>
                                    <option value="" className="item_option">Hà Nội</option>
                                    <option value="" className="item_option">Quảng Ninh</option>
                                </select>
                                <select className="select_option">
                                    <option value="" className="item_option">Tứ Kỳ</option>
                                    <option value="" className="item_option">Thanh Miện</option>
                                    <option value="" className="item_option">Thanh Hà</option>
                                    <option value="" className="item_option">Hà Thanh</option>
                                    <option value="" className="item_option">Ninh Giang</option>
                                </select>
                                <select className="select_option">
                                    <option value="" className="item_option">Quý Cao</option>
                                    <option value="" className="item_option">An tân</option>
                                    <option value="" className="item_option">An Quý</option>
                                    <option value="" className="item_option">An thổ</option>
                                    <option value="" className="item_option">Văn vật</option>
                                </select>
                            </div>
                            <div className="note">
                                <input type="text" name='note' placeholder='Ghi chú' className='input_note' />
                            </div>
                        </div>
                        <Text type="Order_Product">Hình thức thanh toán</Text>
                        <div className="block_Pay">
                            {
                                pay?.map((data) => {
                                    return (
                                        <div key={data.id} className={isActive == data.id ? "activeDisCount payment_item" : " payment_item"} onClick={() => handleDisCount(data.id)} >
                                            <span className="payment-method_checkbox">
                                                <input checked={check == data.id ? true : false} type="radio" className="payment-vnpay" name='payment-vnpay' />
                                            </span>
                                            <span className='payment-method_img'>
                                                <img src={data.imgPay} alt="" className="img-vnpay" />
                                            </span>
                                            <span className="payment-method_name">{data.name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="feedback">
                            <p className="Content_feedback">
                                Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả lại sản phẩm. Tìm hiểu thêm <b>Tại đây</b>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Cart_right">
                    <Text type="Order_Product">Giỏ hàng</Text>
                    <div>
                        {cart?.map((item) => {
                            return (
                                <div key={item.id} className="BlockCart_Detail">
                                    <div className='cartDetail'>
                                        <img src={item.img} className="img_cart" alt="" />
                                        <div className="Cart_item">
                                            <Text type='nameProduct_cart'>{item.title}</Text>
                                            <Text type='priceProduct_cart'> Giá: {item.price}đ</Text>
                                            <p className="color_Product">Màu Sắc: Xanh bạc hà</p>
                                            <p className="color_Product">Size: M</p>
                                            <Text>Số Lượng: {item.quanlityProduct}</Text>
                                        </div>
                                        <i className="fa-solid fa-xmark icon_close" onClick={() => dispatch(removeItem(item.id))} />
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                    <div className="transport">
                        <p className="cost">Tạm tính: {getTotal().totalPrice} </p>
                        <p className="discount">Giảm giá: 0đ</p>
                        <p className="cost_transport">Phí giao hàng: Miễn phí</p>
                    </div>
                    <div className="total_Product">
                        <p className="text_total">Tổng</p>
                        <div className="total_money">
                            <p className="money">{getTotal().totalPrice}đ</p>
                            <p className="content_discount">đã giảm 10% trên giá gốc</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}