const accordion = () => {

    const accordionGroup = document.getElementById('accordion-two'),
        panelHead = document.querySelectorAll('.panel-heading'),
        panelText = document.querySelectorAll('.panel-collapse');


    const toggleTabContent = (index) => {
        for (let i = 0; i < panelText.length; i++) {
            if (index === i) {
                panelText[i].style.display = 'block';
            } else {
                panelText[i].style.display = 'none';
            }
        }
    };
    
    accordionGroup.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;
        target = target.closest('.panel-heading');
        
        if (target.classList.contains('panel-heading')) {
            panelHead.forEach((item, i) => {
                if (item === target) {
                    toggleTabContent(i);
                }
            });
        }
       
    });


};


export default accordion;