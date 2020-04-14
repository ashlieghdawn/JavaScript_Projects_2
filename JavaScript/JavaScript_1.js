function Color_Function(){
    var Color_Output;
    var Colors=document.getElementById("Color_Input").nodeValue;
    var Color_String=" is a great color!";
    switch(Colors){
        case "Red":
            Color_Output="Red"+Color_String;
        break;
        case "Yellow":
            Color_Output="Yellow"+Color_String;
        break;
        case "Green":
            Color_Output="Green"+Color_String;
        break;
        case "Blue":
            Color_Output="Blue"+Color_String;
        break;
        case "Pink":
            Color_Output="Pink"+Color_String;
        break;
        case "Purple":
            Color_Output="Purple"+Color_String;
        break;
        default:
        Color_Output="Please enter ac olor exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML=Color_Output;
}

function Hello_World_Function(){
    var A=document.getElementsByClassName("Click");
    A[1].innerHTML="The text has changed!";
}

var c=document.getElementById("Canvas_1");
var ctx=c.getContext("2d");
//Create gradient
var grd=ctx.createLinearGradient(0,0,600,0);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"white");
//Fill with gradient
ctx.fillStyle=grd;
ctx.fillRect(1,1,900,600);

//Create a circle graphic
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();


