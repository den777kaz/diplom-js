'use strict';

import test from './modules/test';
test();


import callPopup from './modules/callPopup';
callPopup();

import accordion from './modules/accordion';
accordion();

import moreInfo from './modules/moreInfo';
moreInfo();

import konstruktor from './modules/konstruktor';
konstruktor();

import calculator from './modules/calculator';
calculator();

import sendForm from './modules/sendForm';
sendForm();

import validation from './modules/validation';
validation();


const errorMessage = 'Something was wrong',
    loadMessage = 'Loading...',
    successMessage = 'thank you! We will contact you shortly!';

const statusMessage = document.createElement('div');
statusMessage.textContent = '';
statusMessage.style.cssText = 'font-size: 1.2rem;';
const callPopupForm = document.getElementById('call-popup-form');