var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height= 90;
var rover_x = 20;
var rover_y = 10;
var bg,rover;
var background_image;
var image_array =  ["track.png"];
var random_number = Math.random() * 1;
console.log (random_number);
var i = Math.floor(random_number);
console.log (i);
function add (){
    bg = new Image() ;
    bg.onload= addBackground;
    bg.src = image_array[i];

    rover = new Image();
    rover.onload = addRover;
    rover.src = "car1.png";

}
function addBackground (){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
function addRover(){
    ctx.drawImage(rover,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",keydown);
function keydown (e){
var key = e.keyCode;
console.log (key);
if(key == '37'){
console.log ("left");
left();
} 
if(key == '38'){
    console.log ("up");
    up();
    }
    if(key == '39'){
        console.log ("right");
        right();
        }
        if(key == '40'){
            console.log ("down");
            down();
            }

}
function left (){
if (rover_x > 0){
rover_x = rover_x - 10;
addBackground();
addRover();
}
}

function right (){
    if (rover_x < 1010){
    rover_x = rover_x + 10;
    addBackground();
    addRover();
    console.log (rover_x)
    }
    }

    function up (){
        if (rover_y > 0){
        rover_y = rover_y - 10;
        addBackground();
        addRover();
        console.log (rover_y)
        }
        }

        function down (){
            if (rover_y < 510){
            rover_y = rover_y + 10;
            addBackground();
            addRover();
            console.log (rover_y)
            }
            }

