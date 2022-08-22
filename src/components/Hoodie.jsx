import React from 'react'
import { setCartHoodies } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux/es/exports'

const Hoodie = (hoodie) => {
  const dispatch = useDispatch()
  return (
    <div className="product">
        <img className="product__img" src={hoodie.imageUrl} alt="" />
        <div className="product__price">{hoodie.price}р</div>
        <div className="product__title">{hoodie.title}</div>
        <div className="product_bottom">
            <button onClick={() => dispatch(setCartHoodies(hoodie))} className="purchase product_bottom__elem">В корзину</button>
            {/* <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-256.png" className="product_bottom__elem" alt="" /> */}
        </div> 
     </div>
  )
}

export default Hoodie