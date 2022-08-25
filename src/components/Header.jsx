import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/header.css'

const Header = () => {
  return (
    <header className="header">
        <div className="header__content">
            <Link to={"/"} className="logo">Hoodies</Link>
                {/* <input className="search" type="text" placeholder="Поиск" /> */}
                <div className="header_right">
                <Link to={"cart"} className="cart__link">
                    <img className="header__cart" src="https://cdn3.iconfinder.com/data/icons/glypho-shopping-and-ecommerce/64/cart-outline-256.png" alt='' /> 
                </Link>
                <a className="header_right__link" href="/">
                    <img className="login" src="https://cdn2.iconfinder.com/data/icons/app-user-interface-6/48/User-256.png" alt="" />
                </a>                    
            </div>    
        </div>
        
    </header> 
  )
}

export default Header