import React from 'react';
import Enrolled from '../Enrolled/Enrolled'
import './Cart.css'
const Cart = (props) => {
    const data = props.data;
    //console.log("cart", typeof(data))
    let sum=0;
    data.map(each=>{
        sum+=each.price
    });
    return (
        <div className="cart">
            {/* summary view */}
            <div className="cart-top">
                <h4>Shopping Cart</h4>
                <span>{data.length} Courses In Cart</span>
                <h5>Total: ${sum}</h5>
            </div>
            {/* enrolled item list short view */}
            <div className="cart-list">
                <Enrolled data={data}> </Enrolled>
            </div>
            
        </div>
    );
};

export default Cart;