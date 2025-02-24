import React, { useState, useEffect, useCallback, useMemo } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useNavigate } from "react-router-dom";
import "../styles/orderForm.css";

const OrderPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    cardNumber: "",
    cardExpiryMonth: "",
    cardExpiryYear: "",
    cardCvc: "",
  });
  const [selectedAddress, setSelectedAddress] = useState("");
  const [coordinates, setCoordinates] = useState([55.751574, 37.573856]);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [ymaps, setYmaps] = useState(null);
  const [errors, setErrors] = useState({});
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);  

  useEffect(() => {
    if (step === 3) setIsMapVisible(true);
  }, [step]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const validateName = (name) => /^[a-zA-Zа-яА-Я]+$/.test(name);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const errorsObj = {};

      if (!validateName(formData.firstName)) {
        errorsObj.firstName = "Имя должно содержать только буквы";
      }
      if (!validateName(formData.lastName)) {
        errorsObj.lastName = "Фамилия должна содержать только буквы";
      }

      setErrors(errorsObj);

      if (Object.keys(errorsObj).length === 0) {
        if (step === 1) {
          setStep(2);
        } else if (step === 2) {
          setStep(3);
        } else if (step === 3) {
          setStep(4);
        } else if (step === 4) {
          setOrderSuccess(true);
          setShowModal(true);  

          setTimeout(() => {
            navigate("/");  
          }, 2000);
        }
      }
    },
    [formData, step, navigate]
  );

  const handleMapClick = useCallback(
    (e) => {
      const coords = e.get("coords");
      setCoordinates(coords);

      if (ymaps && typeof ymaps.geocode === "function") {
        ymaps.geocode(coords).then((res) => {
          const firstGeoObject = res.geoObjects.get(0);
          const address = firstGeoObject ? firstGeoObject.getAddressLine() : "Адрес не найден";
          setSelectedAddress(address);
        });
      }
    },
    [ymaps]
  );

  const mapContainerClass = useMemo(
    () => `map-container ${selectedAddress.length > 50 ? "expanded-map" : ""}`,
    [selectedAddress]
  );

  const formatCardNumber = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setFormData((prevData) => ({ ...prevData, cardNumber: formattedValue }));
  };

  return (
    <div className="order-page">
      <div className="order-content">
        <h2 className="page-title">Оформление заказа</h2>

        {step === 1 && (
          <div className="order-step">
            <h3>Шаг 1: Информация о покупателе</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">Имя</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Фамилия</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Почта</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Перейти ко второму шагу</button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="order-step">
            <h3>Шаг 2: Информация о банковской карте</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cardNumber">Номер карты</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={formatCardNumber}
                  placeholder="1234 5678 1707 2613"
                  required
                />
                {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="cardExpiryMonth">Месяц</label>
                <input
                  type="number"
                  id="cardExpiryMonth"
                  name="cardExpiryMonth"
                  value={formData.cardExpiryMonth}
                  onChange={handleInputChange}
                  placeholder="Месяц"
                  min="1"
                  max="12"
                  required
                />
                {errors.cardExpiryMonth && <span className="error">{errors.cardExpiryMonth}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="cardExpiryYear">Год</label>
                <input
                  type="number"
                  id="cardExpiryYear"
                  name="cardExpiryYear"
                  value={formData.cardExpiryYear}
                  onChange={handleInputChange}
                  placeholder="Год"
                  min={new Date().getFullYear()}
                  required
                />
                {errors.cardExpiryYear && <span className="error">{errors.cardExpiryYear}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="cardCvc">CVC</label>
                <input
                  type="text"
                  id="cardCvc"
                  name="cardCvc"
                  value={formData.cardCvc}
                  onChange={handleInputChange}
                  required
                  maxLength={3}
                />
                {errors.cardCvc && <span className="error">{errors.cardCvc}</span>}
              </div>
              <button type="submit">Перейти к третьему шагу</button>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="order-step">
            <h3>Шаг 3: Информация об адресе</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="address">Адрес</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={selectedAddress}
                  readOnly
                  required
                />
              </div>

              {isMapVisible && (
                <YMaps query={{ apikey: "f2536232-e72c-4597-b6aa-0db17389b57a", load: "package.full" }}>
                  <div className={mapContainerClass}>
                    <Map
                      defaultState={{ center: coordinates, zoom: 14 }}
                      width="100%"
                      height="100%"
                      onClick={handleMapClick}
                      onLoad={(ymapsInstance) => setYmaps(ymapsInstance)}
                    >
                      <Placemark geometry={coordinates} />
                    </Map>
                  </div>
                </YMaps>
              )}

              <button type="submit">Перейти к шагу 4</button>
            </form>
          </div>
        )}

        {step === 4 && !orderSuccess && (
          <div className="order-step">
            <h3>Подтвердите заказ</h3>
            <div className="order-summary">
              <p>Имя: {formData.firstName} {formData.lastName}</p>
              <p>Email: {formData.email}</p>
              <p>Телефон: {formData.phone}</p>
              <p>Адрес: {selectedAddress}</p>
              <p>Номер карты: {formData.cardNumber}</p>
              <button onClick={handleSubmit}>Подтвердить</button>
            </div>
          </div>
        )}

        {orderSuccess && (
          <div className="modal-content">
            <h3>Спасибо за заказ!</h3>
            <p>Ваш заказ успешно оформлен. Мы перенаправим вас на главную страницу через несколько секунд...</p>
            <p>Если вы не были перенаправлены автоматически, <a href="/">кликните здесь</a>.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
