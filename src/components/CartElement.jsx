import React from 'react'
import { incrementCount, decrementCount } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

const CartElement = (hoodie) => {
  const [count, setCount] = React.useState(1)
  const sizes = ["S", "M", "L", "XL", "XXL"]
  const dispatch = useDispatch()
  const [activeSize, setActiveSize] = React.useState(0)

  return (
    <div className="cart__element">
        <div className="cart__element_left">
            <img className="cart__element__img" src={hoodie.imageUrl} alt="" />
            <div className="cart__element__info">
                <div className="cart__element__title">{hoodie.title}</div>
                <div className="cart__element__price">{hoodie.price}</div>
                <ul className="cart__element__sizes">
                    {
                      sizes.map((size, i) => (
                        <li 
                          key={size}
                          onClick={() => {setActiveSize(i)}}
                          className={activeSize === i? "activeSize": ""}>{size}
                        </li>
                      ))
                    }
                </ul>
            </div>
        </div>
        <div className="cart__element_right">
            <button className="button">Купить</button>
            <div className="cart__element__count">
                <button onClick={() => {
                  setCount(count - 1)
                  dispatch(decrementCount([hoodie, count]))}} className="setCount">-</button>
                <span>{count}</span>
                <button onClick={() => {
                  setCount(count + 1)
                  dispatch(incrementCount([{...hoodie}, count]))}
                  } className="setCount">+</button>
            </div>    
        </div>
    </div>
  )
}

export default CartElement