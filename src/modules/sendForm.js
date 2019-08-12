const sendForm = () => {
    const errorMessage = 'Something was wrong',
        loadMessage = 'Loading...',
        successMessage = 'thank you! We will contact you shortly!';

    const statusMessage = document.createElement('div');
    statusMessage.textContent = '';
    statusMessage.style.cssText = 'font-size: 1.2rem;';

    const consultPopupForm = document.getElementById('consult-popup-form'),
        checkPopupForm = document.getElementById('check-popup-form'),
        discPopupForm = document.getElementById('discount-popup-form'),
        discForm = document.getElementById('discForm'),
        questionForm = document.getElementById('question-form'),
        consulOrderForm = document.getElementById('consul-order-form');


    const allForm = (formName) => {

        formName.addEventListener('submit', (event) => {
            event.preventDefault();
            formName.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(formName);

            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

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

            formName.reset();
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
    // allForm(callPopupForm);
    // allForm(questionForm);
    // allForm(consultPopupForm);
    allForm(checkPopupForm);
    allForm(discPopupForm);

    allForm(discForm);
    allForm(consulOrderForm);

    //------------ 2 forms together --------------------
    const formTogether = () => {
        let formObj1,
            formObj2;
        questionForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(questionForm);
            formObj1 = {};

            formData.forEach((val, key) => {
                formObj1[key] = val;
            });
            questionForm.reset();
        });
        consultPopupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            consultPopupForm.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(consultPopupForm);
            formObj2 = {};
            formData.forEach((val, key) => {
                formObj2[key] = val;


            });
            let body = {
                ...formObj1,
                ...formObj2
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

            consultPopupForm.reset();
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
    formTogether();

};
export default sendForm;