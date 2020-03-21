
$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () { 
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () { 
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() + 10 )

    new WOW().init();

// валидация формы 
$('.modal__form').validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      reguired: true,
      minlength: 2,
    },
    userPhone: "reguired",
    //правило объеут (блок)
    userEmail: {
      reguired: true,
      email: true,
    }
  }, // сообщения 
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв",
    },
    userPhone: "Телефон обязателен",
    userEmail: {
      reguired:"Обязательно укажите email",
      email:"Введите в формате: name@domain.com",
    },
  },
});
  
  // маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___ __-__"});

  // создание яндекс карты 
  newFunction();

});
function newFunction() {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.751574, 37.573856],
      zoom: 9
    }, {
      searchControlProvider: 'yandex#search'
    }),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'), myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'images/myIcon.gif',
        // Размеры метки.
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      }), myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
        hintContent: 'Собственный значок метки с контентом',
        balloonContent: 'А эта — новогодняя',
        iconContent: '12'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/ball.png',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
      });
    myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
  });
}

