(()=>{"use strict";var t={d:(e,o)=>{for(var c in o)t.o(o,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:o[c]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{a:()=>s});class e{constructor(t,e,o,c,i,r,a,n){this.articul=t,this.name=e,this.description=o,this.image=c,this.count=i,this.price=r,this.category=a,this.categoryName=n}display(){let t="";return t+='<div class="position_position__2M-JA">',t+='<div class="position_descriptionSection__3BX_u position_descriptionSectionWithImage__3G75Q">',t+='<div class="position_nameAndDescriptionWrapper__33mBZ">',t+='<p class="position_name__2_bPs" title="'.concat(this.name,'">').concat(this.name,"</p>"),t+='<p class="position_description__3ClsE" title="'.concat(this.description,'">').concat(this.description,"</p>"),t+="</div>",t+='<div class="position_priceBlock__16P3q">',t+='<p class="position_price__17QNz">'.concat(this.price," \u0440\u0443\u0431.</p>"),t+='<div class="position_addWrapper__1mtqa">',0!==this.count&&this.articul?t+='<button class="to-cartMinus quantity-button_quantityButton__1KTbZ" data-articul="'.concat(this.articul,'">-</button>'):t+='<button class="to-cartMinus quantity-button_quantityButton__1KTbZ" data-articul="'.concat(this.articul,'" hidden>-</button>'),0!==this.count&&this.articul?t+='<p class="position_quantity__ZG2rH" data-articul="'.concat(this.articul,'">').concat(this.count,"</p>"):t+='<p class="position_quantity__ZG2rH" hidden data-articul="'.concat(this.articul,'">').concat(this.count,"</p>"),t+='<button class="to-cartPlus quantity-button_quantityButton__1KTbZ" data-articul="'.concat(this.articul,'">+</button>'),t+="</div>",t+="</div>",t+="</div>",t+='<div class="position_photoContainer__2Q1tQ">',t+='<img src="'.concat(this.image,'" class="position_photo__3bymA" alt="').concat(this.name,'">'),t+="</div>",t+="</div>",t+="</div>",t}}const o={products:[new e("Q212301","\u0427\u0435\u0448\u0441\u043a\u043e\u0435 \u043f\u0438\u0432\u043e","\u0427\u0435\u0448\u0441\u043a\u043e\u0435 \u043f\u0438\u0432\u043e - \u044d\u0442\u043e \u0438\u0441\u0442\u0438\u043d\u043d\u043e\u0435 \u0432\u043e\u043f\u043b\u043e\u0449\u0435\u043d\u0438\u0435 \u043c\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0438 \u0441\u0442\u0440\u0430\u0441\u0442\u0438 \u043a \u043f\u0438\u0432\u043e\u0432\u0430\u0440\u0435\u043d\u0438\u044e","https://live.staticflickr.com/65535/53308110243_5a911ec97a_m.jpg",0,300,"Piv_bar","\u041f\u0438\u0432\u043d\u043e\u0439 \u0431\u0430\u0440"),new e("Q212302","\u0422\u0435\u043c\u043d\u043e\u0435 \u043f\u0438\u0432\u043e","\u0422\u0435\u043c\u043d\u043e\u0435 \u043f\u0438\u0432\u043e \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0435\u0442 \u0432\u0430\u0441 \u043f\u043e\u0433\u0440\u0443\u0437\u0438\u0442\u044c\u0441\u044f \u0432 \u043c\u0438\u0440 \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0433\u043e \u0438 \u0437\u0430\u043c\u0430\u043d\u0447\u0438\u0432\u043e\u0433\u043e \u0432\u043a\u0443\u0441\u0430","https://live.staticflickr.com/65535/53308110223_6c90d7e2b4.jpg",0,350,"Piv_bar","\u041f\u0438\u0432\u043d\u043e\u0439 \u0431\u0430\u0440"),new e("Q212303","\u041a\u0440\u0435\u043f\u043a\u043e\u0435 \u043f\u0438\u0432\u043e","\u041a\u0440\u0435\u043f\u043a\u043e\u0435 \u043f\u0438\u0432\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0443\u044e \u0441\u0438\u043b\u0443 \u0438 \u044d\u043d\u0435\u0440\u0433\u0438\u044e \u0432 \u043a\u0430\u0436\u0434\u043e\u0439 \u0431\u0443\u0442\u044b\u043b\u043a\u0435","https://live.staticflickr.com/65535/53308110213_017f6bb61a_m.jpg",0,400,"Piv_bar","\u041f\u0438\u0432\u043d\u043e\u0439 \u0431\u0430\u0440"),new e("Q212304","\u0421\u0432\u0435\u0442\u043b\u043e\u0435 \u043f\u0438\u0432\u043e","\u0421\u0432\u0435\u0442\u043b\u043e\u0435 \u043f\u0438\u0432\u043e - \u044d\u0442\u043e \u0438\u0441\u0442\u0438\u043d\u043d\u0430\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442 \u0441\u0432\u0435\u0436\u0435\u0441\u0442\u044c \u0438 \u043b\u0435\u0433\u043a\u043e\u0441\u0442\u044c \u0432 \u043a\u0430\u0436\u0434\u044b\u0439 \u0433\u043b\u043e\u0442\u043e\u043a.","https://live.staticflickr.com/65535/53307863311_eff0d5c068_n.jpg",0,370,"Piv_bar","\u041f\u0438\u0432\u043d\u043e\u0439 \u0431\u0430\u0440"),new e("Q212305","\u0425\u0440\u0443\u0441\u0442\u044f\u0449\u0438\u0435 \u043a\u0440\u0435\u0432\u0435\u0442\u043a\u0438","\u0416\u0430\u0440\u0435\u043d\u044b\u0435 \u0432 \u043f\u0430\u043d\u0438\u0440\u043e\u0432\u043a\u0435 \u043c\u043e\u0440\u0435\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u2013 \u043f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u0430\u044f \u0437\u0430\u043a\u0443\u0441\u043a\u0430 \u043a \u043f\u0438\u0432\u0443","https://live.staticflickr.com/65535/53336109480_5e7ed9b52f_m.jpg",0,430,"Zakuski","\u0417\u0430\u043a\u0443\u0441\u043a\u0438"),new e("Q212306","\u041a\u0430\u0440\u0442\u043e\u0448\u043a\u0430 \u0444\u0440\u0438","\u041a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c \u0444\u0440\u0438 \u2014 \u043d\u0430\u0440\u0435\u0437\u0430\u043d\u043d\u044b\u0439 \u0431\u0440\u0443\u0441\u043e\u0447\u043a\u0430\u043c\u0438 \u0438\u043b\u0438 \u043f\u043b\u0430\u0441\u0442\u0438\u043d\u043a\u0430\u043c\u0438 \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c, \u0436\u0430\u0440\u0435\u043d\u043d\u044b\u0439 \u0432\u043e \u0444\u0440\u0438\u0442\u044e\u0440\u0435","https://live.staticflickr.com/65535/53336109490_4eeeaf87cb_m.jpg",0,250,"Zakuski","\u0417\u0430\u043a\u0443\u0441\u043a\u0438"),new e("Q212307","\u0421\u044b\u0440 \u0432 \u043a\u043b\u044f\u0440\u0435","\u041d\u0435\u0436\u043d\u044b\u0435 \u043a\u0443\u0441\u043e\u0447\u043a\u0438 \u0441\u044b\u0440\u0430, \u043e\u043a\u0443\u0442\u0430\u043d\u043d\u044b\u0435 \u0432 \u0437\u043e\u043b\u043e\u0442\u0438\u0441\u0442\u0443\u044e \u043a\u043e\u0440\u043e\u0447\u043a\u0443 \u043a\u043b\u044f\u0440\u0430","https://live.staticflickr.com/65535/53336109485_93cb438313_m.jpg",0,450,"Zakuski","\u0417\u0430\u043a\u0443\u0441\u043a\u0438"),new e("Q212308","\u0427\u0435\u0441\u043d\u043e\u0447\u043d\u044b\u0435 \u0441\u0443\u0445\u0430\u0440\u0438\u043a\u0438","\u0427\u0435\u0441\u043d\u043e\u0447\u043d\u044b\u0435 \u0441\u0443\u0445\u0430\u0440\u0438\u043a\u0438\u201d - \u044d\u0442\u043e \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a \u043b\u044e\u0431\u043e\u043c\u0443 \u0431\u043b\u044e\u0434\u0443","https://live.staticflickr.com/65535/53335884743_c1b673e3e7_m.jpg",0,330,"Zakuski","\u0417\u0430\u043a\u0443\u0441\u043a\u0438"),new e("Q212309","\u0412\u0435\u0442\u0447\u0438\u043d\u0430 \u043d\u0430 \u0447\u0438\u043f\u0441\u0430\u0445","\u0412\u0435\u0442\u0447\u0438\u043d\u0430 \u043d\u0430 \u0447\u0438\u043f\u0441\u0430\u0445 - \u044d\u0442\u043e \u0430\u043f\u043f\u0435\u0442\u0438\u0442\u043d\u0430\u044f \u0438 \u0441\u044b\u0442\u043d\u0430\u044f \u0437\u0430\u043a\u0443\u0441\u043a\u0430","https://live.staticflickr.com/65535/53335707501_03334c71ec_m.jpg",0,590,"Salati","\u0421\u0430\u043b\u0430\u0442\u044b"),new e("Q212310","\u0421\u0430\u043b\u0430\u0442 \u0441 \u043a\u0440\u0435\u0432\u0435\u0442\u043a\u0430\u043c\u0438 \u0438 \u043f\u043e\u043c\u0438\u0434\u043e\u0440\u0430\u043c\u0438","\u0421 \u043a\u0440\u0435\u0432\u0435\u0442\u043a\u0430\u043c\u0438 \u0438 \u043f\u043e\u043c\u0438\u0434\u043e\u0440\u0430\u043c\u0438 - \u044d\u0442\u043e \u0432\u043e\u0441\u0445\u0438\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0431\u043b\u044e\u0434\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043d\u0435\u0436\u043d\u044b\u0439 \u0432\u043a\u0443\u0441 \u043a\u0440\u0435\u0432\u0435\u0442\u043e\u043a \u0438 \u0441\u0432\u0435\u0436\u0435\u0441\u0442\u044c \u0441\u043f\u0435\u043b\u044b\u0445 \u043f\u043e\u043c\u0438\u0434\u043e\u0440\u043e\u0432","https://live.staticflickr.com/65535/53336044814_0807b6a2c6_m.jpg",0,190,"Salati","\u0421\u0430\u043b\u0430\u0442\u044b"),new e("Q212311","\u0421 \u0430\u043d\u0430\u043d\u0430\u0441\u0430\u043c\u0438 \u0438 \u043a\u0440\u0435\u0432\u0435\u0442\u043a\u0430\u043c\u0438","\u0418\u0437\u044b\u0441\u043a\u0430\u043d\u043d\u044b\u0439 \u0441\u0430\u043b\u0430\u0442 \u0441 \u0441\u0443\u0445\u0430\u0440\u0438\u043a\u0430\u043c\u0438 \u0438 \u0442\u0440\u043e\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0444\u0440\u0443\u043a\u0442\u043e\u043c","https://live.staticflickr.com/65535/53336166030_56ce565f21_m.jpg",0,375.5,"Salati","\u0421\u0430\u043b\u0430\u0442\u044b"),new e("Q212312",'\u0421\u0430\u043b\u0430\u0442 "\u0426\u0435\u0437\u0430\u0440\u044c"',"\u0421\u0430\u043b\u0430\u0442 \u201c\u0426\u0435\u0437\u0430\u0440\u044c\u201d - \u044d\u0442\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u0441\u0430\u043b\u0430\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0442\u0430\u043b \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0431\u043b\u044e\u0434 \u0432 \u043c\u0438\u0440\u0435","https://live.staticflickr.com/65535/53336044844_bb8c57ccf4_m.jpg",0,470,"Salati","\u0421\u0430\u043b\u0430\u0442\u044b"),new e("Q212313","\u0416\u0430\u0440\u0435\u043d\u044b\u0435 \u043a\u0443\u0440\u0438\u043d\u044b\u0435 \u043a\u0440\u044b\u043b\u044b\u0448\u043a\u0438 ","\u201c\u0416\u0430\u0440\u0435\u043d\u044b\u0435 \u043a\u0443\u0440\u0438\u043d\u044b\u0435 \u043a\u0440\u044b\u043b\u044b\u0448\u043a\u0438 \u0432 \u0441\u043e\u0435\u0432\u043e-\u043f\u0438\u0432\u043d\u043e\u0439 \u0433\u043b\u0430\u0437\u0443\u0440\u0438\u201d - \u044d\u0442\u043e \u043f\u043e\u0442\u0440\u044f\u0441\u0430\u044e\u0449\u0435\u0435 \u0431\u043b\u044e\u0434\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0440\u0430\u0437\u0438\u0442 \u0432\u0430\u0441 \u0441\u0432\u043e\u0438\u043c \u0432\u043a\u0443\u0441\u043e\u043c \u0438 \u0430\u0440\u043e\u043c\u0430\u0442\u043e\u043c","https://live.staticflickr.com/65535/53335950578_060c8aa0d5_m.jpg",0,560,"Gorbluda","\u0413\u043e\u0440\u044f\u0447\u0438\u0435 \u0431\u043b\u044e\u0434\u0430"),new e("Q212314","\u041a\u043e\u043b\u044c\u0446\u0430 \u043a\u0430\u043b\u044c\u043c\u0430\u0440\u043e\u0432 \u0432 \u043f\u0438\u0432\u043d\u043e\u043c \u043a\u043b\u044f\u0440\u0435","\u201c\u041a\u043e\u043b\u044c\u0446\u0430 \u043a\u0430\u043b\u044c\u043c\u0430\u0440\u043e\u0432 \u0432 \u043f\u0438\u0432\u043d\u043e\u043c \u043a\u043b\u044f\u0440\u0435, \u0436\u0430\u0440\u0435\u043d\u044b\u0435 \u043d\u0430 \u0441\u043a\u043e\u0432\u043e\u0440\u043e\u0434\u0435\u201d - \u044d\u0442\u043e \u0438\u0437\u0443\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0431\u043b\u044e\u0434\u043e, \u0441\u043e\u0447\u0435\u0442\u0430\u044e\u0449\u0435\u0435 \u0432 \u0441\u0435\u0431\u0435 \u043d\u0435\u0436\u043d\u043e\u0441\u0442\u044c \u043a\u0430\u043b\u044c\u043c\u0430\u0440\u043e\u0432, \u0430\u0440\u043e\u043c\u0430\u0442 \u043f\u0438\u0432\u0430 \u0438 \u0445\u0440\u0443\u0441\u0442\u044f\u0449\u0443\u044e \u043a\u043e\u0440\u043e\u0447\u043a\u0443 \u043a\u043b\u044f\u0440\u0430","https://live.staticflickr.com/65535/53336044819_3d41f6dd3a_m.jpg",0,600,"Gorbluda","\u0413\u043e\u0440\u044f\u0447\u0438\u0435 \u0431\u043b\u044e\u0434\u0430"),new e("Q212315","\u041a\u043e\u043b\u0430","\u201c\u041a\u043e\u043b\u0430\u201d - \u044d\u0442\u043e \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0431\u0435\u0437\u0430\u043b\u043a\u043e\u0433\u043e\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u043f\u0438\u0442\u043a\u043e\u0432 \u0432 \u043c\u0438\u0440\u0435, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0432 \u043a\u043e\u043d\u0446\u0435 XIX \u0432\u0435\u043a\u0430","https://live.staticflickr.com/65535/53335942008_3ec5b1d028_m.jpg",0,150,"Napitki","\u041d\u0430\u043f\u0438\u0442\u043a\u0438"),new e("Q212316","\u0421\u043e\u043a \u044f\u0431\u043b\u043e\u0447\u043d\u044b\u0439","\u042f\u0431\u043b\u043e\u0447\u043d\u044b\u0439 \u0441\u043e\u043a - \u044d\u0442\u043e \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u043a\u043b\u0430\u0434\u0435\u0437\u044c \u0432\u0438\u0442\u0430\u043c\u0438\u043d\u043e\u0432 \u0438 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0445 \u043c\u0438\u043a\u0440\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u0430\u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u043d\u0430\u0448\u0435\u043c\u0443 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c\u0443","https://live.staticflickr.com/65535/53334826292_a2e682e198_m.jpg",0,120,"Napitki","\u041d\u0430\u043f\u0438\u0442\u043a\u0438")]};function c(){const t={Piv_bar:document.querySelector(".Piv_bar"),Zakuski:document.querySelector(".Zakuski"),Napitki:document.querySelector(".Napitki"),Gorbluda:document.querySelector(".Gorbluda"),Salati:document.querySelector(".Salati")},e={};o.products.forEach((t=>{e[t.category]||(e[t.category]=[]),e[t.category].push(t)}));for(const o in e){const c=e[o].map((t=>t.display())).join("");t[o].innerHTML=c}}const i=document.querySelector(".emptyCart");function r(){let t="";t=s&&0===Object.keys(s).length?'<p class="empty-cart_message__3TH4i">\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430</p>':"",i.innerHTML=t}c(),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".popup-trigger_"),e=document.querySelector("#orderPopup"),o=document.querySelector(".close"),c=document.querySelector(".close_1"),i=document.querySelector(".orders");t.addEventListener("click",(function(){e.style.display="block"})),o.addEventListener("click",(function(){e.style.display="none"})),i.addEventListener("click",(function(){e.style.display="block"})),c.addEventListener("click",(function(){e.style.display="none"}))})),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".place_order"),e=document.querySelector(".tooltip_name"),o=document.querySelector(".tooltip_select"),c=document.querySelector(".popupNumber");t.addEventListener("click",(function(){var t=document.querySelector(".select"),i=document.querySelector(".button_name").value;""===i?e.classList.add("visible"):e.classList.remove("visible"),"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0441\u0442\u043e\u043b\u0430"===t.value?o.classList.add("visible"):o.classList.remove("visible"),""!==i&&"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0441\u0442\u043e\u043b\u0430"!==t.value&&(c.style.display="flex")}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".close_NumberButton").addEventListener("click",(function(){window.location.reload()}))}));const a=document.querySelectorAll(".filter-by-category_item__2BptE"),n=t=>{t.preventDefault(),a.forEach((t=>{t.classList.remove("filter-by-category_selectedItem__120_e")})),t.target.classList.add("filter-by-category_selectedItem__120_e");document.querySelector(t.target.getAttribute("href")).scrollIntoView({behavior:"smooth"})};a.forEach((t=>{t.addEventListener("click",n)})),window.addEventListener("scroll",(()=>{const t=window.PageTransitionEvent||document.documentElement.scrollTop;a.forEach((e=>{const o=document.querySelector(e.getAttribute("href")),c=o.offsetTop,i=c+o.offsetHeight;t>=c&&t<i&&(a.forEach((t=>{t.classList.remove("filter-by-category_selectedItem__120_e")})),e.classList.add("filter-by-category_selectedItem__120_e"))}))}));const s={};function l(){let t=Object.values(s).reduce(((t,e)=>t+e.price*e.count),0);document.querySelector(".text_order").textContent="\u0417\u0430\u043a\u0430\u0437 / ".concat(t.toFixed(2)," \u0440\u0443\u0431.");document.querySelector(".orders").textContent="\u0417\u0430\u043a\u0430\u0437 / ".concat(t.toFixed(2)," \u0440\u0443\u0431.");document.querySelector(".order_total__2BUYE").textContent="\u0418\u0442\u043e\u0433\u043e: ".concat(t.toFixed(2)," \u0440\u0443\u0431.")}document.querySelectorAll(".products").forEach((t=>{t.addEventListener("click",(t=>{let e;if(t.target.classList.contains("to-cartPlus")){e=t.target.dataset.articul,void 0!==s[e]?s[e].count++:(s[e]=o.products.find((t=>t.articul===e)),s[e].count=1),localStorage.setItem("cart",JSON.stringify(s));const c=t.target.closest(".position_addWrapper__1mtqa").querySelector(".position_quantity__ZG2rH");c.textContent=s[e].count,_(),l(),c.style.display="block",t.target.closest(".position_addWrapper__1mtqa").querySelector(".to-cartMinus").style.display="block"}else if(t.target.classList.contains("to-cartMinus")&&(e=t.target.dataset.articul,s[e]&&s[e].count>0)){s[e].count--,localStorage.setItem("cart",JSON.stringify(s));const o=t.target.closest(".position_addWrapper__1mtqa").querySelector(".position_quantity__ZG2rH");o.textContent=s[e].count,0===s[e].count&&(delete s[e],o.style.display="none",t.target.style.display="none"),r(),_(),l()}}))}));let d={data:s};const u=document.querySelector(".productsOrder");function _(){r();let t="";Object.keys(s).forEach((e=>{const o=s[e];t+='<div class="order-item_product__1ADvM" id="'.concat(e,'">'),t+='<div class="order-item_photoContainer__6vF63">',t+='<img src="'.concat(o.image,'" class="photo_photo__36ndO">'),t+="</div>",t+='<div class="order-item_productInfo__XZaxe">',t+='<p class="position_name__2_bPs" title="\u0427\u0435\u0448\u0441\u043a\u043e\u0435 \u043f\u0438\u0432\u043e">'.concat(o.name,"</p>"),t+='<div class="order-item_costAndQuantityWrapper__3xEmN">',t+='<div class="order-item_quantityRow__3fQUG">',t+='<button class="Minus quantity-button_quantityButton__1KTbZ" data-articul="'.concat(e,'">-</button>'),t+='<p class="position_quantity__ZG2rH">'.concat(o.count,"</p>"),t+='<button class="Plus quantity-button_quantityButton__1KTbZ" data-articul="'.concat(e,'">+</button>'),t+="</div>",t+='<p class="order-item_cost__1VpvP">'.concat(o.price," \u0440\u0443\u0431.</p>"),t+="</div>",t+="</div>",t+="</div>",localStorage.setItem("cart",JSON.stringify(s))})),u.innerHTML=t,localStorage.setItem("cartOrder",JSON.stringify(d))}document.querySelector(".popup-trigger_").addEventListener("click",(function(){r();document.querySelectorAll("div.order-item_product__1ADvM > .order-item_productInfo__XZaxe > .order-item_costAndQuantityWrapper__3xEmN > .order-item_quantityRow__3fQUG > p.position_quantity__ZG2rH").forEach((t=>{"0"===t.textContent.trim()?t.closest(".order-item_product__1ADvM").style.display="none":t.closest(".order-item_product__1ADvM").style.display=""}))})),document.querySelector(".orders").addEventListener("click",(function(){r();document.querySelectorAll("div.order-item_product__1ADvM > .order-item_productInfo__XZaxe > .order-item_costAndQuantityWrapper__3xEmN > .order-item_quantityRow__3fQUG > p.position_quantity__ZG2rH").forEach((t=>{"0"===t.textContent.trim()?t.closest(".order-item_product__1ADvM").style.display="none":t.closest(".order-item_product__1ADvM").style.display=""}))})),document.querySelector(".productsOrder").addEventListener("click",(t=>{let e;if(t.preventDefault(),t.target.classList.contains("Plus")){let e=t.target.dataset.articul;if(void 0!==s[e]){s[e].count++,localStorage.setItem("cart",JSON.stringify(s));t.target.closest(".order-item_quantityRow__3fQUG").querySelector(".position_quantity__ZG2rH").textContent=s[e].count}else s[e]=o[e],s[e].count=1,s[e].price=parseFloat(s[e].price);localStorage.setItem("cart",JSON.stringify(s)),c(),l()}else if(t.target.classList.contains("Minus")){var i;if(e=t.target.dataset.articul,(null===(i=s[e])||void 0===i?void 0:i.count)>0){s[e].count--,localStorage.setItem("cart",JSON.stringify(s));t.target.closest(".order-item_quantityRow__3fQUG").querySelector(".position_quantity__ZG2rH").textContent=s[e].count,r(),0===s[e].count&&delete s[e],localStorage.setItem("cart",JSON.stringify(s)),c(),r(),_(),l()}}}))})();
//# sourceMappingURL=main.7d1c880e.js.map