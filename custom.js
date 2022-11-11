
var yukarı = document.getElementsByClassName("yukarı_cık")[0];

window.addEventListener("scroll", function (){
    const mesafe = this.window.scrollY;  

    if(mesafe > 500){
        yukarı.classList.add("göster");
    } else{
        yukarı.classList.remove("göster");
    }

});

yukarı.addEventListener("click",function(){
    window.scrollTo(0,0);
})