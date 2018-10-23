'use strict';

var navButtonOpen = document.querySelector('.page-header__button');
var navButtonClose = navMain.querySelector('.main-nav__toggle');
var navMain = document.querySelector('.main-nav');

  navButtonOpen.addEventListener('click', function() {

    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  });

  navButtonClose.addEventListener('click', function() {

    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  });
