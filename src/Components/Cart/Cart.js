import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total,pd)=>total+pd.price,0)
    
    let shipping=0;
    if(total>35){
        shipping=1.22;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99
    }
    const newTotal=(total+shipping).toFixed(2);
    return (
        <div>
            <h2>This is cart</h2>
            <p>Items ordered: {cart.length}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Total: {newTotal}</p>
        </div>
    );
};

export default Cart;