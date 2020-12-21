var str=prompt("Enter the input ","");
if(isNaN(str)){
    str=str.toUpperCase();
    for(let i=0;i<str.length;i++){
        var ch=str.charAt(i);
        if(ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'){
            alert("the 1st vowel is at position "+(i+1));
            window.location.reload();
            break;
        }
    }
    if(i>str.length){
    alert("no vowels");
    }
}
else {
    var sum=0;
    var r=0;
    n=parseInt(str);
    while(n!=0){
        r=n%10;
        n=parseInt(n/10);
        sum=sum*10+r;
    }
    alert("the number reversed is "+sum);
    window.location.reload();
}