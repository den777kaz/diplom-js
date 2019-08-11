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
        callPopupForm = document.getElementById('call-popup-form'),
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
    allForm(consultPopupForm);
    allForm(checkPopupForm);
    allForm(discPopupForm);
    allForm(callPopupForm);
    allForm(questionForm);
    allForm(discForm);
    allForm(consulOrderForm);










    


};
export default sendForm;


