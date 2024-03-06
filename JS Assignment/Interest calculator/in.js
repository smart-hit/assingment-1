function cal(){
    var amount=document.getElementById("amount").value;
    var interest=document.getElementById("interest").value;
    var time=document.getElementById("time").value;
    var totalin=((amount*interest)/100)*time;
    var totalamount=parseInt(amount)+totalin;
    document.getElementById("Interest-re").innerHTML="Total Interest= "+totalin;
    document.getElementById("amount-re").innerHTML="Total amount to repayed= "+totalamount;
}