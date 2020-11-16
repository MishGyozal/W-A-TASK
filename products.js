const closeMenu = document.querySelector('.closeDiv');
const openMenu = document.querySelector('.menuBtn');
const menu = document.querySelector('.menuClose');
const menuContainer = document.querySelector('.menuContainer');

openMenu.onclick = () => {
    menu.style.width = '512px';
    closeMenu.style.display = 'block';
    menuContainer.style.display = 'flex';

}

closeMenu.onclick = () => {
    menu.style.width = '0px'
    closeMenu.style.display = 'none';
    menuContainer.style.display = 'none';


}