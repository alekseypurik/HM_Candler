export const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
        }
    },
});
