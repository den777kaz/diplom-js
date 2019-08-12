const konstruktor = () => {


    const panelGroup = document.getElementById('accordion'),
        headPanels = document.querySelectorAll('.panel-head'),
        construktBtn = document.querySelectorAll('.construct-btn');

    // TEXTPANELS
    const textPanels = document.querySelectorAll('.text-panels'),
        collapseOne = document.getElementById('collapseOne'),
        collapseTwo = document.getElementById('collapseTwo'),
        collapseThree = document.getElementById('collapseThree'),
        collapseFour = document.getElementById('collapseFour');

    const nextTab = () => {
        // next-btn-one
        construktBtn.forEach((item) => {
            item.addEventListener('click', (event) => {
                let target = event.target;
                event.preventDefault();
                if (target.closest('.next-btn-one')) {

                    collapseTwo.style.display = 'block';
                    collapseOne.style.display = 'none';

                } else if (target.closest('.next-btn-two')) {

                    collapseThree.style.display = 'block';
                    collapseTwo.style.display = 'none';

                } else if (target.closest('.next-btn-three')) {

                    collapseFour.style.display = 'block';
                    collapseThree.style.display = 'none';
                }
            });

        });

    };
    nextTab();


    const switchContent = (index) => {
        for (let i = 0; i < textPanels.length; i++) {
            if (index === i) {
                textPanels[i].style.display = 'block';
            } else {
                textPanels[i].style.display = 'none';
            }
        }
    };

    panelGroup.addEventListener('click', (event) => {

        let target = event.target;

        target = target.closest('.panel-head');

        if (!target) {
            return;
        } else {
            event.preventDefault();
            headPanels.forEach((item, i) => {
                if (item === target) {
                    switchContent(i);
                }
            });
        }
    });

};
export default konstruktor;