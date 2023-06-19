// Menu.js
import React from 'react';

const Menu = () => {
  const menuItems = ['Pizza', 'Burger', 'Sushi'];

  return (
    <div>
      <h2>Menu:</h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
