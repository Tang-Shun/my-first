var head =document.getElementsByClassName('head')[0];
window.onscroll = function(){
    var top = document.head.scrollTop || document.documentElement.scrollTop;
    if(top>1){
        head.classList.add('head-change');
    }
    else{
        head.classList.remove('head-change');
    }
}