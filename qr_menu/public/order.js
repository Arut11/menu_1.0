/*import React from 'react';
const __next = document.getElementById('__next');
const roolElement = createRoot(__next);
roolElement.render(
  <React.StrictMode>
    <Order />
  </React.StrictMode>
);*/

document.addEventListener('DOMContentLoaded', function() {
  const savedTotalPrice = localStorage.getItem('totalPrice');
  const costElement = document.querySelector('.order_total__2BUYE');
  costElement.innerHTML = `Итого ${savedTotalPrice} руб.`;
});