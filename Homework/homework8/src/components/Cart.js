import React from "react";

const Cart = ({cart, removeFromCart}) => {
    return (
        <>
            <h2 className="carttitle">Your Shopping Cart</h2>
            <section className="cartcontainer">
                {cart.length === 0 && <p className='emptymsg'>Cart is empty</p>}
                {
                    cart.map(
                        (item) => (
                            <div key={item.id} className="itemcart">
                                <img className='itemcartimg' src={item.image} alt={item.name}/>
                                <p className='cartitemname'>{item.name}</p>
                                <p className='cartitemprice'>${item.price}</p>
                                <p className='cartitemquantity'>Qty: {item.qty}</p>
                                <p className='cartitemtotal'>${(item.price * item.qty).toFixed(2)}</p>
                                <button className='btncartremove' onClick={()=>removeFromCart(item.id)}> x Remove</button>
                            </div>
                        )
                    )
                }
                {cart.length > 0 && (
                    <p className='totalcart'>Total: $
                        {cart.reduce((total, item)=>total + item.price*item.qty, 0).toFixed(2)}
                    </p>
                )}
            </section>
        </>
    )
}

export default Cart;
