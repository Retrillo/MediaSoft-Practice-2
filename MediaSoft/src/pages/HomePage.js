import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Filter from '../components/Filters';
import { addItem } from '../redux/cartSlice';
import { addProductToComparison } from '../redux/comparisonSlice';

const getImagePath = (fileName) => require(`../assets/img/${fileName}`);
  const products = [
  {
    id: 1,
    name: 'PC 1',
    type: 'pc',
    processor: 'Intel',
    graphicsCard: 'NVIDIA GTX 1660',
    ram: '8GB',
    price: 55000,
    image: getImagePath('1.jpg'),
    rating: 4,
    description: 'Игровой ПК с процессором Intel и видеокартой GTX 1660.',
    reviews: [
      { user: 'Андрей', comment: 'Отличный ПК за свои деньги!' },
      { user: 'Мария', comment: 'Работает стабильно, рекомендую!' }
    ]
  },

  {
    id: 2,
    name: 'Laptop 1',
    type: 'laptop',
    processor: 'AMD',
    graphicsCard: 'AMD Radeon RX 5700',
    ram: '16GB',
    price: 75000,
    image: getImagePath('lp1.jpg'),
    rating: 5,
    description: 'Мощный ноутбук с процессором AMD и видеокартой Radeon RX 5700. Отлично подходит для игр и работы с графикой.',
    reviews: [
      { user: 'Игорь', comment: 'Отличный экран и мощное железо' },
      { user: 'Светлана', comment: 'Тянет все современные игры' }
    ]
  },

  {
    id: 3,
    name: 'Smartphone 1',
    type: 'smartphone',
    processor: 'Qualcomm',
    graphicsCard: 'Adreno 660',
    ram: '6GB',
    price: 35000,
    image: getImagePath('sm1.jpg'),
    rating: 3,
    description: 'Современный смартфон с мощным процессором Qualcomm и графикой Adreno 660. Поддерживает все современные игры и приложения.',
    reviews: [
      { user: 'Алексей', comment: 'Батареи хватает на весь день' },
      { user: 'Марина', comment: 'Камера делает отличные фото' }
    ]
  },
  {
    id: 4,
    name: 'PC 2',
    type: 'pc',
    processor: 'Intel',
    graphicsCard: 'NVIDIA RTX 2060',
    ram: '16GB',
    price: 85000,
    image: getImagePath('2.jpg'),
    rating: 4,
    description: 'Игровой ПК с RTX 2060 и 16GB оперативной памяти. Готов к запуску современных игр на высоких настройках.',
    reviews: [
      { user: 'Андрей', comment: 'Отличный ПК за свои деньги!' },
      { user: 'Мария', comment: 'Работает стабильно, рекомендую!' }
    ]
  },
  {
    id: 5,
    name: 'Laptop 2',
    type: 'laptop',
    processor: 'Intel',
    graphicsCard: 'Intel Iris Xe',
    ram: '8GB',
    price: 60000,
    image: getImagePath('lp2.jpg'),
    rating: 4,
    description: 'Компактный ноутбук с мощной графикой Intel Iris Xe. Подходит для офисной работы и мультимедиа.',
    reviews: [
      { user: 'Игорь', comment: 'Отличный экран и мощное железо' },
      { user: 'Светлана', comment: 'Тянет все современные игры' }
    ]
  },
  {
    id: 6,
    name: 'Smartphone 2',
    type: 'smartphone',
    processor: 'MediaTek',
    graphicsCard: 'Mali-G77',
    ram: '8GB',
    price: 40000,
    image: getImagePath('sm2.jpg'),
    rating: 5,
    description: 'Смартфон с чипсетом MediaTek и графикой Mali-G77. Отличное сочетание мощности и энергосбережения.',
    reviews: [
      { user: 'Алексей', comment: 'Батареи хватает на весь день' },
      { user: 'Марина', comment: 'Камера делает отличные фото' }
    ]
  },
  {
    id: 7,
    name: 'PC 3',
    type: 'pc',
    processor: 'AMD',
    graphicsCard: 'NVIDIA GTX 1650',
    ram: '8GB',
    price: 55000,
    image: getImagePath('3.jpg'),
    rating: 3,
    description: 'Бюджетный игровой ПК с процессором AMD и видеокартой GTX 1650. Хороший выбор для начинающих геймеров.',
    reviews: [
      { user: 'Андрей', comment: 'Отличный ПК за свои деньги!' },
      { user: 'Мария', comment: 'Работает стабильно, рекомендую!' }
    ]
  },
  {
    id: 8,
    name: 'Laptop 3',
    type: 'laptop',
    processor: 'Intel',
    graphicsCard: 'NVIDIA RTX 3080',
    ram: '32GB',
    price: 150000,
    image: getImagePath('lp3.jpg'),
    rating: 5,
    description: 'Флагманский игровой ноутбук с RTX 3080 и 32GB RAM. Безупречная мощность для самых требовательных пользователей.',
    reviews: [
      { user: 'Игорь', comment: 'Отличный экран и мощное железо' },
      { user: 'Светлана', comment: 'Тянет все современные игры' }
    ]
  },
  {
    id: 9,
    name: 'Smartphone 3',
    type: 'smartphone',
    processor: 'Snapdragon',
    graphicsCard: 'Adreno 650',
    ram: '12GB',
    price: 45000,
    image: getImagePath('sm3.jpg'),
    rating: 4,
    description: 'Флагманский смартфон с Snapdragon и Adreno 650. Поддержка 5G, отличная камера и мощная батарея.',
    reviews: [
      { user: 'Алексей', comment: 'Батареи хватает на весь день' },
      { user: 'Марина', comment: 'Камера делает отличные фото' }
    ]
  },
  {
    id: 10,
    name: 'PC 4',
    type: 'pc',
    processor: 'Intel',
    graphicsCard: 'NVIDIA GTX 1050',
    ram: '4GB',
    price: 30000,
    image: getImagePath('4.jpg'),
    rating: 2,
    description: 'Начальный уровень ПК для работы и учебы. Оснащен видеокартой GTX 1050 и процессором Intel.',
    reviews: [
      { user: 'Андрей', comment: 'Отличный ПК за свои деньги!' },
      { user: 'Мария', comment: 'Работает стабильно, рекомендую!' }
    ]
  },
  {
    id: 11,
    name: 'Laptop 4',
    type: 'laptop',
    processor: 'AMD',
    graphicsCard: 'AMD Radeon RX 5500M',
    ram: '16GB',
    price: 70000,
    image: getImagePath('lp4.jpg'),
    rating: 4,
    description: 'Игровой ноутбук с мощной видеокартой Radeon RX 5500M. Отличное решение для геймеров.',
    reviews: [
      { user: 'Игорь', comment: 'Отличный экран и мощное железо' },
      { user: 'Светлана', comment: 'Тянет все современные игры' }
    ]
  },
  {
    id: 12,
    name: 'Smartphone 4',
    type: 'smartphone',
    processor: 'Exynos',
    graphicsCard: 'Mali-G78',
    ram: '6GB',
    price: 38000,
    image: getImagePath('sm4.jpg'),
    rating: 3,
    description: 'Смартфон с чипом Exynos и графикой Mali-G78. Хороший выбор для мультимедиа и работы.',
    reviews: [
      { user: 'Алексей', comment: 'Батареи хватает на весь день' },
      { user: 'Марина', comment: 'Камера делает отличные фото' }
    ]
  },
  {
    id: 13,
    name: 'PC 5',
    type: 'pc',
    processor: 'Intel',
    graphicsCard: 'NVIDIA GTX 1660 Ti',
    ram: '16GB',
    price: 70000,
    image: getImagePath('5.jpg'),
    rating: 4,
    description: 'Геймерский ПК с видеокартой GTX 1660 Ti. Хороший баланс между ценой и производительностью.',
    reviews: [
      { user: 'Андрей', comment: 'Отличный ПК за свои деньги!' },
      { user: 'Мария', comment: 'Работает стабильно, рекомендую!' }
    ]
  },
  {
    id: 14,
    name: 'Laptop 5',
    type: 'laptop',
    processor: 'Intel',
    graphicsCard: 'NVIDIA GTX 1650',
    ram: '16GB',
    price: 80000,
    image: getImagePath('lp5.jpg'),
    rating: 5,
    description: 'Мощный ноутбук с GTX 1650 и 16GB RAM. Идеален для игр и работы с видео.',
    reviews: [
      { user: 'Игорь', comment: 'Отличный экран и мощное железо' },
      { user: 'Светлана', comment: 'Тянет все современные игры' }
    ]
  },
  {
    id: 15,
    name: 'Smartphone 5',
    type: 'smartphone',
    processor: 'Snapdragon',
    graphicsCard: 'Adreno 620',
    ram: '8GB',
    price: 42000,
    image: getImagePath('sm5.jpg'),
    rating: 3,
    description: 'Среднебюджетный смартфон с отличной камерой, Snapdragon и графикой Adreno 620.',
    reviews: [
      { user: 'Алексей', comment: 'Батареи хватает на весь день' },
      { user: 'Марина', comment: 'Камера делает отличные фото' }
    ]
  }

];


const HomePage = () => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (processor, ram, price, category) => {
    let filtered = products;
    if (category !== 'all') filtered = filtered.filter(p => p.type === category);
    if (processor !== 'all') filtered = filtered.filter(p => p.processor === processor);
    if (ram !== 'all') filtered = filtered.filter(p => p.ram === ram);
    if (price.length > 0) {
      filtered = filtered.filter(p => {
        if (price.includes('low') && p.price <= 50000) return true;
        if (price.includes('mid') && p.price > 50000 && p.price <= 80000) return true;
        if (price.includes('high') && p.price > 80000) return true;
        return false;
      });
    }
    setFilteredProducts(filtered);
  };

  const openModal = product => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);
  const renderRating = rating => '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <div className="home-page">
      <h2>Список товаров</h2>
      <Filter onFilterChange={handleFilterChange} />

      {isLoading ? (
        <div className="loading-placeholder">Загрузка...</div>
      ) : filteredProducts.length === 0 ? (
        <div className="empty-cart"><p>Нет товаров, соответствующих выбранным фильтрам"</p></div>
      ) : (
        <div className="product-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <h4>{product.name}</h4>
              <img src={product.image} alt={product.name} className="product-image" />
              <p>Процессор: {product.processor}</p>
              <p>Видеокарта: {product.graphicsCard}</p>
              <p>Оперативная память: {product.ram}</p>
              <p>Цена: {product.price}₽</p>
              <p>Рейтинг: {renderRating(product.rating)}</p>
              <button onClick={() => dispatch(addItem(product))}>Добавить в корзину</button>
              <button onClick={() => dispatch(addProductToComparison(product))}>Добавить в сравнение</button>
              <button onClick={() => openModal(product)}>Подробнее</button>
            </div>
          ))}
        </div>
      )}

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
            <p><strong>Процессор:</strong> {selectedProduct.processor}</p>
            <p><strong>Видеокарта:</strong> {selectedProduct.graphicsCard}</p>
            <p><strong>Оперативная память:</strong> {selectedProduct.ram}</p>
            <p><strong>Цена:</strong> {selectedProduct.price}₽</p>
            <p><strong>Рейтинг:</strong> {renderRating(selectedProduct.rating)}</p>
            <h3>Отзывы:</h3>
            <ul>
              {selectedProduct.reviews.map((review, index) => (
                <li key={index}><strong>{review.user}:</strong> {review.comment}</li>
              ))}
            </ul>
            <button onClick={() => dispatch(addItem(selectedProduct))}>Добавить в корзину</button>
            <button onClick={() => dispatch(addProductToComparison(selectedProduct))}>Добавить в сравнение</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default HomePage; 