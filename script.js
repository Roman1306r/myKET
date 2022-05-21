// Меню бургер

let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.menu__body');
let back = document.querySelector('body');
let header__list = document.querySelector('.menu__list');
header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}
header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}





// Табы

let tab1 = document.querySelector('.tabs__item1')
tab1.onclick = function (e) { tab1.classList.toggle('active');
tab2.classList.remove('active');
}

let tab2 = document.querySelector('.tabs__item2')
tab2.onclick = function (e) { tab2.classList.toggle('active');
tab1.classList.remove('active');
}
   



// PORTFOLIO FILTER


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("slider__item");
  if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// SLIDER


$(document).ready(function() {
  $('.artist__body').slick({
      arrows: true,  //Стрелким включены
      dots: false,   // точки включены
      adaptiveHeight: false,  //подстраивание точек и стрелок под каждый слайдер
      slidesToShow: 1,  //сколько слайдеров показано за раз 
      slidesToScroll: 1,  //Количество слайдов которое пролистывается при скроле
      speed: 600, //Скорость пролистывания слайдов
      easing: 'easy',  //Тип анимации при смене слайдов
      infinite: true, //Будет ли слайдер бесконечный
      initialSlide: 0, //Стартовыый слайдер
      autoplay: true,  //Будет ли он автоматически листаться
      autoplaySpeed: 2000, //Скорость автоматического листания
      pauseOnFocus: true, //пауза автопроигрывания при нажатии 
      pauseOnHover: true, //пауза автопроигрывания при наведении 
      pauseOnDotsHover: true, //пауза автопроигрывания при наведении на точки 
      draggable: true, //Можно свайпать на компе
      swipe: true, //Можно свайпать на телефоне
      touchThreshold: 5, //Какое растояние нужно просвайпить для смены слайда
      touchMove: true, //Нельзя тягать с места на место при false
      waitForAnimate: false, //Включает быстрое перелистывание при быстром нажатии на стрелки и точки
      centerMode: false, //Включает центрирование слайда, можно использовать вместе с opacity
      variableWidth: false, //размеры слайдов не регулируются, авто-адаптивность, можно использовать с centerMode
      rows: 1,  //Количество рядов слайдера по вертикали
      slidesPerRow: 1, //Количество рядов по горизонтали
      vertical: false, //Вертикальный слайдер
      verticalSwiping: false, //Вертикальный свайп в вертикальном слайдере
      fade: false, //Слайды не листаются а заменяются, слайд-шоу
  });
})








