import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { reviewContext } from '../../App';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [cart, setCart] = useContext(reviewContext)
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  const handleAddProduct = (product) => {
    // console.log('Product add', product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  
  return (
    <div className='twin-container'>
      <div className='product-container'>
        {products.map((product) => (
          <Product
            key={product.key}
            product={product}
            handleAddProduct={handleAddProduct}
          />
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart}>
        <Link  to="/review"><button className="main-button">Order Review </button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
