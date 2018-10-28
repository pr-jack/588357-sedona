'use strict';

var navMain = document.querySelector('.main-nav');
var navButtonOpen = document.querySelector('.page-header__button');
var navButtonClose = navMain.querySelector('.main-nav__toggle');
var headerBurger = document.querySelector('.page-header__burger');

  navButtonOpen.addEventListener('click', function() {

    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerBurger.classList.add('page-header__burger--hidden');
  });

  navButtonClose.addEventListener('click', function() {

    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    headerBurger.classList.remove('page-header__burger--hidden');
  });
