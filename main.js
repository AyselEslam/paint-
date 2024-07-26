var color=0;
var radius=0;
var width=0;
var current_position_of_mouse_x;
var current_position_of_mouse_y;
var mouseevent="";
var drawplace="my_canvas";
canvas= document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("mousemove", my_mousemove);
function my_mouseup(e){}

function my_mousedown(e){
  mouseevent = "mouseDown";
}

function my_mousemove(e){
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft
  current_position_of_mouse_y = e.clientY - canvas.offsetTop
  if (mouseevent == "mouseDown"){
    console.log("current position of x and y coordinates = ")
    console.log(" x = "+ current_position_of_mouse_x +"y = "+ 
               current_position_of_mouse_y);
       ctx.beginPath();
    ctx.strokeStyle = "pink";
    ctx.lineWidth = 3;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 15, 0, 2* Math.PI);
    ctx.stroke();
  }    
}