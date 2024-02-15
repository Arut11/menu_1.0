import './index.css';
import { cart, renderProducts } from './products.js';
import { updateEmptyCart } from './empty.js';

renderProducts();

//Всплывашка корзины, Открываю/Закрываю корзину
document.addEventListener('DOMContentLoaded', function() {
  var popupTrigger = document.querySelector('.popup-trigger_');
  var orderPopup = document.querySelector('#orderPopup');
  var closeButton = document.querySelector('.close');
  var closeButton_1 = document.querySelector('.close_1');
  var popupTrigger_1 = document.querySelector('.orders');

  popupTrigger.addEventListener('click', function() {
    orderPopup.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    orderPopup.style.display = 'none';
  });
  
  popupTrigger_1.addEventListener('click', function() {
    orderPopup.style.display = 'block';
  });

  closeButton_1.addEventListener('click', function() {
    orderPopup.style.display = 'none';
  });
});
//Конец всплывашки корзины


//  Поля "Имя" и "Номер стола" внутри всплывашки корзины
document.addEventListener('DOMContentLoaded', function() {
  var submitButton = document.querySelector('.place_order');
  var tooltipName = document.querySelector('.tooltip_name');
  var tooltipSelect = document.querySelector('.tooltip_select');
  var successMessage = document.querySelector('.popupNumber');

  submitButton.addEventListener('click', function() {
    var select = document.querySelector('.select');
    var name = document.querySelector('.button_name').value;

    if (name === "") {
      tooltipName.classList.add('visible');
    } else {
      tooltipName.classList.remove('visible');
    } 

    if (select.value === "Выберите номер стола") {
      tooltipSelect.classList.add('visible');
    } else {
      tooltipSelect.classList.remove('visible');
    }

    if (name !== "" && select.value !== "Выберите номер стола") {
      successMessage.style.display = "flex";
    }
  });
});                   //  Конец поля "Имя" и "Номер стола"


                      // Перезагружаю страницу при клике на "Ок" во всплывашке с номером заказа
document.addEventListener("DOMContentLoaded", function() {
  var closeButton = document.querySelector(".close_NumberButton");
  closeButton.addEventListener("click", function() {
    window.location.reload() // Перезагрузка страницы
  });
});



             //Обводка ссылочных кнопок навигационной панели
/*const links = document.querySelectorAll('.filter-by-category_item__2BptE');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => {
            link.classList.remove('filter-by-category_selectedItem__120_e');
        });
        link.classList.add('filter-by-category_selectedItem__120_e');
    });
});   */          //Обводка ссылочных кнопок навигационной панели




// Получаем все элементы навигационной панели
const navLinks = document.querySelectorAll('.filter-by-category_item__2BptE');

// Создаем функцию для обработки клика на элементе
const handleClick = (event) => {
  // Отменяем стандартное поведение ссылки, чтобы страница не перезагружалась
  event.preventDefault();

  // Удаляем класс 'filter-by-category_selectedItem__120_e' у всех элементов навигационной панели
  navLinks.forEach((link) => {
    link.classList.remove('filter-by-category_selectedItem__120_e');
  });

  // Добавляем класс 'filter-by-category_selectedItem__120_e' к текущему элементу
  event.target.classList.add('filter-by-category_selectedItem__120_e');

  // Получаем элемент, на который ссылается текущая кнопка
  const target = document.querySelector(event.target.getAttribute('href'));

  // Прокручиваем страницу к выбранному разделу
  target.scrollIntoView({ behavior: 'smooth' });
};

// Добавляем обработчик события клика на каждый элемент навигационной панели
navLinks.forEach((link) => {
  link.addEventListener('click', handleClick);
});

// Добавляем обработчик события скролла на объект window
window.addEventListener('scroll', () => {
  // Получаем вертикальную позицию прокрутки страницы
  const scrollPosition = window.PageTransitionEvent || document.documentElement.scrollTop;

  // Перебираем все элементы навигационной панели
  navLinks.forEach((link) => {
    // Получаем позицию раздела, на который ведет ссылка
    const target = document.querySelector(link.getAttribute('href'));
    const topOffset = target.offsetTop;
    const bottomOffset = topOffset + target.offsetHeight;

    // Проверяем, находится ли позиция прокрутки страницы внутри раздела
    if (scrollPosition >= topOffset && scrollPosition < bottomOffset) {
      // Удаляем класс 'filter-by-category_selectedItem__120_e' у всех элементов навигационной панели
      navLinks.forEach((link) => {
        link.classList.remove('filter-by-category_selectedItem__120_e');
      });

      // Добавляем класс 'filter-by-category_selectedItem__120_e' к текущему элементу
      link.classList.add('filter-by-category_selectedItem__120_e');
    }
  });
});



  const data = {}; // Здесь товары, которые добавляю в корзину

  export { data };

  document.querySelectorAll('.products').forEach(product => {
    product.addEventListener('click', event => {
      let articul;
      if (event.target.classList.contains("to-cartPlus")) { 
        // При клике на + (Класс to-cart) добавить товар в корзину
        articul = event.target.dataset['articul'];
        if (data[articul] !== undefined) {
          data[articul].count++;
        } else {
          data[articul] = cart.products.find(p => p.articul === articul);
          data[articul].count = 1;
        }
        localStorage.setItem('cart', JSON.stringify(data));
        const quantityElement = event.target.closest('.position_addWrapper__1mtqa').querySelector('.position_quantity__ZG2rH');
        quantityElement.textContent = data[articul].count;
        updateProductsOrder();
        updateTotalPrice();
        quantityElement.style.display = 'block';  // Отображаю количество
        event.target.closest('.position_addWrapper__1mtqa').querySelector('.to-cartMinus').style.display = 'block';// Отображаю кнопку "-"
      } 
      // При клике на - (Класс to-cartMinus) уменьшить товар в корзине
      else if (event.target.classList.contains("to-cartMinus")) {
        articul = event.target.dataset['articul'];
        if (data[articul] && data[articul].count > 0) {
          data[articul].count--;
          localStorage.setItem('cart', JSON.stringify(data));
          const quantityElement = event.target.closest('.position_addWrapper__1mtqa').querySelector('.position_quantity__ZG2rH');
          quantityElement.textContent = data[articul].count;
          if (data[articul].count === 0) {
            delete data[articul];
            quantityElement.style.display = 'none';
            event.target.style.display = 'none';
          }
          updateEmptyCart()
          updateProductsOrder();
          updateTotalPrice();
        }
      }
    });
  });

function updateTotalPrice() {
  let totalPrice = Object.values(data).reduce((acc, val) => acc + val.price * val.count, 0);
  // Обновляем текст кнопки "Заказ" в меню
  const costElement = document.querySelector('.text_order');
  costElement.textContent = `Заказ / ${totalPrice.toFixed(2)} руб.`;

  const costElement2 = document.querySelector('.orders');
  costElement2.textContent = `Заказ / ${totalPrice.toFixed(2)} руб.`;

  // Обновляем поле "Итого" в корзине
  const costElement3 = document.querySelector('.order_total__2BUYE');
  costElement3.textContent = `Итого: ${totalPrice.toFixed(2)} руб.`;
}

////////////////////////////////////////////// Начинается код корзины///////////////////////////////////////////////////

let cartOrder = {
   data
  };

  const productsOrderElement = document.querySelector('.productsOrder');

function updateProductsOrder() {
  updateEmptyCart()
  let oit = ''; 
  
  Object.keys(data).forEach(key => {
    const item = data[key];

    oit += `<div class="order-item_product__1ADvM" id="${key}">`;
    oit += `<div class="order-item_photoContainer__6vF63">`;
    oit += `<img src="${item.image}" class="photo_photo__36ndO">`;
    oit += `</div>`;
    oit += `<div class="order-item_productInfo__XZaxe">`;
    oit += `<p class="position_name__2_bPs" title="Чешское пиво">${item.name}</p>`;
    oit += `<div class="order-item_costAndQuantityWrapper__3xEmN">`;
    oit += `<div class="order-item_quantityRow__3fQUG">`;
    oit += `<button class="Minus quantity-button_quantityButton__1KTbZ" data-articul="${key}">-</button>`;
    oit += `<p class="position_quantity__ZG2rH">${item.count}</p>`;
    oit += `<button class="Plus quantity-button_quantityButton__1KTbZ" data-articul="${key}">+</button>`;
    oit += `</div>`;
    oit += `<p class="order-item_cost__1VpvP">${item.price} руб.</p>`;
    oit += `</div>`;
    oit += `</div>`;
    oit += `</div>`;
   

      localStorage.setItem('cart', JSON.stringify(data));
  });

  productsOrderElement.innerHTML = oit;
  localStorage.setItem('cartOrder', JSON.stringify(cartOrder));
}

               // Скрываю товар в корзине при клике на кнопку "Заказ" если количество = 0
var popupTrigger = document.querySelector('.popup-trigger_');
popupTrigger.addEventListener('click', function() {
  updateEmptyCart()
  const quantityElements = document.querySelectorAll('div.order-item_product__1ADvM > .order-item_productInfo__XZaxe > .order-item_costAndQuantityWrapper__3xEmN > .order-item_quantityRow__3fQUG > p.position_quantity__ZG2rH');
  quantityElements.forEach(element => {
    if (element.textContent.trim() === '0') {
        element.closest('.order-item_product__1ADvM').style.display = 'none';
    } else {
        element.closest('.order-item_product__1ADvM').style.display = '';
    }
  });
});

    // Скрываю товар в корзине при клике на кнопку "Заказ" если количество = 0
    var popupTrigg = document.querySelector('.orders');
    popupTrigg.addEventListener('click', function() {
      updateEmptyCart()
      const quantityElements = document.querySelectorAll('div.order-item_product__1ADvM > .order-item_productInfo__XZaxe > .order-item_costAndQuantityWrapper__3xEmN > .order-item_quantityRow__3fQUG > p.position_quantity__ZG2rH');
      quantityElements.forEach(element => {
        if (element.textContent.trim() === '0') {
            element.closest('.order-item_product__1ADvM').style.display = 'none';
        } else {
            element.closest('.order-item_product__1ADvM').style.display = '';
        }
      });
    });

             ////////////////////////////////Всё ещё корзина, работа с кнопками + и - и стоимость//////////////

             document.querySelector('.productsOrder').addEventListener('click', event => {
              event.preventDefault();
              let key;
              if (event.target.classList.contains("Plus")) { 
                // При клике на + (Класс to-cart) добавить товар в корзину
                let key = event.target.dataset['articul'];
                if (data[key] !== undefined) {
                  data[key]['count']++;
                  
                  localStorage.setItem('cart', JSON.stringify(data));
                  const quantityElemen = event.target.closest('.order-item_quantityRow__3fQUG').querySelector('.position_quantity__ZG2rH');
                  quantityElemen.textContent = data[key].count;
                } else {
                  data[key] = cart[key];
                  data[key]['count'] = 1;
                  data[key]['price'] = parseFloat(data[key]['price']);
                }
                localStorage.setItem('cart', JSON.stringify(data));
                renderProducts();
                updateTotalPrice();
              // При клике на - (Класс to-cartMinus) убавить товар из корзины
              } else if (event.target.classList.contains("Minus")) {
                key = event.target.dataset['articul'];
                if (data[key]?.count > 0) {
                  data[key]['count']--;
                  localStorage.setItem('cart', JSON.stringify(data));
                  const quantityElemen = event.target.closest('.order-item_quantityRow__3fQUG').querySelector('.position_quantity__ZG2rH');
                  quantityElemen.textContent = data[key].count;
                  
                  updateEmptyCart()
                  if (data[key].count === 0)
                  delete data[key];
                  localStorage.setItem('cart', JSON.stringify(data));
                  renderProducts();
                  updateEmptyCart()
                  updateProductsOrder();
                  updateTotalPrice();
              }
            }
            });

              
              
            
            
