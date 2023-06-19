// OrderForm.js

import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = ({ addOrder }) => {
  const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      foodItem,
      quantity,
    };

    // 發送 POST 請求到後端 API
    axios.post('/api/orders', order)
      .then((response) => {
        console.log(response.data); // 可以處理回傳的訊息或其他操作
        addOrder(order); // 將訂單新增到前端的狀態
        setFoodItem(''); // 清空表單欄位
        setQuantity(1);
      })
      .catch((error) => {
        console.error(error); // 處理錯誤
      });
  };

  return (
    <div>
      <h2>Order Form:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Food Item:
          <input
            type="text"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>
        <button type="submit">Add to Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
