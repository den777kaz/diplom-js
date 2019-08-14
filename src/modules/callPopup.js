const callPopup = () => {
    const callBtn = document.querySelectorAll('.call-btn'),
        discountBtn = document.querySelectorAll('.discount-btn'),
        discountBtnCalc = document.querySelectorAll('.discount-btn-calc'),
        checkBtn = document.querySelectorAll('.check-btn'),
        consultationBtn = document.querySelectorAll('.consultation-btn'),
        popupCall = document.querySelector('.popup-call'),
        popupDiscount = document.querySelector('.popup-discount'),
        popupDiscountCalc = document.querySelector('.popup-discount-calc'),
        popupCheck = document.querySelector('.popup-check'),
        popupConsultation = document.querySelector('.popup-consultation');


    const clickBtn = (btn, pop) => {
        btn.forEach((item) => {
            item.addEventListener('click', () => {
                pop.style.display = 'block';
            });
        });
    };

    clickBtn(callBtn, popupCall);
    clickBtn(discountBtn, popupDiscount);
    clickBtn(checkBtn, popupCheck);
    clickBtn(consultationBtn, popupConsultation);
    clickBtn(discountBtnCalc, popupDiscountCalc);




    const popupClose = (popup) => {

        popup.addEventListener('click', (event) => {
            
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                event.preventDefault();
                
                popup.style.display = '';
            } else {

                target = target.closest('.popup-dialog');

                if (!target) {

                    popup.style.display = 'none';

                }
            }
        });
    };
    popupClose(popupCall);
    popupClose(popupDiscount);
    popupClose(popupDiscountCalc);
    popupClose(popupCheck);
    popupClose(popupConsultation);

};
export default callPopup;