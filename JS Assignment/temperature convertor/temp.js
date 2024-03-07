function cal(){
    let c=document.getElementById("type").value;
    if(c=='C'){
        cal_c();
    }
    else{
        cal_f();
    }
}
function cal_c(){
    let num=document.getElementById("value").value;
    let num1=(num * 9/5) + 32;
    document.getElementById("result").innerHTML=num1+" Fahrenheit";
}
function cal_f(){
    let num=document.getElementById("value").value;
    let num1=(num -32)* 5/9;
    document.getElementById("result").innerHTML=num1+" celsius";
}