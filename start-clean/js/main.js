var menuact = document.querySelector('.btn');
var menuList = document.querySelector('.mens__list');

menuact.addEventListener('click', ()=>{
    menuList.classList.toggle('mens__list__open')
});