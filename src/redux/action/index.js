//for Adding Item to cart 


export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

//for Deleting Item from cart

export const delCart=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}