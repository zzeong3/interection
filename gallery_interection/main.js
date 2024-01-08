const gallery = document.querySelector('.gallery');
const btn = gallery.querySelector('button');

btn.addEventListener('click', ()=>{
    gallery.classList.toggle('on');
})