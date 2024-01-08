const boxs = document.querySelectorAll('section article');
const btns = document.querySelectorAll('ul li');
const h1 = document.querySelector('h1');
const distance = 3000;

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  h1.innerText = scroll;

  boxs.forEach((box, idx) => {
    box.style.transform = `translateZ(${-distance * idx + scroll}px)`;

    if (scroll >= idx * distance) {
      for (const btn of btns) btn.classList.remove('on');
      for (const box of boxs) box.classList.remove('on');
      btns[idx].classList.add('on');
      boxs[idx].classList.add('on');
    }
  })
})

btns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    console.log(idx);

    new Anime(window, {
      prop: 'scroll',
      value: 3000 * idx,
      duration: 500
    })
  })
})