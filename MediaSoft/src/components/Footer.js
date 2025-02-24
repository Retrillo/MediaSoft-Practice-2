import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-map">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4c5a319097b2c06e13fd6c7c746b9c5c7b47a0577108656019f53a48ed90a689&amp;source=constructor" frameBorder="0" title="Map"></iframe>
        </div>
        <div className="footer-info">
          <div className="footer-social">
            <h4>Социальные сети</h4>
            <a href="#" target="_blank">Instagram</a>
            <a href="#" target="_blank">Facebook</a>
            <a href="#" target="_blank">Twitter</a>
            <a href="#" target="_blank">Telegram</a>
            <a href="#" target="_blank">Vk</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Магазин Электроники. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
