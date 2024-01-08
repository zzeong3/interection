const dts = document.querySelectorAll('dt');
const dds = document.querySelectorAll('dd');
const dts_a = document.querySelectorAll('dl>a');

// 갯수만큼 반복을 돌면서
dts_a.forEach((el, index)=>{
    el.addEventListener('focusin', ()=>{
        activation(dts, index);
        activation(dds, index);
    })
})

// 이벤트를 붙임 'focusin'

// on를 모두 없앴다가

// 내가 클릭한 대상만 on을 붙여줌

// 클릭일때 이벤트
dts.forEach((dt, index)=>{
    dt.addEventListener('click', (e)=>{
        e.preventDefault();

        // 재이벤트 방지 구문 써주기

        activation(dts, index);
        activation(dds, index);
    })
})

function activation(arr, index) {
        for(let el of arr) {
            el.classList.remove('on');
        }
        arr[index].classList.add('on');
}

