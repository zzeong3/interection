const slider = document.querySelector('#slider');
const panel = slider.querySelector('.panel');
const panel_li = panel.querySelector('li');
const btns = slider.querySelectorAll('.btns li');
const ring = slider.querySelector('#ring');

btns.forEach((btn,index)=>{ //btn은 매개변수!!
    btn.addEventListener('click', (e)=>{ // 여기서 btn으로 각 대상을 이벤토르로 잡아 주고 있다  // e는 링크를 막기 위한 매개변수 (지역함수)
        e.preventDefault();

        // 함수재이벤트방지
        let isOn = e.currentTarget.classList.contains('on') ;
        // contain 존재의 유무를 물어본다. 결과값을 boolean값으로 변환한다.
       // on이 있니없니
        if (isOn) return;  // 조건문
        activation(index); // 함수 연결!! (붕어빵 틀)

    })
})

/*
    함수패키징 : 이벤트 함수 분리
    (함수 : 자주 사용하는 코드를 묶어두는 행위)
    의존성이 있는 애들끼리 묶어버림 -> 코드를 효율적으로 사용할수있는 행위
*/

function activation(index) {
    // 함수패키징 매개 변수가 없다!! -> 매개변수 index 하나로 극뽁!
    for(let el of btns){ //btns의 각각 요소를 el로 매개변수 (지역함수)
        el.classList.remove('on');
    };
    btns[index].classList.add('on');

    new Anim(panel, {
        prop : 'margin-left',
        value : -100 * index + '%',
        duration: 500
    });

    // ring안에 있는 클래스를 제거한다.
    ring.className = ' ';

    // 제거된 부분에 클랙스를 부여한다.
    ring.classList.add('rot' + index);
}