
import { data } from './index';
//Функция для текста пустой корзины
                 const emptyCart = document.querySelector('.emptyCart');
                 function updateEmptyCart() {
                   let out = ''; 
                 
                   if (data && Object.keys(data).length === 0) {
                     out = `<p class="empty-cart_message__3TH4i">Ваша корзина пуста</p>`;
                   }else {
                     out = '';
                   }
                   emptyCart.innerHTML = out;
                 }

export { updateEmptyCart };