const navBar = document.querySelector('nav');
const OpenBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');

console.log(navBar, OpenBtn);

OpenBtn.addEventListener('click', () => {
    navBar.style.display = 'flex';
    OpenBtn.style.display = 'none';
    closeBtn.style.display = 'inline'; 
});

closeBtn.addEventListener('click', () => {
    navBar.style.display = 'none';
    closeBtn.style.display = 'none'; 
    OpenBtn.style.display = 'inline'; 
});
