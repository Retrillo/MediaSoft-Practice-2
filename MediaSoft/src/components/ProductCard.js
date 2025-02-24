import React from 'react';
import { useDispatch } from 'react-redux';
import { addToComparison } from '../redux/comparisonSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToComparison = () => {
    dispatch(addToComparison(product));
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Процессор: {product.processor}</p>
      <p>Графика: {product.graphicsCard}</p>
      <p>Цена: {product.price} USD</p>
      <button onClick={handleAddToComparison}>Добавить в сравнение</button>
    </div>
  );
};

export default ProductCard;
