export function handleBtn() {
    const accordeon = document.querySelector('.accordeon');
    const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

    accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
        accordeonTitle.addEventListener('click', function () {

            const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

            accordeonTitle.classList.toggle('accordeon__title--active');
            currentText.classList.toggle('accordeon__text--visible');

            currentText.classList.contains('accordeon__text--visible')
            ? currentText.style.maxHeight = currentText.scrollHeight + 'px'
            : currentText.style.maxHeight = null

        });
    });
} 
