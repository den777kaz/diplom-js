
const moreInfo = () => {

    const moreBtn = document.querySelector('.add-sentence-btn'),
        hideItems = document.querySelectorAll('.hide-item');

    moreBtn.addEventListener('click', ()=>{
      
        hideItems.forEach(element => {
            element.classList.remove('hidden');
        });

        moreBtn.style.display = 'none';
    });
};












export default moreInfo;