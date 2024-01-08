// const pannel_li = document.querySelectorAll('#slider .pannel li');
// const btns = document.querySelectorAll('.btns li');
// document를 다 돌아야함

const frame = document.querySelector('#slider');
const panel = frame.querySelector('.panel');
const panel_li = panel.querySelectorAll ('li');
const btns =  frame.querySelectorAll('.btns li');

// btn의 갯수 만큼 반복을 돌면서 btns li에 이벤트를 연결
btns.forEach(function(btn, index){// btn 매개변수 하나하나
    btn.addEventListener('click', function(e){
        e.preventDefault();

        // 모든 버튼을 반복 돌려면서 비활성화
        for (el of btns) {
            el.classList.remove('on');
        }
        // 클릭한 순번(index)!!의 버튼만 활성화
        btns[index].classList.add('on');

        //anime.js 불러오기
        new Anim (panel, {
            prop : 'margin-left',
            value : -100 * index +'%', //인덱스와 넓이를 곱해서 이동
            duration :500
        })

    }) 
})