import React from 'react'
import { useSelector } from 'react-redux'
import '../assets/styles/cart.css'
import { Link } from 'react-router-dom'

import CartElement from '../components/CartElement'

const Cart = () => {

  const  { hoodies, totalPrice }  = useSelector(state => state.cartSlice)

  return (
    <div className="cart">
      {/* <div className="cart__empty">Корзина пуста</div> */}
      <div className="cart__elements"> 
        {
          hoodies.map((hoodie) => (
          <CartElement key={hoodie.title} {...hoodie} />
        ))
        }
      </div>
      <div className="cart__bottom">
        <Link to={"/catalog"} className="button">Каталог</Link>
        <div className="buyAll">
            <span className="totalPrice">Общая цена: { totalPrice }р</span>
            <button className="button">Оплатить всё</button>
        </div>
      </div>
  </div>
  )
}

export default Cart