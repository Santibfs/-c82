canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var mouseEvent = "empty";

var  last_positionX; last_positionY;

color = "black";
widthLine = 1;

canvas.addEvenListener("mousedown", myMousedown);

function myMousedown(e){
    color = document.getElementById("color").value;
    widthLine = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown"
}

canvas. addEvenListener("mouseleave" , myMouseleave);

function myMouseleave(e){
    mouseEvent = "mouseLeave"
}

canvas.addEvenListener("mousemove" , myMousemove);

function myMousemove(e){
    current_position_mouseX = e.clientX - canvas.offsetLeft;
    current_position_mouseY = e.clientY - canvas.offsetTop;

    if( mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;

        ctx.moveTo(last_positionX , last_position_Y);


        ctx.lineTo(current_position_mouseX , current_position_mouseY)
        ctx.stroke();
    }

    last_positionX = current_position_mouseX;
    last_positionY = current_position_mouseY;
}


canvas.addEvenListener("mouseup" ,myMouseup);

function myMouseup(e){
    mouseEvent = "mouseUp";
}