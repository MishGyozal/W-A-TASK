

let categoryBool = false;
const categoryBtn = document.querySelector('.categoryBtn');
const categoryUl = document.querySelector('.categoryUl');
const iconDown = document.querySelector('.iconDown');
const iconUp = document.querySelector('.iconUp');


const changeClass = (bool, btn, ul, upIcon ,downIcon) => {
    if(bool){
        btn.classList.add('blueColor');
        ul.classList.remove('noneDisplay');
        upIcon.classList.remove('noneDisplay');
        downIcon.classList.add('noneDisplay');
    }else {
        btn.classList.remove('blueColor');
        ul.classList.add('noneDisplay');
        upIcon.classList.add('noneDisplay');
        downIcon.classList.remove('noneDisplay');
    }
}

categoryBtn.onclick = () => {
    categoryBool = !categoryBool;
    changeClass(categoryBool,categoryBtn,categoryUl,iconUp,iconDown)
}

let filterBool = false;
const filterBtn = document.querySelector('.filterBtn');
const filterUl = document.querySelector('.filterUl');
const iconDownFilter = document.querySelector('.iconDownFilter');
const iconUpFilter = document.querySelector('.iconUpFilter');


filterBtn.onclick = () => {
    filterBool = !filterBool;
    changeClass(filterBool,filterBtn,filterUl,iconUpFilter,iconDownFilter)
}


