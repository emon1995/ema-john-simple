import React, { useContext, useState } from 'react';
import happyImage from "../.././images/giphy.gif";
import { reviewContext } from '../../App';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Review.css";


const Review = (props) => {
    const [handleAddProduct, cart, setCart] = useContext(reviewContext);

    const [orderPlaced, setOrderPlaced] = useState(false)

    const handlePlaceOrder = () =>{
        console.log("order Placed");
        setCart([])
        setOrderPlaced(true)
    }

    const removeProduct = (productKey) => {
        console.log("remove product", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
    }

    const thankYou = <img src={happyImage} style={{width: "100%"}} alt="happy" />
    
    // console.log();
    return (
        <div className="reviewItem">
            <div className="product-container">
            <div className="cartItems">
                <h2>Cart Items: {cart.length}</h2>
            </div>
            <div className="product-name">
            {
                cart.map((item, index) => <ReviewItem key={index} item={item} removeProduct={removeProduct } />)
            }
            {
                orderPlaced && thankYou
            }
            </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    <button onClick={handlePlaceOrder} className="main-button"> Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;