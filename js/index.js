const elems = document.querySelector('*');
const img = document.querySelectorAll('img');
const busImg = document.querySelector('.home .intro img');
const heading1 = document.querySelector('h1');
busImg.addEventListener('load', event => busImg.style.border = '8px dashed red');
img.forEach(element => {
    element.addEventListener('mouseover', event => element.style.transform = 'scale(1.2)');
    element.addEventListener('mouseout', event => element.style.transform = 'none');
});
document.addEventListener('keydown', event => {
    if (event.key === 'i') {
        if (elems.style.color === 'blue') {
            elems.style.color = null;
        } else {
            elems.style.color = 'blue';
        }
    }
});
heading1.addEventListener('wheel', event => {
    if (event.deltaY > 0) {
        heading1.style.fontSize = '5rem';
    } else {
        heading1.style.fontSize = null;
    }
});
heading1.addEventListener('dblclick', event => heading1.textContent = 'DOUBLE CLICK BUS');
heading1.addEventListener('click', event => heading1.textContent = 'Single Click Bus');