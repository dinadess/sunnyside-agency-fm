const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', function() {
    navigation.classList.toggle('active');
})