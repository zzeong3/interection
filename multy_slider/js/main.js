const slider = document.querySelector('#slider');
const slider2 = document.querySelector('#slider2');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let enalbeClick = true;

// 동일한 기능을 복수개 이상의 요소에 적용해야 할대는 자주 쓰는 기능을 함수로 미리 정의하고, 호출한다
// 전역변수로 둘것과 지역변수로 선언되어야 하는 것들을 구분해야한다.

init(slider);
init(slider2);

next.addEventListener('click', (e)=>{
    e.preventDefault();

    if(enalbeClick) {
        enalbeClick = false; 
        nextSlide(slider);
        nextSlide(slider2);
    }
})


prev.addEventListener('click', (e)=>{
    e.preventDefault();

    if(enalbeClick) {
        enalbeClick = false;
        prevSlide(slider);
        prevSlide(slider2);
    }
})


// 초기화 ul2와  li2를 동시에 잡기
function init(frame) {
    // 지역변수로
    const ul = frame.querySelector('ul');
    const lis = ul.querySelectorAll('li');
    const len = lis.length;

    ul.style.left = '-100%';
    ul.prepend(ul.lastElementChild); //1번 li가 맨앞에 올수있게 맨 뒤에있는 li이 앞에 가져다 붙임
    ul.style.width = `${100 * len}%`;
    lis.forEach((el)=>{
        el.style.width = `${100 / len}%`;
    })
}

function prevSlide(frame) {
    const ul = frame.querySelector('ul');

    new Anim(ul, {
        prop : 'left',
        value : '0%',
        duration: 1000,
        callback : ()=>{
            ul.style.left = '-100%';
            ul.prepend(ul.lastElementChild);
            enalbeClick = true;
        }
    })
}

function nextSlide(frame) {
    const ul = frame.querySelector('ul');
    
    new Anim(ul, {
        prop : 'left',
        value : '-200%',
        duration: 1000,
        callback : ()=>{
            ul.style.left = '-100%';
            ul.append(ul.firstElementChild);
            enalbeClick = true;
        }
    })
}

