class Product {
  constructor(article, name, description, image, count, price, category, categoryName) {
      this.articul = article;
      this.name = name;
      this.description = description;
      this.image = image;
      this.count = count;
      this.price = price;
      this.category = category;
      this.categoryName = categoryName;

  }

display() {
  let out = '';

out += `<div class="position_position__2M-JA">`;
out += `<div class="position_descriptionSection__3BX_u position_descriptionSectionWithImage__3G75Q">`;
out += `<div class="position_nameAndDescriptionWrapper__33mBZ">`;
out += `<p class="position_name__2_bPs" title="${this.name}">${this.name}</p>`;
out += `<p class="position_description__3ClsE" title="${this.description}">${this.description}</p>`;
out += `</div>`;
out += `<div class="position_priceBlock__16P3q">`;
out += `<p class="position_price__17QNz">${this.price} руб.</p>`;
out += `<div class="position_addWrapper__1mtqa">`;
if (this.count === 0 || !this.articul) {
out += `<button class="to-cartMinus quantity-button_quantityButton__1KTbZ" data-articul="${this.articul}" hidden>-</button>`;
} else {
out += `<button class="to-cartMinus quantity-button_quantityButton__1KTbZ" data-articul="${this.articul}">-</button>`;
}
if (this.count === 0 || !this.articul) {
out += `<p class="position_quantity__ZG2rH" hidden data-articul="${this.articul}">${this.count}</p>`;
} else {
out += `<p class="position_quantity__ZG2rH" data-articul="${this.articul}">${this.count}</p>`;
}
out += `<button class="to-cartPlus quantity-button_quantityButton__1KTbZ" data-articul="${this.articul}">+</button>`;
out += `</div>`;
out += `</div>`;
out += `</div>`;
out += `<div class="position_photoContainer__2Q1tQ">`;
out += `<img src="${this.image}" class="position_photo__3bymA" alt="${this.name}">`;
out += `</div>`;
out += `</div>`;
out += `</div>`;

return out;
  }
}

const cart = {
  products: [
  new Product(
    'Q212301',
    'Чешское пиво',
    'Чешское пиво - это истинное воплощение мастерства и страсти к пивоварению',
    'https://live.staticflickr.com/65535/53308110243_5a911ec97a_m.jpg',
    0,
    300,
    'Piv_bar',
    'Пивной бар',
    ),
  new Product(
    'Q212302',
    'Темное пиво',
    'Темное пиво приглашает вас погрузиться в мир глубокого и заманчивого вкуса',
    'https://live.staticflickr.com/65535/53308110223_6c90d7e2b4.jpg',
    0,
    350,
    'Piv_bar',
    'Пивной бар',
    ),   
  new Product(
    'Q212303',
    'Крепкое пиво',
    'Крепкое пиво представляет собой настоящую силу и энергию в каждой бутылке',
    'https://live.staticflickr.com/65535/53308110213_017f6bb61a_m.jpg',
    0,
    400,
    'Piv_bar',
    'Пивной бар',
    ),  
  new Product(
    'Q212304',
    'Светлое пиво',
    'Светлое пиво - это истинная классика, которая приносит свежесть и легкость в каждый глоток.',
    'https://live.staticflickr.com/65535/53307863311_eff0d5c068_n.jpg',
    0,
    370,
    'Piv_bar',
    'Пивной бар',
    ),    
  new Product(
    'Q212305',
    'Хрустящие креветки',
    'Жареные в панировке морепродукты – прекрасная закуска к пиву',
    'https://live.staticflickr.com/65535/53336109480_5e7ed9b52f_m.jpg',
    0,
    430,
    'Zakuski',
    'Закуски',
    ),
  new Product(
    'Q212306',
    'Картошка фри',
    'Картофель фри — нарезанный брусочками или пластинками картофель, жаренный во фритюре',
    'https://live.staticflickr.com/65535/53336109490_4eeeaf87cb_m.jpg',
    0,
    250,
    'Zakuski',
    'Закуски',
    ),
  new Product(
    'Q212307',
    'Сыр в кляре',
    'Нежные кусочки сыра, окутанные в золотистую корочку кляра',
    'https://live.staticflickr.com/65535/53336109485_93cb438313_m.jpg',
    0,
    450,
    'Zakuski',
    'Закуски',
    ),
  new Product(
    'Q212308',
    'Чесночные сухарики',
    'Чесночные сухарики” - это идеальное дополнение к любому блюду',
    'https://live.staticflickr.com/65535/53335884743_c1b673e3e7_m.jpg',
    0,
    330,
    'Zakuski',
    'Закуски',
    ),
  new Product(
    'Q212309',
    'Ветчина на чипсах',
    'Ветчина на чипсах - это аппетитная и сытная закуска',
    'https://live.staticflickr.com/65535/53335707501_03334c71ec_m.jpg',
    0,
    590,
    'Salati',
    'Салаты',
    ),
  new Product(
    'Q212310',
    'Салат с креветками и помидорами',
    'С креветками и помидорами - это восхитительное блюдо, которое сочетает в себе нежный вкус креветок и свежесть спелых помидоров',
    'https://live.staticflickr.com/65535/53336044814_0807b6a2c6_m.jpg',
    0,
    190,
    'Salati',
    'Салаты',
    ),
  new Product(
    'Q212311',
    'С ананасами и креветками',
    'Изысканный салат с сухариками и тропическим фруктом',
    'https://live.staticflickr.com/65535/53336166030_56ce565f21_m.jpg',
    0,
    375.5,
    'Salati',
    'Салаты',
    ),
  new Product(
    'Q212312',
    'Салат "Цезарь"',
    'Салат “Цезарь” - это классический американский салат, который стал одним из самых популярных блюд в мире',
    'https://live.staticflickr.com/65535/53336044844_bb8c57ccf4_m.jpg',
    0,
    470,
    'Salati',
    'Салаты',
    ),
  new Product(
    'Q212313',
    'Жареные куриные крылышки ',
    '“Жареные куриные крылышки в соево-пивной глазури” - это потрясающее блюдо, которое поразит вас своим вкусом и ароматом',
    'https://live.staticflickr.com/65535/53335950578_060c8aa0d5_m.jpg',
    0,
    560,
    'Gorbluda',
    'Горячие блюда',
    ),
  new Product(
    'Q212314',
    'Кольца кальмаров в пивном кляре',
    '“Кольца кальмаров в пивном кляре, жареные на сковороде” - это изумительное блюдо, сочетающее в себе нежность кальмаров, аромат пива и хрустящую корочку кляра',
    'https://live.staticflickr.com/65535/53336044819_3d41f6dd3a_m.jpg',
    0,
    600,
    'Gorbluda',
    'Горячие блюда',
    ),
  new Product(
    'Q212315',
    'Кола',
    '“Кола” - это один из самых популярных безалкогольных напитков в мире, созданный в конце XIX века',
    'https://live.staticflickr.com/65535/53335942008_3ec5b1d028_m.jpg',
    0,
    150,
    'Napitki',
    'Напитки',
    ),
  new Product(
    'Q212316',
    'Сок яблочный',
    'Яблочный сок - это настоящий кладезь витаминов и полезных микроэлементов, которые так необходимы нашему организму',
    'https://live.staticflickr.com/65535/53334826292_a2e682e198_m.jpg',
    0,
    120,
    'Napitki',
    'Напитки',
    ),
  ]
};

function renderProducts() {
  const productsContainers = {
    'Piv_bar': document.querySelector('.Piv_bar'),
    'Zakuski': document.querySelector('.Zakuski'),
    'Napitki': document.querySelector('.Napitki'),
    'Gorbluda': document.querySelector('.Gorbluda'),
    'Salati': document.querySelector('.Salati')
  };

  const uniqueProducts = {};

  cart.products.forEach(product => {
    if (!uniqueProducts[product.category]) {
      uniqueProducts[product.category] = [];
    }
    uniqueProducts[product.category].push(product);
  });

  for (const category in uniqueProducts) {
    const productsHtml = uniqueProducts[category].map(product => product.display()).join('');
    productsContainers[category].innerHTML = productsHtml;
  }
}

export { cart, renderProducts };