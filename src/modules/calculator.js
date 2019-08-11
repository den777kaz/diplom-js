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


    // const calcData = {
    //     totalResult: 0,
    //     oneBarrelPrice: 10000,
    //     twoBarrelPrise: 15000,
    //     diameterBarrelOne: '',
    //     diameterBarrelTwo: '',
    //     amountBarrelOne: '',
    //     amountBarrelTwo: '',
    //     ringPrice: 0,
    //     ringPriceTwo: 0,
    //     diameterPrice: 0,
    //     diameterPriceTwo: 0,
    //     start: function () {
    //         this.getDiameterAmountOne();
    //         this.showResult();
    //     },
    //     getDiameterAmountOne: function () {
    //         const diameterValue = diameterOne.options[diameterOne.selectedIndex];
    //         const ringsValue = ringAmountOne.options[ringAmountOne.selectedIndex];
    //         const diameterValueTwo = diameterTwo.options[diameterTwo.selectedIndex].index;
    //         const ringsValueTwo = ringAmountTwo.options[ringAmountTwo.selectedIndex].index;
    //         console.log(diameterOne.options);
    //         // FIRST 

    //         diameterOne.addEventListener('change', ()=>{

    //                 if (diameterValue === 1) {
    //                     this.diameterBarrelOne = diameterValue.text;
    //                     this.diameterPrice = 10000 * 0.2;

    //                 } else {
    //                     this.diameterBarrelOne = diameterValue.text;
    //                     this.diameterPrice = 0;
    //                 }

    //         });
    //             if (diameterValue === 1) {
    //                 this.diameterBarrelOne = diameterValue.text;
    //                 this.diameterPrice = 10000 * 0.2;
    //                 console.log('this.diameterPrice: ', this.diameterPrice);


    //             } else {
    //                 this.diameterBarrelOne = diameterValue.text;
    //                 this.diameterPrice = 0;
    //             }



    //         if (diameterValue.index === 1) {
    //             this.diameterBarrelOne = diameterValue.text;
    //             this.diameterPrice = 10000 * 0.2;
    //             console.log('this.diameterPrice: ', this.diameterPrice);


    //         } else {
    //             this.diameterBarrelOne = diameterValue.text;
    //             this.diameterPrice = 0;
    //         }


    //         if (ringsValue.index === 1) {
    //             this.ringPrice = 10000 * 0.3;
    //             this.amountBarrelOne = ringsValue.text;
    //         } else if (ringsValue.index === 2) {
    //             this.amountBarrelOne = ringsValue.text;
    //             this.ringPrice = 10000 * 0.5;
    //         } else if (ringsValue.index === 0) {
    //             this.amountBarrelOne = ringsValue.text;
    //             this.ringPrice = 0;
    //         }


    //     },
    //     showResult: function () {
    //         this.result = this.oneBarrelPrice +  this.diameterPrice + this.ringPrice;

    //         calcResult.value = this.result;
    //     }


    // };

    // calcData.start();

    // console.log(calcData);


    // ringAmountOne.addEventListener('change', calcData.getDiameterAmountOne);
    // ringAmountTwo.addEventListener('change', calcData.getDiameterAmountOne);
    // diameterTwo.addEventListener('change', calcData.getDiameterAmountOne);
    // // onOffTwo.addEventListener('change', getResult);
    // // onOff.addEventListener('change', getResult);



    // WORKING BUT BAD CODE!!!!
    function getResult() {
        let result = 0;
        let oneBarrel = 10000;
        let twoBarrel = 15000;
        let hole = 0;
        let ringPrice;
        let ringPriceTwo;
        let diameterPrice;
        let diameterPriceTwo;


        const diameterValue = diameterOne.options[diameterOne.selectedIndex].index;
        const ringsValue = ringAmountOne.options[ringAmountOne.selectedIndex].index;
        const diameterValueTwo = diameterTwo.options[diameterTwo.selectedIndex].index;
        const ringsValueTwo = ringAmountTwo.options[ringAmountTwo.selectedIndex].index;


        // FIRST 
        if (diameterValue === 1) {
            diameterPrice = oneBarrel * 0.2;
        } else {
            diameterPrice = 0;
        }
        if (ringsValue === 1) {
            ringPrice = oneBarrel * 0.3;
        } else if (ringsValue === 2) {
            ringPrice = oneBarrel * 0.5;
        } else if (ringsValue === 0) {
            ringPrice = 0;
        }


        // SECOND

        if (diameterValueTwo === 1) {
            diameterPriceTwo = twoBarrel * 0.2;
        } else {
            diameterPriceTwo = 0;
        }
        if (ringsValueTwo === 1) {
            ringPriceTwo = twoBarrel * 0.3;
        } else if (ringsValueTwo === 2) {
            ringPriceTwo = twoBarrel * 0.5;
        } else if (ringsValueTwo === 0) {
            ringPriceTwo = 0;
        }


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



        //ON OFF 

        if (onOffTwo.checked) {

            if (onOff.checked) {
                hole = 1000;
                result = oneBarrel + diameterPrice + ringPrice + hole;
            } else {
                hole = 2000;
                result = oneBarrel + twoBarrel + diameterPrice + ringPrice + diameterPriceTwo + ringPriceTwo + hole;
            }
        } else {
            hole = 0;
        }

        // RESULT
        if (onOff.checked) {
            result = oneBarrel + diameterPrice + ringPrice + hole;
        } else if (!onOff.checked) {
            result = oneBarrel + twoBarrel + diameterPrice + ringPrice + diameterPriceTwo + ringPriceTwo + hole;
        }

        calcResult.value = result;
    }
    diameterOne.addEventListener('change', getResult);
    ringAmountOne.addEventListener('change', getResult);
    ringAmountTwo.addEventListener('change', getResult);
    diameterTwo.addEventListener('change', getResult);
    onOffTwo.addEventListener('change', getResult);
    onOff.addEventListener('change', getResult);
    getResult();
};





export default calculator;