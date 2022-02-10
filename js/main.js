"use strict";

/*Маска для инпута*/
$(function () {
  $(".phone__tell").mask("8(999) 999-9999");
}); // Селекты класический

function select() {
  var time = 300,
      trigger = null;
  $('.select__trigger').on('click', function (e) {
    var drop = $(this).siblings('.select__drop');
    trigger = $(this);
    trigger.toggleClass('active');
    drop.fadeToggle(time);
    $(document).mouseup(function (e) {
      if (!trigger.is(e.target) && trigger.has(e.target).length === 0 && !drop.is(e.target) && drop.has(e.target).length === 0) {
        trigger.removeClass('active');
        drop.fadeOut(time);
      }
    });
    $('body').on('change', '.select__drop input', function () {
      console.log(trigger);

      if ($(this).is(':checked')) {
        trigger.find('span').text($(this).siblings('label').text());
        trigger.find('span').css('color', '#087868');
      }

      trigger.removeClass('active');
      drop.fadeOut(time);
    });
  });
}

select(); //scroll

(function ($) {
  $(window).on('load', function () {
    $('.select__scroll').mCustomScrollbar({
      theme: "dark"
    });
  });
})(jQuery); //select choice of people


function selectchoice() {
  function openClose() {
    document.querySelectorAll('.js__click').forEach(function (js__click) {
      var js__popuppeople = js__click.querySelector('.js__popup-people');
      js__click.addEventListener('click', function (e) {
        e.stopPropagation();
        js__popuppeople.classList.toggle('open');
        js__click.classList.toggle('open');
      });
      js__popuppeople.addEventListener('click', function (e) {
        e.stopPropagation();
      });
      document.addEventListener('click', function (e) {
        js__popuppeople.classList.remove('open');
        js__click.classList.remove('open');
      });
    });
  }

  function adults() {
    document.querySelectorAll('.js__click').forEach(function (js__click) {
      var time = 2;
      var js__popupPlus = js__click.querySelector(".js__popup-plus");
      var js__popupAppend = js__click.querySelector(".js__popup-append");
      var js__popupMinus = js__click.querySelector(".js__popup-minus");
      var js__popupNumber = js__click.querySelector(".js__popup-number");
      var js__popupInputDate = js__click.querySelector(".js__popupInputDate");
      var js__popupuserNone = js__click.querySelector('.js__popup-userNone');
      var js__popupuserblock = js__click.querySelector('.js__popup-userblock');
      var js__popupColor = js__click.querySelector('.js__popup-color');

  

      for (var i = 0; i < 2; i++) {
        var img = document.createElement('img');
        img.src = 'img/popup__people-green.svg';
        img.classList.add('js__img-people', 'js__popup-imgGreen');
  
        js__popupAppend.append(img);
      }

      for (var _i = 3; _i < 5; _i++) {
        var _img = document.createElement('img');

        _img.src = 'img/popup__people.svg';

        _img.classList.add('js__img-people', 'js__popup-img');

        js__popupAppend.append(_img);
      }


      function minusPeople() {
        var js__popupImgGreen = js__popupAppend.querySelectorAll(".js__popup-imgGreen");

        if (js__popupImgGreen.length > 1) {
          js__popupAppend.removeChild(js__popupImgGreen[0]);

          var _img2 = document.createElement('img');

          _img2.src = 'img/popup__people.svg';

          _img2.classList.add('js__img-people', 'js__popup-img');

          js__popupAppend.append(_img2);
          numberMinus();
        }
      }

      function numberMinus() {
        time--;

        if (time > 1) {
          js__popupInputDate.innerHTML = "".concat(time, " \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445");
          js__popupNumber.innerHTML = " \u0412\u0437\u0440\u043E\u0441\u043B\u044B\u0435: ".concat(time);
        } else {
          js__popupInputDate.innerHTML = "".concat(time, " \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0439");
          js__popupNumber.innerHTML = " \u0412\u0437\u0440\u043E\u0441\u043B\u044B\u0439: ".concat(time);
        }
      }

      function plusPeople() {
        var js__popupImgGreen = js__popupAppend.querySelectorAll(".js__popup-imgGreen");
        var js__popupImg = js__popupAppend.querySelector(".js__popup-img");

        console.log(js__popupImgGreen);

        if (js__popupImgGreen.length < 4) {
          var _img3 = document.createElement('img');

          _img3.src = 'img/popup__people-green.svg';

          _img3.classList.add('js__img-people', 'js__popup-imgGreen');

          js__popupAppend.prepend(_img3);
          js__popupAppend.removeChild(js__popupImg);
          numberPlus();
        }
      }

      function numberPlus() {
        time++;

        if (time > 1) {
          js__popupInputDate.innerHTML = "".concat(time, " \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445");
          js__popupNumber.innerHTML = " \u0412\u0437\u0440\u043E\u0441\u043B\u044B\u0435: ".concat(time);
        } else {
          js__popupInputDate.innerHTML = "".concat(time, " \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0439");
          js__popupNumber.innerHTML = " \u0412\u0437\u0440\u043E\u0441\u043B\u044B\u0439: ".concat(time);
        }
      }

      js__popupMinus.addEventListener("click", function (e) {
        e.preventDefault();
        minusPeople();
      });
      js__popupPlus.addEventListener("click", function (e) {
        e.preventDefault();
        plusPeople();
        js__popupuserNone.style.display = 'block';
        js__popupuserblock.style.display = 'none';
        js__popupColor.style.color = '#087868';
      });


 
      //Делегирование
      js__popupAppend.addEventListener('click', (e) => {
         let targetItem = e.target;
         if(targetItem.closest('.js__popup-img')) {
            plusPeople()
         } else {
          minusPeople();
         }
      });

      

    });
  }

  function children() {
    document.querySelectorAll('.js__click').forEach(function (js__click) {
      var timeChildren = 0;
      var js__popupPlus = js__click.querySelector(".js__popup-plusChildren");
      var js__popupAppend = js__click.querySelector(".js__popup-appendChildren");
      var js__popupMinus = js__click.querySelector(".js__popup-minusChildren");
      var js__popup__children = js__click.querySelector(".js__popup__children");
      var js__popupNumber = js__click.querySelector(".js__popup-numberChildren");
      var js__popupuserNone = js__click.querySelector('.js__popup-userNone');
      var js__popupuserblock = js__click.querySelector('.js__popup-userblock');
      var js__popupColor = js__click.querySelector('.js__popup-color');

        //Делегирование
        js__popupAppend.addEventListener('click', (e) => {
          let targetItem = e.target;
          if(targetItem.closest('.js__popup-img')) {
             plusPeople()
          } else {
           minusPeople();
          }
       });

      for (var i = 0; i < 4; i++) {
        var img = document.createElement('img');
        img.src = 'img/popup__people.svg';
        img.classList.add('js__popup-img');
        js__popupAppend.append(img);
      }

      function numberPlus() {
        timeChildren++;

        if (timeChildren > 1) {
          js__popup__children.innerHTML = "- ".concat(timeChildren, " \u0434\u0435\u0442\u0438");
          js__popupNumber.innerHTML = "\u0414\u0435\u0442\u0438: ".concat(timeChildren);
        } else {
          js__popup__children.innerHTML = "- ".concat(timeChildren, " \u0440\u0435\u0431\u0435\u043D\u043E\u043A");
          js__popupNumber.innerHTML = "\u0420\u0435\u0431\u0435\u043D\u043E\u043A: ".concat(timeChildren);
        }

        return timeChildren;
      }

      function numberMinus() {
        timeChildren--;

        if (timeChildren > 1) {
          js__popup__children.innerHTML = "- ".concat(timeChildren, " \u0434\u0435\u0442\u0438");
          js__popupNumber.innerHTML = "\u0414\u0435\u0442\u0438: ".concat(timeChildren);
        } else {
          js__popup__children.innerHTML = "- ".concat(timeChildren, " \u0440\u0435\u0431\u0435\u043D\u043E\u043A");
          js__popupNumber.innerHTML = "\u0420\u0435\u0431\u0435\u043D\u043E\u043A: ".concat(timeChildren);
        }

        return timeChildren;
      }

      function minusPeople() {
        var js__popupImgGreen = js__popupAppend.querySelectorAll(".js__popup-imgGreen");
        var js__popupselect = js__click.querySelector(".select");

        if (js__popupImgGreen.length > 0) {
          js__popupAppend.removeChild(js__popupImgGreen[0]);

          var _img4 = document.createElement('img');

          _img4.src = 'img/popup__people.svg';

          _img4.classList.add('js__popup-img');

          js__popupAppend.append(_img4);
          numberMinus();
          js__click.querySelector('.js__popup-opendselect').removeChild(js__popupselect);
          js__popupselect.classList = 'js__popup-select';
          js__click.querySelector('.js__popup-selectremove').appendChild(js__popupselect);
        }
      }

      function plusPeople() {
        var js__popupImgGreen = js__popupAppend.querySelectorAll(".js__popup-imgGreen");
        var js__popupImg = js__popupAppend.querySelector(".js__popup-img");
        var js__popupselect = js__click.querySelector(".js__popup-select");

        if (js__popupImgGreen.length < 4) {
          var _img5 = document.createElement('img');

          _img5.src = 'img/popup__people-green.svg';

          _img5.classList.add('js__popup-imgGreen');

          js__popupAppend.prepend(_img5);
          js__popupAppend.removeChild(js__popupImg);
          numberPlus();
          js__click.querySelector('.js__popup-opendselect').appendChild(js__popupselect);
          js__popupselect.classList = 'select';
        }
      }

      js__popupMinus.addEventListener("click", function (e) {
        e.preventDefault();
        minusPeople();
      });
      js__popupPlus.addEventListener("click", function (e) {
        e.preventDefault();
        plusPeople();
        js__popupuserNone.style.display = 'block';
        js__popupuserblock.style.display = 'none';
        js__popupColor.style.color = '#087868';
      });
    });
  }


  function init1() {
    openClose();
    adults();
    children();
  }

  init1();
}

selectchoice(); // lang btns

var langBtns = document.querySelectorAll('.lang__list-item');
langBtns.forEach(function (langBtn) {
  langBtn.addEventListener('click', function () {
    langBtns.forEach(function (item) {
      item.classList.remove('active');
    });
    langBtn.classList.add('active');
  });
}); // mobaile menu btn

var menuBtn = document.querySelector('.header__menu-btn');
var menuList = document.querySelector('.header__inner');
var main = document.querySelector('.main');
var mainFooter = document.querySelector('.main-footer');
var headerTabletBtn = document.querySelector('.header__tablet-btn');
var tablet = document.querySelector('.tablet');
menuBtn.addEventListener('click', function () {
  menuList.classList.toggle('active');
  menuBtn.classList.toggle('active');
  main.classList.toggle('active');
  mainFooter.classList.toggle('active');
}); 
// left menu btn

// headerTabletBtn.addEventListener('click', function () {
//   tablet.classList.toggle('active');
//   headerTabletBtn.classList.toggle('active');
//   main.classList.toggle('active');
//   mainFooter.classList.toggle('active');
// }); //map

function init() {
  var map = new ymaps.Map('contacts__map', {
    center: [52.01422807206773, 113.50540599999987],
    zoom: 17
  });
  var placemark = new ymaps.Placemark([52.0142413122434, 113.50536308465566], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/marker.png',
    iconImageSize: [62, 74],
    iconImageOffset: [-35, -80]
  });
  map.controls.remove('geolocationControl'); // удаляем геолокацию

  map.controls.remove('searchControl'); // удаляем поиск

  map.controls.remove('trafficControl'); // удаляем контроль трафика

  map.controls.remove('typeSelector'); // удаляем тип

  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим

  map.controls.remove('zoomControl'); // удаляем контрол зуммирования

  map.controls.remove('rulerControl'); // удаляем контрол правил

  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init); //room slider

var room__swiper = new Swiper('.room__swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.room__swiper-button-next',
    prevEl: '.room__swiper-button-prev'
  }
});
var body = document.querySelector('body');

if (body.clientWidth <= 570) {
  room__swiper.autoplay.start();
} else {
  room__swiper.autoplay.stop();
} //news slider


var newsSwiper = new Swiper(".news__items", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".news-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".news-btn__next",
    prevEl: ".news-btn__prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 767px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 1499px
    1499: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
}); // trust slider

var trustSwiper = new Swiper(".trust__items", {
  slidesPerView: 5,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".trust__pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".trust__btn-next",
    prevEl: ".trust__btn-prev"
  },
  autoplay: {
    delay: 2000
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // when window width is >= 767px
    767: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 1499px
    1499: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
}); //popup

var js__popupClick = document.querySelectorAll('.popup__click');
var lockPaddingValue = window.innerWidth - body.offsetWidth + 'px'; //Получили ширину scrolla

var _loop = function _loop(i) {
  js__popupClick[i].addEventListener('click', function (e) {
    e.stopPropagation();
    var popup__name = js__popupClick[i].dataset.modal;
    var popupCurent = document.querySelector("[data-popup=\"".concat(popup__name, "\"]"));
    var calendar = document.querySelectorAll('.datepicker');
    var popupContent = popupCurent.querySelector('.js__popup-content');
    var popup__close = popupCurent.querySelector('.popup__close');
    add(popupCurent, body);

    function popupRemove() {
      remove(popupCurent);
      setTimeout(function () {
        remove(body);
        body.style.paddingRight = '0px';
      }, 400);
    }

    document.addEventListener('click', function (e) {
      popupRemove();
    });
    popup__close.addEventListener('click', function () {
      popupRemove();
    });

    if (popupContent) {
      popupContent.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }

    body.style.paddingRight = lockPaddingValue;
  });
};

for (var i = 0; i < js__popupClick.length; i++) {
  _loop(i);
}

;

function add() {
  for (var _len = arguments.length, js__popupAdd = new Array(_len), _key = 0; _key < _len; _key++) {
    js__popupAdd[_key] = arguments[_key];
  }

  for (var _i2 = 0; _i2 < js__popupAdd.length; _i2++) {
    js__popupAdd[_i2].classList.add('open');
  }
}

function remove() {
  for (var _len2 = arguments.length, js__popupRemove = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    js__popupRemove[_key2] = arguments[_key2];
  }

  for (var _i3 = 0; _i3 < js__popupRemove.length; _i3++) {
    js__popupRemove[_i3].classList.remove('open');
  }
}

$(function () {
  var js__label = document.querySelectorAll('.js__label');
  js__label.forEach(function (js__label) {
    var input = js__label.querySelector('.calendar');
    var popup__calendar = js__label.querySelector('.popup__calendar');
    var js__calendarcheck = js__label.querySelector('.js__calendar-check');
    var datepicker = document.querySelectorAll('.datepicker');

    for (var _i4 = 0; _i4 < datepicker.length; _i4++) {
      if (datepicker[_i4]) {
        datepicker[_i4].addEventListener('click', function (e) {
          e.stopPropagation();
        });
      }
    }

    js__label.addEventListener('click', function (e) {
      e.stopPropagation();
      js__label.classList.add('open');
    });
    document.addEventListener('click', function (e) {
      js__label.classList.remove('open');

      if (input) {
        input.classList.remove('active');
      }

      if (popup__calendar) {
        popup__calendar.style.display = 'block';
        js__calendarcheck.style.display = 'none';
      }
    });
    /*$.fn.datepicker.language['en'] =  {
            days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            daysShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
            daysMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
            months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
            monthsShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            today: 'Today',
            clear: 'Clear',
            dateFormat: 'yyyy/dd/mm',
            timeFormat: 'hh:ii',
            firstDay: 0
        };*/

    $(input).datepicker({
      // multipleDates: 2,
      // multipleDatesSeparator: ' - ',
      // minDate: new Date(),
      language: 'ru',
      // dateFormat: 'yyyy-mm-dd',
      // firstDay: 0,

      /*toggleSelected: false,
      range: true,
      timepicker: true,
      minHours: 9,
      maxHours: 17,
      minutesStep: 5,*/
      // view: 'months',
      clearButton: false,
      onSelect: function onSelect(formattedDate, date, inst) {
        inst.hide();

        if (inst._prevOnSelectValue) {
          input.classList.add('active');
          console.log(input);
          popup__calendar.style.display = 'none';
          js__calendarcheck.style.display = 'block';
        } // alert(date);

      },
      altField: $('#alt'),
      altFieldDateFormat: 'yyyy-mm-dd',
      position: 'bottom left'
    });
  });
}); // hero slider

var heroSwiper = new Swiper(".hero__items", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 4000
  },
  navigation: {
    nextEl: ".hero__btn-next",
    prevEl: ".hero__btn-prev"
  }
}); // Обрезка текста у новостей

Ellipsis({
  ellipsis: '…',
  debounce: 300,
  responsive: true,
  className: '.news__item h4',
  lines: 3,
  portrait: null,
  break_word: false
});
Ellipsis({
  ellipsis: '…',
  debounce: 300,
  responsive: true,
  className: '.news__item p',
  lines: 5,
  portrait: null,
  break_word: false
}); // анимация

AOS.init();
new AirDatepicker('#booking-from');
new AirDatepicker('#booking-to'); // niceselect

$(document).ready(function () {
  $('select').niceSelect();
});
/* const quests = document.querySelector('.booking__quests input')
const questsModal = document.querySelector('.quests')

quests.addEventListener('click', () => {
    questsModal.classList.toggle('active')
}) */
//# sourceMappingURL=main.js.map
