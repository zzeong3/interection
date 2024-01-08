//console.log(window);
/*
    BOM (브라우저 모델의 객체) - window, document, screen
        window.onload 이벤트 웹 브러우저의 모든 객체가 로드가 되었을때 실행한다.
    DOM (문서 모델)
*/

window.addEventListener('load', ()=>{
    const grid= new Isotope('section', { //배치할 요소를 감싼 부모요소명
        itemSeletor: 'article', //배치할 요소명
        columWidth: 'article', // 너비값 구할 요소명
        transitionDuration: '0.5s', // 재배치시 요소가 움직이는 속도. 부드럽게
    });

    const btns = document.querySelectorAll('main ul li');

    for(let el of btns) {
        el.addEventListener('click', (e)=>{
            e.preventDefault();

            const sort = e.currentTarget.querySelector('a').getAttribute('href');

            grid.arrange({
                filter : sort // 우리가 정한 필터로 너의 기준대로 정리해서 배열해서 사용자한테 보여줘
            });

            // 버튼활성화 코드
            // 모든 버튼은 반복을 돌면서 비활성화시킨 뒤
            for(let el of btns) {
                // 각각의 요소의 활성화 클래스를 제거함
                el.classList.remove('on');
            }
            // 내가 클릭한 그 버튼만 활성화 클래스를 붙인다.
            e.currentTarget.classList.add('on');
        })
    }
})




