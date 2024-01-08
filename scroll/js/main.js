// const h1 = document.querySelector('h1');
// 브라우저 스크롤 (BOM) 현재 스크롤 거리값을 구해서 h1에 출력해줄것

const sections = document.querySelectorAll('section');
const lis = document.querySelectorAll('ul li');
const box2_p = document.querySelector('p');

let posArr = []; // 빈배열을 만들어주고
const base = -300; //top값을 올려(-) 모션을 미리 나오게 하자
/*
.offsetTop : 각 요소의 세로 위치값으로 처음 시작점을 나타내준다.
 */
// const posBox1 = sections[0].offsetTop; // 0
// const posBox2 = sections[1].offsetTop; // 1000
// const posBox3 = sections[2].offsetTop; // 1700
// const posBox4 = sections[3].offsetTop; // 2600

// console.log(posBox1);
// console.log(posBox2);
// console.log(posBox3);
// console.log(posBox4);

// 각 섹션의 갯수만큼 반복을 돌면서 posArr에 offsetTop 주기
for (let el of sections) {
    // posArr 배열에 각 요소의 세로 위치값을 push로 저장한다.
    posArr.push(el.offsetTop); // posArr 배열에 pus로 마지막 값으로 추가
}
//console.log(posArr);

//버튼을 클릭했을때
lis.forEach((el, index)=>{ // 매개변수는 통로를 만들어주는것ㅠㅠ
    el.addEventListener('click', (e)=>{
        new Anim(window, {
            prop : "scroll",
            value : posArr[index],
            duration : 500
        });

        // 모든 버튼을 반복을 돌면서 on을 제거하여 비활성화 하고
        // for(let el of lis) {
        //     el.classList.remove('on');
        // }
        //클릭한 버튼만 on을 추가하여 활성화
        /*
        lis[index] : lis[0], lis[1], lis[2]..
        el : 처음 반복을 돌릴때 각각의 요소라는 el의 매개변수이기 때문에 사용가능
        e.currenTarget = el // 이벤트리스너를 붙여준 그 대상을 콕 집을 수 있어서 사용가능 하다.
        */
        e.currentTarget.classList.add('on');
    })
})

// 스크롤 계산 되면서 on 활성화
window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY || window.pageYOffset

    /*
    열심히 스크롤한 부근 => 이부근까지 scroll 대충 700
    posArr[1] = 1000
    */
    box2_p.style.left = `${scroll - posArr[1] + 300}px`;
    // scroll값은 우리가 열심히 스크롤 할수록 쭉 늘어나는 값
    // posArr[1] = 고정값 1000
    // 300이라는 값은 좀더 일찍 위해서 내맘대로 넣은 값!
    
    //scrollY, pageYOffset : 문서가 수직으로 y축의 값으로 얼마나 스크롤 되었는지 픽셀단위로 변환해주는 값 
    //scrollY 초기버전, 익스9이전에는 적용이 안됨
    //pageYOffset 최신버전

    sections.forEach((el, index)=>{
        if (scroll >= posArr[index] + base) { 
            // section에 on클래스를 현재 활성화 되어있는 스크롤 값에만 활성화시키고 아닌 부분에서는 제거함
            lis.forEach((li,index)=>{
                li.classList.remove('on');
                sections[index].classList.remove('on'); //자기 자신 index를 받아옴
            })

            // section에 on클래스를 붙이기만 하고 띄지는 않는
            // for(let el of lis) {
            //     el.classList.remove('on');
            //     sections[index].classList.remove('on');// 이 지역에서는 매개변수로 index를 받지 않아서 index를 찾지 못한다. = 효과가 없다
            // }

            // li on 활성화
            lis[index].classList.add('on');

            //해당 순번의 section에 on 활성화
            sections[index].classList.add('on');
        }   
    })

    

    // if(scroll>= posArr[0] && scroll<posArr[1]) {
    //     // 모든 구간에서의 on을 지우는 코드
    //     for(let el of lis) {
    //         el.classList.remove('on');
    //     }
    //     // lis[0]에 on을 붙임
    //     lis[0].classList.add('on');
    // }

    // if(scroll>=posArr[1] && scroll<posArr[2]) {
    //      // 모든 구간에서의 on을 지우는 코드
    //      for(let el of lis) {
    //         el.classList.remove('on');
    //     }
    //     // lis[0]에 on을 붙임
    //     lis[1].classList.add('on');
    // }

    // if(scroll>=posArr[2] && scroll<posArr[3]) {
    //      // 모든 구간에서의 on을 지우는 코드
    //      for(let el of lis) {
    //         el.classList.remove('on');
    //     }
    //     // lis[0]에 on을 붙임
    //     lis[2].classList.add('on');
    // }

    // if(scroll>=posArr[3]) {
    //      // 모든 구간에서의 on을 지우는 코드
    //      for(let el of lis) {
    //         el.classList.remove('on');
    //     }
    //     // lis[0]에 on을 붙임
    //     lis[3].classList.add('on');
    // }

}) 
