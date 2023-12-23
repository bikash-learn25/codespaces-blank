let main = document.querySelector('main');
let div = document.querySelector('div');

main.addEventListener('mousemove', (e) => {
    div.style.left = e.x + 'px';
    div.style.top = e.y + 'px';
});