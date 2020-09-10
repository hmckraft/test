// holder place for javascript
 let btnList = document.getElementsByTagName('button');
 let btn = btnList[0];

let imgList = document.getElementsByClassName('img');
let img = imgList[0];



 let isimgShowing = false;

 btn.addEventListener('click', () => {
    console.log('isimgShowing', isimgShowing)
    if (isimgShowing) {
        img.style.display = 'none';
        isimgShowing = false;
     } else {
        img.style.display = 'block';
         isimgShowing = true;
    }
 });



