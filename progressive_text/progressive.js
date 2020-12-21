const p=document.getElementById("text");
var font_size=5;
grow=setInterval(growing,1000);
function growing(){
    p.innerHTML="TEXT-GROWING";
    p.setAttribute('style',"font-size:"+font_size+"px; color:red;");
    font_size+=5;
    if(font_size>50){
        clearInterval(grow);
        shrink=setInterval(shrinking,1000);
    }
}
function shrinking(){
    p.innerHTML="TEXT-SHRINKING";
    p.setAttribute('style',"font-size:"+font_size+"px; color:blue;");
    font_size-=5;
    if(font_size<5){
        clearInterval(shrink);
        var grow=setInterval(growing,1000);
    }
}