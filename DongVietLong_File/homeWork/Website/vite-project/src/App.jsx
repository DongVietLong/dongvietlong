import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './menu'
import Icon from './Icon'
import Carousel from './Carousel'

var itemNavbar = ["Outlet", "Combo Tiết Kiệm", "Sản Phẩm", "Coolxprint", "Về Coolmate", "Chọn Size"]
function App() {
  const [count, setCount] = useState(0)

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
            <ul className='item_navbar'>
              {
                itemNavbar.map((value, index) => (
                  <Menu key={index} text={value} className="Component_Menu" />
                ))
              }
            </ul>
          </div>
          <div className="icon_navbar">
            <Icon className="fa-solid fa-magnifying-glass icon" />
            <Icon className="fa-solid fa-user icon" />
            <Icon className="fa-solid fa-weight-hanging icon" />
          </div>
        </div>
      </header>

      {/* container */}
      <Carousel />
    </div>
  )
}

export default App
