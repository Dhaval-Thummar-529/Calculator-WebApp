var temp;
var dmas;
function B7(){
    var b7 = document.getElementById("b7").value
    var d = document.getElementById("display");
    d.value = d.value + b7
}
function B8(){
    var b8 = document.getElementById("b8").value
    var d = document.getElementById("display");
    d.value = d.value + b8
}
function B9(){
    var b9 = document.getElementById("b9").value
    var d = document.getElementById("display");
    d.value = d.value + b9
}
function B4(){
    var b4 = document.getElementById("b4").value
    var d = document.getElementById("display");
    d.value = d.value + b4
}
function B5(){
    var b5 = document.getElementById("b5").value
    var d = document.getElementById("display");
    d.value = d.value + b5
}
function B6(){
    var b6 = document.getElementById("b6").value
    var d = document.getElementById("display");
    d.value = d.value + b6
}
function B1(){
    var b1 = document.getElementById("b1").value
    var d = document.getElementById("display");
    d.value = d.value + b1
}
function B2(){
    var b2 = document.getElementById("b2").value
    var d = document.getElementById("display");
    d.value = d.value + b2
}
function B3(){
    var b3 = document.getElementById("b3").value
    var d = document.getElementById("display");
    d.value = d.value + b3
}
function B0(){
    var b0 = document.getElementById("b0").value
    var d = document.getElementById("display");
    d.value = d.value + b0
}
function dec(){
    var dec = document.getElementById("decimal").value
    var d = document.getElementById("display");
    d.value = d.value + dec
    document.getElementById("decimal").disabled = true;
}
function division(){
    document.getElementById("decimal").disabled = false;
    var mul = document.getElementById("division").value;
    var d = document.getElementById("display");
    temp = d.value;
    d.value = document.getElementById("clear").value;
    dmas=1;
}
function multiplication(){
    document.getElementById("decimal").disabled = false;
    var mul = document.getElementById("multiplication").value;
    var d = document.getElementById("display");
    temp = d.value;
    d.value = document.getElementById("clear").value;
    dmas=2;
}
function plus(){
    document.getElementById("decimal").disabled = false;
    var add = document.getElementById("plus").value;
    var d = document.getElementById("display");
    temp = d.value;
    d.value = document.getElementById("clear").value;
    dmas=3;
}
function subtraction(){
    document.getElementById("decimal").disabled = false;
    var add = document.getElementById("subtraction").value;
    var d = document.getElementById("display");
    temp = d.value;
    d.value = document.getElementById("clear").value;
    dmas=4;
}
function equals(){
    document.getElementById("decimal").disabled = false;
    var eq = document.getElementById("equals").value;
    var d = document.getElementById("display");
    if(dmas==1)
    {
        temp = parseFloat(temp) / parseFloat(d.value);
        d.value=temp;
    }
    else if(dmas==2)
    {
        temp = parseFloat(temp) * parseFloat(d.value);
        d.value=temp;
    }
    else if(dmas==3)
    {
        temp = parseFloat(temp) + parseFloat(d.value);
        d.value=temp;
    }
    else if(dmas==4)
    {
        temp = parseFloat(temp) - parseFloat(d.value);
        d.value=temp;
    }
}
function Clr(){
    var c = document.getElementById("clear").value
    var d = document.getElementById("display");
    d.value = c
}
