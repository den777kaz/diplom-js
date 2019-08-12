const calculator = () => {

    // Switch Buttons
    const onOff = document.getElementById('myonoffswitch'),
        onOffTwo = document.getElementById('myonoffswitch-two');

    //  All Selects and Inputs
    const allSelects = document.querySelectorAll('.expand'),
        distance = document.getElementById('distance'),
        calcResult = document.getElementById('calc-result');

    // Selects
    const diameterOne = document.querySelector('.diameter-one'),
        diameterTwo = document.querySelector('.diameter-two'),
        ringAmountOne = document.querySelector('.ring-amount-one'),
        ringAmountTwo = document.querySelector('.ring-amount-two');

    // START
    const startBtn = document.getElementById('send-data');

    // SWITCH ONE OR TWO
    const switchBarrel = () => {

        allSelects[2].disabled = true;
        allSelects[3].disabled = true;

        if (onOff.checked) {
            allSelects[2].disabled = true;
            allSelects[3].disabled = true;
        } else if (onOff.checked === false) {
            allSelects[2].disabled = false;
            allSelects[3].disabled = false;
        }
    };
    switchBarrel();


    const calcData = {
        totalResult: 0,
        oneBarrelPrice: 10000,
        twoBarrelPrice: 15000,
        pitOne: 1000,
        pitTwo: 2000,
        diameterBarrelOne: '',
        diameterBarrelTwo: '',
        amountBarrelOne: '',
        amountBarrelTwo: '',
        ringPrice: 0,
        ringPriceTwo: 0,
        diameterPrice: 0,
        diameterPriceTwo: 0,
        pitPrice: 0,
        pit: true,
        distance: 0,
        start: function () {

            this.getDiameterAmountOne();
            this.getDiameterAmountTwo();
            this.pitBarrel();
            this.showResult();

            //-----------------  SEND OBJECT TO SERVER----------------
            // let body = calcData;
            // this.postData(body)
            //     .then((response) => {
            //         if (response.status !== 200) {
            //             throw new Error('status network not 200!');
            //         }
            //         //console.log(response);

            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     });




        },
        postData: function (body) {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/html'
                },
                body: JSON.stringify(body)
            });
        },
        getDiameterAmountOne: function () {
            const diameterValue = diameterOne.options[diameterOne.selectedIndex];
            const ringsValue = ringAmountOne.options[ringAmountOne.selectedIndex];

            // FIRST 

            if (diameterValue.index === 1) {
                this.diameterBarrelOne = diameterValue.text;
                this.diameterPrice = this.oneBarrelPrice * 0.2;
            } else {
                this.diameterBarrelOne = diameterValue.text;
                this.diameterPrice = 0;
            }

            if (ringsValue.index === 1) {
                this.ringPrice = this.oneBarrelPrice * 0.3;
                this.amountBarrelOne = ringsValue.text;
            } else if (ringsValue.index === 2) {
                this.amountBarrelOne = ringsValue.text;
                this.ringPrice = this.oneBarrelPrice * 0.5;
            } else if (ringsValue.index === 0) {
                this.amountBarrelOne = ringsValue.text;
                this.ringPrice = 0;
            }

        },
        getDiameterAmountTwo: function () {

            const diameterValueTwo = diameterTwo.options[diameterTwo.selectedIndex];
            const ringsValueTwo = ringAmountTwo.options[ringAmountTwo.selectedIndex];
            if (onOff.checked) {
                this.diameterBarrelTwo = '';
                this.amountBarrelTwo = '';
            } else {
                if (diameterValueTwo.index === 1) {
                    this.diameterPriceTwo = this.twoBarrelPrice * 0.2;
                    this.diameterBarrelTwo = diameterValueTwo.text;
                } else {
                    this.diameterPriceTwo = 0;
                    this.diameterBarrelTwo = diameterValueTwo.text;
                }
                if (ringsValueTwo.index === 1) {
                    this.ringPriceTwo = this.twoBarrelPrice * 0.3;
                    this.amountBarrelTwo = ringsValueTwo.text;
                } else if (ringsValueTwo.index === 2) {
                    this.ringPriceTwo = this.twoBarrelPrice * 0.5;
                    this.amountBarrelTwo = ringsValueTwo.text;
                } else if (ringsValueTwo.index === 0) {
                    this.ringPriceTwo = 0;
                    this.amountBarrelTwo = ringsValueTwo.text;
                }
            }

        },
        pitBarrel: function () {
            if (onOffTwo.checked) {
                this.pit = true;
                if (onOff.checked) {
                    this.pitPrice = this.pitOne;

                } else {
                    this.pitPrice = this.pitTwo;
                }
            } else {
                this.pitPrice = 0;
                this.pit = false;
            }
        },
        showResult: function () {



            if (onOff.checked) {
                this.totalResult = this.oneBarrelPrice + this.diameterPrice + this.ringPrice + this.pitPrice;
            } else if (!onOff.checked) {
                this.totalResult = this.oneBarrelPrice + this.twoBarrelPrice + this.diameterPrice +
                    this.ringPrice + this.diameterPriceTwo + this.ringPriceTwo + this.pitPrice;
            }
            calcResult.value = this.totalResult;
            this.distance = distance.value;
        }
    };

    startBtn.addEventListener('click', calcData.start.bind(calcData));
    onOff.addEventListener('change', switchBarrel);

    console.log(calcData);

    // SEND FORM WITH calcData
    const caclDataSend = () => {
        const errorMessage = 'Something was wrong',
            loadMessage = 'Loading...',
            successMessage = 'thank you! We will contact you shortly!';

        const statusMessage = document.createElement('div');
        statusMessage.textContent = '';
        statusMessage.style.cssText = 'font-size: 1.2rem;';

        const callPopupForm = document.getElementById('call-popup-form');

        callPopupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            callPopupForm.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(callPopupForm);

            let obj = {};
            formData.forEach((val, key) => {
                obj[key] = val;
            });
            let body = {
                ...calcData,
                ...obj
            };
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200!');
                    }
                    //console.log(response);
                    statusMessage.textContent = successMessage;
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });

            callPopupForm.reset();
        });

        const postData = (body) => {

            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: JSON.stringify(body)
            });
        };

    };
    caclDataSend();

};





export default calculator;