export const accordeon = document.querySelector('.accordeon');
export const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

export default accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
    accordeonTitle.addEventListener('click', function () {

        const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

        accordeonTitle.classList.toggle('accordeon__title--active');
        currentText.classList.toggle('accordeon__text--visible');

        if (currentText.classList.contains('accordeon__text--visible')) {
            currentText.style.maxHeight = currentText.scrollHeight + 'px'
        } else {
            currentText.style.maxHeight = null
        }

    });
});