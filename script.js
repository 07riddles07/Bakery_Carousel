const back = document.querySelector('#back');
const next = document.querySelector('#next');

const pictures = ['images/1.jfif', 'images/2.jfif', 'images/3.jfif', 'images/4.jfif', 'images/5.jfif', 'images/6.jfif', 'images/7.jfif', 'images/8.jfif', 'images/9.jfif', 'images/10.jfif'];

let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > pictures.length - 1) {
        i = 0;
    }
    document.querySelector('#pictures').src = pictures[i];
});

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = pictures.length - 1;
    }
    document.querySelector('#pictures').src = pictures[i];
});
