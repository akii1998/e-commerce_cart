import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delCart } from '../../redux/action'
  
const Cart = () => {

   const state =useSelector((state)=>state.handleCart)
   const dispatch =useDispatch();
   
   const handleClose=(item)=>{
   dispatch(delCart(item))
   }

   const cartItem=(cartItem)=>{
     return(
      <>
      <div className="px-4 my-5 bh-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button  onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label='Close'>

          </button>
          <div className="row justify-content-center">
          <div className='col-md-4'>
            <img src={cartItem.image} alt={cartItem.title} height="200px" width={"180px"} />
          </div>
          <div className="col-md-4">
          <h3>{cartItem.title}</h3>
            <p className='lead fw-bold'> Rs {Math.floor(cartItem.price * 82)}</p>
          </div>
           
          </div>
        </div>
      </div>

      </>
      
     )
   }
   const emptyCart=()=>{
    return(
      <div className="px-4 my-5 bh-light rounded-3" >
        <div className="container py-4">
          <div className="row">
          <h3>Your Cart is Empty</h3> </div>
        </div>
        </div>
    )
   }
  return (
    <>
      {Object.values(state).reduce((p,c)=>p+c,0)?.length ===0 && emptyCart()}   
       {(Object.values(state).reduce((p,c)=>p+c,0))?.length!==0 && Object.values(state)?.map(cartItem)}  
     </>
  )
}

export default Cart