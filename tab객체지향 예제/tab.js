const tab = document.querySelector("#tab"); 
const btns = tab.querySelectorAll("ul li"); 
const boxs = tab.querySelectorAll("article div"); 

btns.forEach(function(el,index){
    el.addEventListener("click", function(e){
        e.preventDefault(); 

        activation(btns, index); 
        activation(boxs, index); 
    })
})

function activation(arr, index){
    for(var el of arr){
        el.classList.remove("on"); 
    }
    arr[index].classList.add("on"); 
}