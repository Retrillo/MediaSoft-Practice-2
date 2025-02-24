import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ComparisonPage from './pages/ComparisonPage';
import OrderPage from './pages/OrderPage';
import ContactsPage from './pages/ContactsPage'; 
import AboutPage from './pages/AboutPage'; 
import CatalogPage from './pages/CatalogPage';  
import Header from './components/Header';
import Footer from './components/Footer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/contact" element={<ContactsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
