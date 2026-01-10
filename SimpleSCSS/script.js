// const button = document.getElementById('myButton')

const button = document.querySelector('.buttonClass')

button.addEventListener('click', () => {
    alert('Button was clicked!');
});

const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    navigation:{
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
    })