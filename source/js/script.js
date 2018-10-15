'use strict';

var navMain = navMain.querySelector('.main-nav');
var navButtonOpen = navMain.querySelector('.page-header__button');
var navButtonClose = navMain.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navButtonOpen.addEventListener('click', function() {

      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
  });

