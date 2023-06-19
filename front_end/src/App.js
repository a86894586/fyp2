// App.js

import React, { useState } from 'react';
import Menu from './Menu';
import OrderForm from './OrderForm';

const App = () => {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const deleteOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };

  return (
    <div>
      <h1>Food Order App</h1>
      <Menu />
      <OrderForm addOrder={addOrder} />
      <h2>Orders:</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {order}
            <button onClick={() => deleteOrder(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
