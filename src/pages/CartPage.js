import React from 'react';
import { useCart } from '../pages/CartProvider';
import "./styles/CartPage.css";
import Footer from './home/Footer';

const CartPage = () => {
  const { cart } = useCart();
  const orderTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className='cart-container'>
        
          {cart.length === 0 ? (
            <p className='cart-empty'>Your cart is empty!</p>
          ) : (
            <>
            <div className='cart-content'>
              <ul className='cart-item'>
                {cart.map((item) => (
                  <li key={item.id} className='cart-list'>
                    <div>
                      <img src={item.image} alt={item.name} className="cart-image" />
                    </div>
                    <div>
                      <h4>{item.name}</h4>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className='cart-summary'>
                <h2>Order Summary</h2>
                <h3>Total Items: {cart.reduce((count, item) => count + item.quantity, 0)}</h3>
                <h3 className='total-price'>Total: ${orderTotal.toFixed(2)}</h3>
                <button className='check-out'>CHECK OUT</button>
            </div>
            </>
          )}
         {/* Closed 'cart-content' div */}
      </div> {/* Closed 'cart-container' div */}
      <Footer />
    </>
  );
};

export default CartPage;
