function Mytab(el) {
    this.init(el);

}

Mytab.prototype.init = function(el) {
    this.tab = document.querySelector(el); 
    this.btns = this.querySelectorAll("ul li"); 
    this.boxs = this.querySelectorAll("article div"); 
}

Mytab.prototype.bindingEvent = function() {
    this.btns.forEach(function(el,index){
        el.addEventListener("click", function(e){
            e.preventDefault(); 
    
            this.activation(this.btns, index); 
            this.activation(this.boxs, index); 
        }.bind(this)) //고무줄로 묶듯이
    }.bind(this))
}

Mytab.prototype.activation = function(arr, index) {
    for(var el of arr){
        el.classList.remove("on"); 
    }
    arr[index].classList.add("on"); 
}
