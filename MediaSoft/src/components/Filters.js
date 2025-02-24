import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [processor, setProcessor] = useState('all');
  const [ram, setRam] = useState('all');
  const [price, setPrice] = useState([]);
  const [category, setCategory] = useState('all');

  const handleProcessorChange = (event) => {
    setProcessor(event.target.value);
    onFilterChange(event.target.value, ram, price, category);
  };

  const handleRamChange = (event) => {
    setRam(event.target.value);
    onFilterChange(processor, event.target.value, price, category);
  };

  const handlePriceChange = (event) => {
    const newPrice = [...price];
    if (newPrice.includes(event.target.value)) {
      newPrice.splice(newPrice.indexOf(event.target.value), 1);
    } else {
      newPrice.push(event.target.value);
    }
    setPrice(newPrice);
    onFilterChange(processor, ram, newPrice, category);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onFilterChange(processor, ram, price, event.target.value);
  };

  return (
    <div className="filter">
      <div>
        <label>Категория:</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">Все</option>
          <option value="pc">ПК</option>
          <option value="laptop">Ноутбук</option>
          <option value="smartphone">Смартфон</option>
        </select>
      </div>

      <div>
        <label>Процессор:</label>
        <select value={processor} onChange={handleProcessorChange}>
          <option value="all">Все</option>
          <option value="Intel">Intel</option>
          <option value="AMD">AMD</option>
          <option value="Snapdragon">Snapdragon</option>
          <option value="Exynos">Exynos</option>
          <option value="MediaTek">MediaTek</option>
          <option value="Qualcomm">Qualcomm</option>
        </select>
        
      </div>

      <div>
        <label>Оперативная память:</label>
        <select value={ram} onChange={handleRamChange}>
          <option value="all">Все</option>
          <option value="8GB">8GB</option>
          <option value="16GB">16GB</option>
          <option value="32GB">32GB</option>
        </select>
      </div>

      <div>
        <label>Цена:</label>
        <div>
          <label>
            <input type="checkbox" value="low" onChange={handlePriceChange} />
            До 50,000₽
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" value="mid" onChange={handlePriceChange} />
            50,000₽ - 80,000₽
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" value="high" onChange={handlePriceChange} />
            Больше 80,000₽
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
