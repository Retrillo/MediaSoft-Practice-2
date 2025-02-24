import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, removeAllItems, incrementQuantity, decrementQuantity } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/cart.css';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
   
    dispatch(removeAllItems());
    navigate('/order');
  };

  return (
    <div className="cart-page">
      <h2>Корзина</h2>

      <div className="cart-items-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Корзина пуста</p>
          </div>
        ) : (
          <>
            <button onClick={() => dispatch(removeAllItems())} className="remove-all-btn">
              Удалить все товары
            </button>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
             
                  <img src={item.image} alt={item.name} className="cart-item-image" />

              
                  <div className="cart-item-content">
                    
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p>Процессор: {item.processor}</p>
                      <p>Видеокарта: {item.graphicsCard}</p>
                      <p>Оперативная память: {item.ram}</p>
                      <p>Цена: {item.price}₽</p>
                    </div>

                 
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button 
                          onClick={() => dispatch(decrementQuantity(item.id))} 
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                      </div>

                      <p>Сумма: {item.price * item.quantity}₽</p>
                      <button onClick={() => dispatch(removeItem(item.id))} className="remove-item-btn">
                        Удалить товар
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="total-amount">
              <h3>Итоговая сумма: {totalAmount}₽</h3>
            </div>

            <div className="checkout-btn-container">
              <button onClick={handleCheckout} className="checkout-btn">
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
