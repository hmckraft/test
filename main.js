// holder place for javascript
let btnList = document.getElementsByTagName('button');
let btn = btnList[0];

let boxList = document.getElementsByClassName('box');
let box = boxList[0];

let isBoxShowing = false;

btn.addEventListener('click', () => {
    console.log('isBoxShowing', isBoxShowing)
    if (isBoxShowing) {
        box.style.display = 'none';
        isBoxShowing = false;
    } else {
        box.style.display = 'block';
        isBoxShowing = true;
    }
});
