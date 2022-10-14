import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Order from './Order'
import ProductDetails from './ProductDetails'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/ProductDetails' element={<ProductDetails />} />
        <Route path='/Order' element={<Order/>} />
      </Routes>
    </Router>
  </React.StrictMode>
)
