import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, key} = props.item;
    const removeProduct = props.removeProduct;
    console.log();
    return (
        <div className="item">
            
            <p>Review Items: {name} </p>
            <p>Quantity: {}</p>
            <button onClick={() => removeProduct(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;