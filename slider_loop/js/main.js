
const slider = document.querySelector('#slider');
const ul = slider.querySelector('ul');
const lis = ul.querySelectorAll('li');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let len = lis.length; // li 길이를 len에 담아줌
let enalbeClick = true; //클릭이 되어야하니까 true

init(); //초기화 함수

//next 클릭 할때
next.addEventListener('click', (e)=>{
    e.preventDefault(); // a태그 링크 막아주기

    // 클릭하는 동안 재이벤트 방지문
    if(enalbeClick) {
        enalbeClick = false; // if문에 막혀서 클릭안돼!
        nextSlider(); //nextSlider 함수 실행
    }

})

//prev 클릭 할때
prev.addEventListener('click', (e)=>{
    e.preventDefault(); // a태그 링크 막아주기

    // 클릭하는 동안 재이벤트 방지문
    if(enalbeClick) {
        enalbeClick = false; // if문에 막혀서 클릭안돼!
        prevSlider(); //prevSlider 함수 실행
    }
})

//초기화 함수 : li 1번이 먼저 앞으로 가게 하는
function init(){
    ul.style.left = '-100%'; // ul li의 초기 값 지정. loopslider는 프레임을 기준으로 양쪽에 적어도 한개 이상의 패널 li가 있어야 하기 떄문에
    ul.prepend(ul.lastElementChild); //로딩 후 1번 li가 frame에 보일수 있도록 마지막 li를 앞에 붙임으로 1번이 첫번째가 아닌 두번째에 위치 시킨다.
    ul.style.width = `${100 * len}%`; // ul너비값 li 갯수를 맞춰서 자동 계산해주는 것 
    // 변수를 변수가 아닌 처럼 보이게  ``으로 감싸기
    lis.forEach((el)=>{
        el.style.wdith = `${100 / len}%`; // 각 li의 너비값을 자동으로 계산해준다.
    })
}

function nextSlider(){
    new Anim(ul, { //anim.js를 ul에 쓸게
        prop : 'left',
        value : '-200%', // left:-100%인걸 left -100% 더 앞으로 땡기기
        duration : 1000, // 속도
        callback : ()=>{ // left:-200%로 움직이고 나서 콜백함수 실행
            ul.style.left = '-100%'; //-200%된것을 초기화
            ul.append(ul.firstElementChild); // ul 첫번째 자식요소 맨뒤로 삽입
            enalbeClick = true; //모션이 끝나고 enalbeClick을 true로 변경. 다시 클릭(이벤트실행)이 되어야하니까.
        }
    })
}

function prevSlider(){
    new Anim(ul, { //anim.js를 ul에 쓸게
        prop : 'left',
        value : '0%', //left:-100%인걸 left:0으로 줘서 뒤로 물러나게
        duration : 1000,
        callback : ()=>{ //left:0로 움직이고 나서 콜백함수 실행
            ul.style.left = '-100%'; //0% 된것을 초기화
            ul.prepend(ul.lastElementChild); //ul 마지막 자식요소 맨앞으로 삽입
            enalbeClick = true; //모션이 끝나고 enalbeClick을 true로 변경. 다시 클릭(이벤트실행)이 되어야하니까.
        }
    })
}




//데이터 불러오는 방법
// let article = document.getElementById('pic1');

// article.dataset.indexNumber
// article.dataset.parent


/*
BOM : 브라우저
DOM : 문서

DOM구조 변경 - 문서(html) 기존의 구조를 js를 통해 변경시키는 것.
부모요소명.append(자식요소)
=> 부모요소 안쪽의 가장 뒤쪽에 자식요소를 삽입
부모요소명.prepend(자식요소)
=> 부모요소 안쪽의 가장 앞쪽에 자식요소를 삽입

loop slider의 경우
프레임을 기준으로 양쪽에 적어도 한개이상의 패널 li가 있어야한다.
따라서 패널 li는 적어도 3개 이상이여야 loop가 가능하다.

1. 초기 ul의 위치값 left 혹은 margin-left 값을 -100%로 설정한다.

2. 슬라이드 기본모션
prev 버튼을 클릭하면 ul left : -100%에서 0%로 이동
next 버튼을 클릭하면 ul left : -100%에서 -200%로 이동

3. 이동이 끝난뒤 - 콜백
앞이나 뒤에 쌓인 패널 li를 다시 ul의 안쪽 앞이나 뒤에 재배치 해야한다.

4. ul의 초기 위치 maring-left 또는 left 값을 -100으로 초기화 해야한다.

*/