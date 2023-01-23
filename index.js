var size = 0;
window.addEventListener('DOMContentLoaded', function() {

});

function big(lol){
    if(size == 0){
        size = 1;
        lol.value ="縮小"
        document.getElementById('right').style.visibility = "hidden"; 
        document.getElementById('others').style.visibility = "hidden"; 
        document.getElementById('others_2').style.visibility = "hidden"; 
        document.querySelector(':root').style.setProperty("--W","calc(100vmin - 40px)")
        document.querySelector(':root').style.setProperty("--H","calc(100vmin - 40px)")
        document.getElementById('canvas').style.position = "absolute";
      

    }else{
        size = 0;
        lol.value ="拡大"
        document.getElementById('right').style.visibility = "visible"; 
        document.getElementById('others').style.visibility = "visible"; 
        document.getElementById('others_2').style.visibility = "visible"; 
        document.querySelector(':root').style.setProperty("--W","75vmin")
        document.querySelector(':root').style.setProperty("--H","75vmin")
        document.getElementById('canvas').style.position ="static";
        
    }
}
