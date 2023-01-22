import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const CartBtn = () => {
    const state =useSelector((state)=>state.handleCart);
  return (
    <div>
        <NavLink to='/cart' className='btn btn-outline-primary ms-2'>
            <span className='fa fa-shopping-cart me-1'></span> Cart({Object.values(state).reduce((p,c)=> p+c,0)})
        </NavLink>
    </div>
  )
}

export default CartBtn