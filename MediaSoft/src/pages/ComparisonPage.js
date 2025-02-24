import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromComparison } from '../redux/comparisonSlice'; // Импортируем экшен
import '../styles/comparison.css';

const ComparisonPage = () => {
  const dispatch = useDispatch(); // Для диспатча экшенов
  const comparedProducts = useSelector(state => state.comparison.comparison); // Изменено на правильный путь состояния

  // Функция для удаления товара из сравнения
  const handleRemove = (product) => {
    dispatch(removeProductFromComparison(product)); // Диспатчим экшен для удаления
  };

  return (
    <div className="comparison-page">
        <div className="cart-page">
        <h2>Сравнение товаров</h2>
     
      {comparedProducts.length === 0 ? (
      <div className="empty-cart">
      <p>Нет товаров для сравнения</p>
    </div>
        
      ) : (
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Процессор</th>
              <th>Графика</th>
              <th>Оперативная память</th>
              <th>Цена</th>
              <th>Удалить</th> {/* Добавили столбец для кнопки "Удалить" */}
            </tr>
          </thead>
          <tbody>
            {comparedProducts.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.processor}</td>
                <td>{product.graphicsCard}</td>
                <td>{product.ram || 'Не указано'}</td> {/* Добавлена проверка для ram */}
                <td>{product.price} ₽</td>
                <td>
                  {/* Кнопка для удаления товара из сравнения */}
                  <button onClick={() => handleRemove(product)} className="remove-btn">Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default ComparisonPage;
