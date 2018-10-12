var navMain = document.querySelector('.main-nav');
  var navButtonOpen = document.querySelector('.page-header__button');
    var navButtonClose = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navButtonOpen.addEventListener('click', function() {

      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
  });

/*---  с кнопкой закрытия не получается---
      navButtonClose.addEventListener('click', function(){
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
  });
