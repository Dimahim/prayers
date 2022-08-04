$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
// Переменные  для попапа просмотра фотографий
// const popupElement = document.querySelectorAll('.popup');
// const elementPopupShowImage = document.querySelector('.popup__show_image');
// const buttonClosePopup =  document.querySelector('.popup__button');
// const imagePopupElement = document.querySelector('.popup__image');
// const elementImages = document.querySelectorAll('.description__image');
// const popupFigcaption = document.querySelector('.popup__figcaption');
const burgerMenu = document.querySelector('.header__burger');
const menuActive = document.querySelector('.menu');  

const logo = document.querySelector('.header__link');
const blockText = document.querySelector('.description__text');
const arrayBlockText = document.querySelectorAll('.description__content-text');
const descriptionArray = document.querySelectorAll('.description__array');
const arrayMenuBurger = document.querySelectorAll('.menu__click');

const formText = document.querySelector('#comment');
const buttonForm = document.querySelector('#submit');
const main = document.querySelector('.main');
const formTextArea = document.querySelector('.textarea__form');

//массив ссылок меню бургер
const linkSidebar = document.querySelectorAll('.page__links');

// темплейт элемент 
const templateElement = document.querySelector('.template-element');
const templateContainer = document.querySelector('.template-container');

//---------------------------------------------------------------------------------------------
//отрисовать элемент на странице
// arrayContent.forEach(function(element) {
//   const newItems = createText(element);
//   renderCards (newItems)
// })

//функция создания элемента
// function createText(element) {
//   // Клонируем шаблон темплэйт 
//   const newElement =  templateElement.content.querySelector('.template-element__continer').cloneNode(true);
//   // наполняем шаблон
//   const newElementTitle = newElement.querySelector('.template-element__title');
//   const newElementSubtitle = newElement.querySelector('.template-element__subtitle');
//   newElementTitle.innerHTML = element.title;
//   newElementSubtitle.innerHTML= element.subtitle;

//   return newElement
  
// };

// // функция добавление молитвы на страницу
// function renderCards (newtext) {
//   templateContainer.append(newtext);
// };
//----------------------------------------------------------------------------------------------

//функция удаления активного класса у блоков с молитвами
function removeActiveClass() {
  arrayBlockText.forEach(element => {
    element.classList.remove('description_active');
  });
  
}
//функция открытия  определенной молитвы
function openedBlockActive(element) {
  removeActiveClass();
  element.classlist.add('description_active')
}

//функция получение элемента 
function getAlementBlock(item) {
  let idItem = item.getAttribute('data-id');
  descriptionArray[idItem].classList.add('description_active');
  // const qwer = createText(arrayContent[idItem]);
  // renderCards (qwer);
}

// пробегаемся по меню и включаем нужный нам блок
linkSidebar.forEach(function(item) {
  item.addEventListener('click', function() {
    removeActiveClass();
    getAlementBlock(item);
  })
})

// пробегаемся по меню бургер и включаем нужный нам блок
arrayMenuBurger.forEach((item) => {
  item.addEventListener('click', () => {
    removeActiveClass();
    openedBurgerMenu();
    getAlementBlock(item);
  })
})

// функция открытия главной странице по клику на лого
function closeBlockText() {
  removeActiveClass();
  blockText.classList.add('description_active');
  menuActive.classList.remove('menu_active');
  burgerMenu.classList.remove('header__burger_active');
}
 
// слушатель по лого
logo.addEventListener('click', closeBlockText);


// Функция Меняем и открываем бургер меню
  function openedBurgerMenu() {
    burgerMenu.classList.toggle('header__burger_active');
    menuActive.classList.toggle('menu_active');
  }

  // Слушатель клика по меню 
  burgerMenu.addEventListener('click', openedBurgerMenu );

  //--------------------------------------------------------------------------------------------------- 
// Очистка формы
  function cleanForm () {
    formText.value= "";
  }

  //кликаем по кнопке и очищаем форму
  buttonForm.addEventListener('click', cleanForm);

  //функция закрытия бургер меню по документу
  function closeMenu() {
    if (menuActive.classList.contains('menu_active')) {
      menuActive.classList.remove('menu_active');
      burgerMenu.classList.remove('header__burger_active');
    };
  };

  //слушатель клика по документу закрытия меню бургер
  main.addEventListener('click', closeMenu);
  

  //---------------------------------------------------------------------------------------------------

// // добавляем всем элементам атирбуты дата id

// let i = 0 ;
// elementImages.forEach(function (item) {
//   item.setAttribute('data-id', i++);
// })

// // добавляем всем элементам класс
// elementImages.forEach(function (item) {
//   item.classList.add('photo-item');
// });


// //функция открытия попапа
// function openedPopup (popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closePopupEsc );
//   popup.addEventListener('mousedown', closePopupOverlay);
// };

// //функция закрытия попапа
// function closePopup (popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closePopupEsc );
//   popup.removeEventListener('mousedown', closePopupOverlay);
// };

// //функция открытия попапа по конкретной  карточке
// function showOpenPopup (event) {
//   imagePopupElement.src = event.target.src;
//   imagePopupElement.alt = event.target.alt;
//   popupFigcaption.textContent = event.target.alt;
//   imagePopupElement.data = event.target.getAttribute('data-id');
//   openedPopup (elementPopupShowImage);
  
  
// };

// //функция закрытия попапа по Ecc
// function closePopupEsc (evt) {
//   const key = evt.key;
//   if (key === 'Escape') {
//     popupElement.forEach(popup => {
//       closePopup (popup);
//     })
    
//   };
// };

// //функция закрытия по оверлею и крестику 
// function closePopupOverlay (evt) {
//   if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button_close_icon')) {
//     popupElement.forEach(popup => {
//       closePopup (popup);
//     })
//   }
// };

// //слушатель открытие попапа всех картинок
// elementImages.forEach(function (element) {
//   element.addEventListener('click', showOpenPopup )
// });

// //________________________________Перелистывание карточек__________________________________________

// const buttonLeft = document.querySelector('.popup__button-slider_place_left');
// const buttonRight = document.querySelector('.popup__button-slider_place_right');
// let containerImagePopup = document.querySelector('.popup__image');
// const images = document.querySelectorAll('.photo-item');





// function sliseImage () {
//   if (imagePopupElement.data >= images.length -1) {
//     imagePopupElement.data = -1;
//   };
//   imagePopupElement.data++ ;
//   popupFigcaption.textContent = images[imagePopupElement.data].alt ;
//   containerImagePopup.src = images[imagePopupElement.data].src;
// };

// function sliseImageLeft () {
//   if (imagePopupElement.data <= 0) {
//     imagePopupElement.data = images.length;
//   };
//   imagePopupElement.data-- ;
//   popupFigcaption.textContent = images[imagePopupElement.data].alt
//   containerImagePopup.src = images[imagePopupElement.data].src;
  
// };
 

// buttonRight.addEventListener('click',sliseImage);
// buttonLeft.addEventListener('click',sliseImageLeft);