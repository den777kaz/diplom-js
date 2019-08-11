const validation = () => {
    const inputsTel = document.querySelectorAll('.phone-user');
    console.log('inputsTel: ', inputsTel);
    inputsTel.forEach((item) => {
        const regTel = /[^\+0-9]/ig;
        item.addEventListener('input', () => {
            item.value = item.value.replace(regTel, '');
        });
    });

};

export default validation;