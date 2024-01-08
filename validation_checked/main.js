let pwd = document.getElementById("pwd");
let toggleBtn = document.getElementById("toggleBtn");
let lowerCase = document.getElementById("lower");
let upperCase = document.getElementById("upper");
let digit = document.getElementById("number");
let specialChar = document.getElementById("special");
let minLength = document.getElementById("length");


toggleBtn.addEventListener("click",()=>{
    // 만약 pwd의 타입이 패스워드면 - 처음 시작은 반드시 패스워드 타입으로 시작
    if (pwd.type === 'password') {
        //패스워드의 type이라는 속성을 text로 교체
        pwd.setAttribute("type", "text");
        // toggleBtn의 hide라는 클래스 부여 
        toggleBtn.classList.add("hide");

    } else {
        // 패스워드의 type이라는 속성을 password로 교체
        pwd.setAttribute("type", "password");
        // toggleBtn의 hide라는 클래스 제거
        toggleBtn.classList.remove("hide");
    }
})

function checkPassword(data){
    // 정규식 표현을 생성자 함수 방식으로 적은것
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])'); // \ 는 구분을 지어둔것!
    const length = new RegExp('(?=.{8,})');

    if(lower.test(data)) {
        lowerCase.classList.add('valid');
    } else {
        lowerCase.classList.remove('valid');
    }

    if(upper.test(data)) {
        upperCase.classList.add('valid');
    } else {
        upperCase.classList.remove('valid');
    }

    if(number.test(data)) {
        digit.classList.add('valid');
    } else {
        digit.classList.remove('valid');
    }

    if(special.test(data)) {
        specialChar.classList.add('valid');
    } else {
        specialChar.classList.remove('valid');
    }

    if(length.test(data)) {
        minLength.classList.add('valid');
    } else {
        minLength.classList.remove('valid');
    }



}