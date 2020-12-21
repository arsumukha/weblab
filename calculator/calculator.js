function calc(x){
const n1=parseFloat(document.getElementById("n1").value);
const n2=parseFloat(document.getElementById("n2").value);
if(!(isNaN(n1)&&isNaN(n2))){
    if(x=="add"){
        document.getElementById("answer").value=n1+n2;  
    }
    else if(x=="sub"){
        document.getElementById("answer").value=n1-n2;
    }
    else if(x=="mul"){
        document.getElementById("answer").value=n1*n2;
    }
    else if(x=="div"){
        document.getElementById("answer").value=n1/n2;
    }
}
else{
    alert("entered numbers are not valid check again");
}
}
function clearscr(){
    window.location.reload();
}