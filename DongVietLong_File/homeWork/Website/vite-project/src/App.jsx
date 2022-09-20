import { useState, useEffect } from 'react'
import './App.css'
import Menu from './menu'
import Icon from './Icon'
import Carousels from './Carousel'
import Text from './Text'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const tabs = [
  {
    name: "Combo Tiết Kiệm",
    type: 'Combo',
    istag: true,
    tag: "HOT"
  },
  {
    name: "Quần lót nam",
    type: 'trousers',
    istag: false,
    tag: "HOT"
  },
  {
    name: "Đồ thể thao",
    type: 'sport',
    istag: false,
    tag: "HOT"
  }
]
var index = 0;
function App() {
  const [menu, setMenu] = useState([])
  const [type, setType] = useState('combo')
  const [post, setPost] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/menu')
      .then(res => res.json())
      .then(data => {
        setMenu(data);
      })
    fetch(`http://localhost:3000/${type}`)
      .then(response => response.json())
      .then(posts => {
        setPost(posts)
      })
  }, [type])

  return (
    <div className="App">
      <header className='header'>
        <div className="discout_header">
          <a className="text_discout_header">Ưu đãi 44% Combo tiết kiệm</a>
        </div>
        <div className="navbar">
          <div className='logo_navar'>
            <a href="/">
              <img src="./src/img/Untitled.png" alt="lỗi hiển thị" className='img_logo' />
            </a>
          </div>
          <div className="menu_navbar">
            {
              menu.map((value, index) => {
                return (
                  <Menu key={index} text={value.title} type={value.type} />
                )
              })
            }
            <div className="block_item">
              <ul className="item_navbar">
                {menu.filter(item => item.title === "Sản Phẩm").map((value) => {
                  const Childlren = value.children.map((a) => {
                    return <Text type={a.type}>{a.name}</Text>
                  }
                  )
                  return <>{Childlren}</>
                })}
              </ul>
              <ul className='item_navbar_menu'>
                <li className='text_menu'>
                  {
                    menu.filter(item => item.title === "Sản Phẩm").map((value) => {
                      return value.children.filter(item => item.name === "Nhu cầu").map(a => {
                        return a.item.map(b => (
                          <Text type={b.type} isTag={b.istag} tag={b.tag}>{b.name}</Text>
                        ))
                      })
                    })
                  }
                </li>
                <li className='text_menu2'>
                  {
                    menu.filter(item => item.title === "Sản Phẩm").map((value) => {
                      return value.children.filter(item => item.name === "Danh mục").map(a => {
                        return a.item.map(b => (
                          <Text type={b.type} isTag={b.istag} tag={b.tag}>{b.name}</Text>
                        ))
                      })
                    })
                  }
                </li>
                <li className='text_menu'>
                  {
                    menu.filter(item => item.title === "Sản Phẩm").map((value) => {
                      return value.children.filter(item => item.name === "Bộ Sưu Tập").map(a => {
                        return a.item.map(b => (
                          <Text type={b.type} isTag={b.istag} tag={b.tag}>{b.name}</Text>
                        ))
                      })
                    })
                  }
                </li>
                <li className='text_menu'>
                  {
                    menu.filter(item => item.title === "Sản Phẩm").map((value) => {
                      return value.children.filter(item => item.name === "Công nghệ").map(a => {
                        return a.item.map(b => (
                          <Text type={b.type} isTag={b.istag} tag={b.tag}>{b.name}
                            <img className="img_menu" src={b.img} />
                          </Text>
                        ))
                      })
                    })
                  }
                </li>
              </ul>
            </div>
          </div>
          <div className="icon_navbar">
            <Icon className="fa-solid fa-magnifying-glass icon" />
            <Icon className="fa-solid fa-user icon" />
            <Icon className="fa-solid fa-weight-hanging icon" />
          </div>
        </div>
      </header>

      {/* container */}
      <Carousels />
      <Text type={"title_container"}>Mặc Ngay, Yêu Luôn</Text>
      <div className='container_option'>
        <div className="menu_option">
          {tabs.map(tab => (
            <button className='option' onClick={() => setType(tab.type)}>{tab.name}
              <Text isTag={tab.istag} tag={tab.tag} />
            </button>
          ))}
        </div>
        <div className='product'>
          {
            post.map((value) => {
              return (
                <div className='item_product'>
                  <div className="block_product">
                    <img src={value.img1} alt="lỗi hiển thị" className='img_product img1' />
                    <img src={value.img2} alt="lỗi hiển thị" className='img_product img2' />
                    <div className="position_product">
                      <div className="evaluate">
                        {
                          value.evaluate
                        }
                        <Icon className="fa-solid fa-star icon_product" />
                        <p className="quanlity">({value.quanlity})</p>
                      </div>
                      <div className="packs">
                        <p className={value.type}>{value.packs}</p>
                      </div>
                      <div className="describe">
                        <p className="text_describe">{value.describe}</p>
                      </div>
                      <div className="size_product">
                        {
                          value.size.map((sizes) => {
                            return (
                              <button className='size'>
                                {sizes}
                              </button>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                  <div className="name_product">
                    <a href='#' className="name">{value.title}</a>
                  </div>
                  <div className="price_product">
                    <p className="new_price">{value.price}</p>
                    <p className="old_price">{value.oldPrice}</p>
                    <p className="discount_price">{value.discount}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="container_demin">
        <div className="container">
          <div className="about_card">
            <div className="about-card_img">
              <img src="./src/img/img_aboutCard.jpg" alt="lỗi hiển thị" className='img_aboutCard' />
            </div>
            <div className="about-card_content">
              <h2 className="about-card_heading">
                Coolmate's <br /> CLEAN DENIM
              </h2>
              <div className="about-card_description">
                <p className="about-card_description_text">
                  Một chiếc quần Jeans đầu tiên tại Coolmate được sử dụng chất liệu
                  là Cotton Tái sinh (Regenerative Cotton) - loại Cotton chất lượng và
                  trồng bằng quy trình sạch, bền vững. Chiếc quần với vải Denim được
                  dệt toàn bộ tại nhà máy Nhơn Trạch, Đồng Nai của Saitex - nhà máy
                  với nhiều trang máy móc, thiết bị hiện đại với quy trình sản xuất khép
                  kín, giảm thiểu CO2 và nước thải ra môi trường.
                </p>
              </div>
              <div>
                <Button
                  active
                  color="info"
                  outline
                  size="sm"
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container_excool">
        <div className="container">
          <div className="about_excool">
            <div className="about-card_content container_excool_block">
              <h2 className="about-card_heading">
                Dòng sản phẩm công nghệ EXCOOL
              </h2>
              <div className="about-card_description">
                <p className="about-card_description_text">
                  <p>
                    Công nghệ Việt cho người Việt.<br />
                    Với hơn <b>100.000</b> sản phẩm đã được gửi đến tay khách hàng sử dụng và hài lòng
                  </p>
                </p>
              </div>
              <div>
                <Button
                  active
                  color="info"
                  outline
                  size="sm"
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
            <div className="about-card_img img_excool">
              <img src="./src/img/img_excool.jpg" alt="lỗi hiển thị" className='img_aboutCard' />
            </div>
          </div>
        </div>
      </div>

      <div className="container_medium">
        <div className="coolclub_about">
          <h2 className="coolclub-about_heading">
            Coolmate Basics
          </h2>
          <div className="coolclub-about_wrapper">

          </div>
          <p className="text__coolmate">
            Dòng sản phẩm mặc cơ bản chất lượng tốT và giá rẻ của Coolmate
          </p>
          <div>
            <Button
              active
              color="warning"
            >
              Click Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
