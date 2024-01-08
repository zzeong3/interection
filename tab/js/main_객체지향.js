class Tab { //Tab이라는 프렌차이즈 내기 위한 붕어빵 틀 
    constructor(){
        this.init();
        this.bindingEvent();
    }

    init(){
        this.main = document.querySelector('main');
        //this. : 프랜차이즈점 위한 모두의 팥이 되어하기 때문에 this.를 붙인다.
        this.btns =  this.main.querySelectorAll('ul li');
        this.boxes =  this.main.querySelectorAll('section article');
        this.speed =  this.converSpeed(this.boxes[0]); // transition은 각 요소마다 있으니까
        this.enableClick = true; // 처음은 클릭 모두가 클릭되어야 하니가
    }
    
    bindingEvent(){
        // btns에 반복을 돌면서 (forEach)
        this.btns.forEach((btn, index)=>{
            // 각 요소에 이벤트(클릭)을 부여
            btn.addEventListener('click', (e)=>{
                // a태그 링크 이벤트 방지
                e.preventDefault();
    
                // 함수 재이벤트 방지
                let isOn = e.currentTarget.classList.contains('on');
                if(isOn) return;
    
                //클릭한 순간!!
                if(this.enableClick) { // 참으로 들어왔지만
                    this.enableClick = false; //클릭한 순간 false, 다른 버튼 클릭안돼!
                    // 함수 호춯
                    this.activation(this.btns, index);
                    // btns배열의 반복문을 돌면서 각 인덱스에 on을 제거하고 붙이는 함수호출
                    this.activation(this.boxes, index);
                    // boxes배열의 반복문을 돌면서 각 인덱스에 on을 제거하고 붙이는 함수호출
    
                    new Anim (this.main, {
                        prop : 'height',
                        value : this.matchHT(index),
                        duration : this.speed,
                    })
                } 
    
            })
        })
    }
    
    //함수였던 애들은 매소드하해서 적용시켜야한타다
    /*
        스타일 값을 가져오는 방법
        1. getComputedStyle() 메소드 : 외부파일로 스타일값을 지정하는 경우
        2. Element.style 속성 : html태그 자체에 어떤 방식으로든 스타일이 지정되어 있을 경우
    */
    /*
        코드에서의 숫자체계
        실수 - 399.33232434
        정수 - 400
    */
    // 높이 값을 가져오는 함수
    matchHT(index) {
        let ht = getComputedStyle(this.boxes[index]).height;
        // 값을 측정해서 가져오면 실수값으로 가지고 오는데 정수값으로 변환을 해야한다.
        ht = parseInt(ht); // 새롭게 정수 값으로 저장
        return ht; //값을 내보내!
    }
    
    // 속도를 변환 함수
    // 왜 만들어야하나? 속성값에 사용하는 속도값의 단위와 객체변수에 적용될 속도값을 단위가 다르다.
    converSpeed(el) { // transition은 각 요소마다 있으니까
        let sd = getComputedStyle(el).transitionDuration;
        //sd = .5
    
        sd = parseFloat(sd) * 1000; // 속성값으로 변환하기 위해서 500으로 변환시킴.
        return sd;
    }
    
    // on 클래스 합체 간단! 함수호출 (두개 함수 묶음)
    activation(arr, index) {
        for(let el of arr) {
            el.classList.remove('on');
        }
        arr[index].classList.add('on');
    
        // 지연시간 뒤에는 클릭이 가능!
        setTimeout(()=>{
            this.enableClick = true; 
        }, this.speed) 
    
        /*
            setTimeout(실행함수(콜백), 시간)
            실행함수를 정해둔 시간 이후에 무조건 사용하도록
            
            setTimeout(실행함수, 시간, 앞의 함수의 파라미터가 필요한 경우)
        */
    }
}



// 합체!
// function activation(index) {
//     // 버튼들에 붙이는 on
//     // btns에 반복을 돌면서 모든 클래스를 제거한다. (하나의 블럭)
//     for(let el of btns) {
//         el.classList.remove('on');
//     }
//     //선택된 인덱스에 on을 붙인다.
//     btns[index].classList.add('on');

//     //섹션(box)에 붙이는 on
//     // box의 반복을 돌면서 모든 클래스를 제거한다.
//     for(let el of boxes) {
//         el.classList.remove('on');
//         //el.style = "";
//     }
//      //선택된 인덱스에 on을 붙인다.
//     boxes[index].classList.add('on');
//     //boxes[index].style.display = 'flex';
// }

// 두개 따로 - 실무에서는 따로 쓸때도 있다!
// function active1(index) {
//     for(let el of btns) {
//         el.classList.remove('on');
//     }
//     btns[index].classList.add('on');
// }

// function active2(index) {
//     for(let el of boxes) {
//         el.classList.remove('on');
//         //el.style = "";
//     }
//     boxes[index].classList.add('on');
//     //boxes[index].style.display = 'flex';
// }


/*
생성자 함수
클래스 이전의 방법이다.

객체 리터럴(지향) : 아주 세세한 붕어빵 틀
let start = {
    data = 20,
    time = 15
}

사용하는 생성자 함수 
function Start(date, time) {
    this.date = date;
    this.time = time;
}

*/