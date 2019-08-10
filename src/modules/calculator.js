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




    function getResult() {
        let result = 0;
        let oneBarrel = 10000;
        let twoBarrel = 10000;
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
        const switchBarrel = ()=> {

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
           if(onOff.checked){
               hole = 1000;
           }else {
               hole = 2000;
           }
        } else {
            hole = 0;
        }

        // RESULT
        result = oneBarrel + diameterPrice + ringPrice + diameterPriceTwo + ringPriceTwo + hole;
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