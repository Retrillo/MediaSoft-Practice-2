import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const navigate = useNavigate();
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    setIsSubmitted(true); 

    
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="contact-page">
      <h2>Контакты</h2>
      
      <div className="contact-info">
        <h3>Наши данные</h3>
        <p>
          Мы рады приветствовать вас в нашем магазине! Если у вас есть вопросы, не стесняйтесь обращаться к нам.
        </p>
        
        <ul className="contact-list">
          <li>
            <strong>Адрес:</strong> г. Ульяновск, ул. Примерная, д. 1
          </li>
          <li>
            <strong>Телефон:</strong> +7 (123) 456-78-90
          </li>
          <li>
            <strong>Электронная почта:</strong> support@electronics-store.ru
          </li>
        </ul>
      </div>

      <div className="contact-form">
        <h3>Напишите нам</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ваше имя</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Введите ваше имя"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Электронная почта</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Введите ваш email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              name="message"
              placeholder="Напишите ваше сообщение"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button type="submit">Отправить</button>
        </form>

     
        {orderSuccess && (
          <div className="modal-content">
            <h3>Спасибо за Озыв!</h3>
            <p>Ваш отзыв успешно отправлен. Мы перенаправим вас на главную страницу через несколько секунд...</p>
            <p>Если вы не были перенаправлены автоматически, <a href="/">кликните здесь</a>.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
