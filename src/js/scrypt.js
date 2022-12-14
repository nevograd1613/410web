
let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');
let ofs = 0;
const btnLeft = document.querySelector('.commands__btn-left');
const btnRight = document.querySelector('.commands__btn-right');

let pressed = false;
let startx;
let x;
slider.addEventListener('mousedown', (e) => {
   pressed = true;
   startx = e.offsetX - innerSlider.offsetLeft;
   slider.style.cursor = 'grabbing';
});

slider.addEventListener('touchstart', (e) => {
   pressed = true;
   startx = e.pageX - innerSlider.offsetLeft;
});

btnRight.addEventListener('click', (e) => {
   x = e.offsetX;
   ofs = ofs - 300;
   if (ofs <= -1270) {
      ofs = -1270;
   }

   innerSlider.style.left = `${x + ofs}px`;

});

btnLeft.addEventListener('click', () => {
   ofs = ofs + 300;
   if (ofs > 0) {
      ofs = 0;
   }
   innerSlider.style.left = `${x + ofs}px`;
});

slider.addEventListener('mouseenter', () => {
   slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
   slider.style.cursor = 'grab';
});

window.addEventListener('mouseup', () => {
   pressed = false;
});

window.addEventListener('touchend', () => {
   pressed = false;
});

slider.addEventListener('mousemove', (e) => {
   if (!pressed) return;
   e.preventDefault();

   x = e.offsetX;

   innerSlider.style.left = `${x - startx}px`;


   checkboundary();
});

slider.addEventListener('touchmove', (e) => {
   if (!pressed) return;
   e.preventDefault();

   x = e.pageX;

   innerSlider.style.left = `${x - startx}px`;

   checkboundary();
});

function checkboundary() {
   let outer = slider.getBoundingClientRect();
   let inner = innerSlider.getBoundingClientRect();

   if (parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = '0px';
   } else if (inner.right < outer.right) {
      innerSlider.style.left = `-${inner.width - outer.width}px`;
   }
}

checkboundary();

const hamburger = document.querySelector('.header__hamburger'),
   menu = document.querySelector('.menu'),
   closeElem = document.querySelector('.menu__close'),
   menuList = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
   hamburger.classList.add('active');
   closeElem.classList.add('active');

});

closeElem.addEventListener('click', () => {
   menu.classList.remove('active');
   hamburger.classList.remove('active');
   closeElem.classList.remove('active');
});


const close1 = document.querySelector('.pop-up-first__close-elem-first'),
   close2 = document.querySelector('.pop-up-second__close-elem-second'),
   popUp1 = document.querySelector('.pop-up-first'),
   popUp2 = document.querySelector('.pop-up-second');

close1.addEventListener('click', () => {
   popUp1.classList.add('active');
   close1.classList.add('active');
   popUp1.classList.remove('_active');
   popUp1.classList.remove('_anim-items');
});

close2.addEventListener('click', () => {
   popUp2.classList.add('active');
   close2.classList.add('active');
   popUp2.classList.remove('_active');
   popUp2.classList.remove('_anim-items');
});

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);

   function animOnScroll(params) {
      for (let i = 0; i < animItems.length; i++) {
         const animItem = animItems[i];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) &&
          pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide') || 
            (!popUp1.classList.contains('active')) || 
            (!popUp2.classList.contains('active'))) 
            {
               animItem.classList.remove('_active');
            }
         }
      }
   }

   function offset(el) {
      var rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
         top: rect.top + scrollTop,
         left: rect.left + scrollLeft
      };
   }
   setTimeout(() => {
      animOnScroll();
   }, 300);
}

const close3 = document.querySelector('.submit-request__close-elem'),
   close4 = document.querySelector('.consultation__close-elem'),
   requests = document.querySelector('.requests'),
   overlay1 = document.querySelector('.overlay-first'),
   overlay2 = document.querySelector('.overlay-second'),
   initialBtn = document.querySelector('.initial__btn'),
   footerBtn = document.querySelector('.footer__btn');

requests.addEventListener('click', () => {
   overlay1.classList.add('active');
});

footerBtn.addEventListener('click', () => {
   overlay1.classList.add('active');
});

initialBtn.addEventListener('click', () => {
   overlay2.classList.add('active');
});

close3.addEventListener('click', () => {
   overlay1.classList.remove('active');
});

close4.addEventListener('click', () => {
   overlay2.classList.remove('active');
});


const list1 = document.querySelector('.menu__list-1'),
   list2 = document.querySelector('.menu__list-2'),
   list3 = document.querySelector('.menu__list-3'),
   list4 = document.querySelector('.menu__list-4'),
   title = document.querySelector('.menu__title'),
   item1 = document.querySelector('.wrap-1'),
   item2 = document.querySelector('.wrap-2'),
   item3 = document.querySelector('.wrap-3'),
   item4 = document.querySelector('.wrap-4');
let isMenu1 = false;
let isMenu2 = false;
let isMenu3 = false;
let isMenu4 = false;

list1.addEventListener('click', () => {
   if (isMenu1 === false) {
      list1.classList.add('active');
      title.classList.add('active');
      item1.classList.add('active');
      isMenu1 = true;
   } else {
      list1.classList.remove('active');
      title.classList.remove('active');
      item1.classList.remove('active');
      isMenu1 = false;
   }
});

list2.addEventListener('click', () => {
   if (isMenu2 === false) {
      list2.classList.add('active');
      title.classList.add('active');
      item2.classList.add('active');
      isMenu2 = true;
   } else {
      list2.classList.remove('active');
      title.classList.remove('active');
      item2.classList.remove('active');
      isMenu2 = false;
   }
});

list3.addEventListener('click', () => {
   if (isMenu3 === false) {
      list3.classList.add('active');
      title.classList.add('active');
      item3.classList.add('active');
      isMenu3 = true;
   } else {
      list3.classList.remove('active');
      title.classList.remove('active');
      item3.classList.remove('active');
      isMenu3 = false;
   }
});

list4.addEventListener('click', () => {
   if (isMenu4 === false) {
      list4.classList.add('active');
      title.classList.add('active');
      item4.classList.add('active');
      isMenu4 = true;
   } else {
      list4.classList.remove('active');
      title.classList.remove('active');
      item4.classList.remove('active');
      isMenu4 = false;
   }
});