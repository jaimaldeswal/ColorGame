// number of squares
var numSquares=6;

// array of colors 
 var colors= generateRandomColors(numSquares);
//[ "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)",  "rgb(45, 122, 145)",
//     "rgb(255, 0, 255)",  "rgb(122, 67, 8)", ]



// select  all 6 square by class name square1
var squares=document.querySelectorAll(".square1")
//picking one color at top by randomly using function
var pickedColor=pickColor();
// select rgb color display
var colorDisplay=document.getElementById("colorDisplay")
//changing rgb value
colorDisplay.textContent=pickedColor;
//select the message span
var messageDisplay=document.querySelector("#message");
// selecting h1 
var h1=document.querySelector("h1");
// selecting the bitton for reset
var resetButton=document.querySelector("#reset");
//selecting the easy button
var easybtn=document.querySelector("#easybtn");
//selecting the hard button
var hardbtn=document.querySelector("#hardbtn");
// number of squares
var numSquares=6;


for (var i=0; i<squares.length;i++){
    //give initial colors to all 6 squares
    squares[i].style.backgroundColor=colors[i];
    // add click listener to squares
    squares[i].addEventListener("click",function(){
        // grab the color of clicked square
        var clickedColor=this.style.backgroundColor;
       // just for checking //alert(clickedColor);
        // compare color to picked color
        if(clickedColor===pickedColor){
            // alert("right");
             messageDisplay.textContent="Well Done!";
             changeColors(clickedColor);
             h1.style.backgroundColor=clickedColor;
             resetButton.textContent="play again";

        }
        else{
            //alert("wrong");
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again!";
        }
    })
}



// make all square of same color when right
function changeColors(color){
// loop through all squares
for(var i=0; i<squares.length;i++){
    squares[i].style.backgroundColor=color;
}
//change each color to match given color
    
}


// picking random color every time
function pickColor(){
    var random=Math.floor(Math.random() * colors.length);
      return colors[random];
}





// generating  random colors
function generateRandomColors(num){
    // make an array
var arr=[];
//repeat num times
for(var i=0;i<num;i++){
    //get random color and push it into array
arr.push(randomColor());

}
//return the array
return arr;

}
// making random color
function randomColor(){
    //pick a red from 0-255
     var r= Math.floor(Math.random()*256);
     //pick a green from 0-255
    var g= Math.floor(Math.random()*256);
     //pick a blue from 0-255
     var b= Math.floor(Math.random()*256);

   return "rgb(" + r + ", " + g + ", " + b +")" ;
}






// easy  selection
easybtn.addEventListener("click", function(){
easybtn.classList.add("selected")
hardbtn.classList.remove("selected")
// number of squares
 numSquares=3;
//generate 3 new colors
colors= generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor=pickColor();
  //chane color display to match picked color
  colorDisplay.textContent=pickedColor;
// change colors of all squares
for (var i=0; i<squares.length;i++){
    if(colors[i]){
  squares[i].style.backgroundColor=colors[i];}
else{
    squares[i].style.display="none";}}


});

//hard selection
hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected")
    hardbtn.classList.add("selected") 
    // number of squares
 numSquares=6;
    colors= generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor=pickColor();
  //chane color display to match picked color
  colorDisplay.textContent=pickedColor;
// change colors of all squares
for (var i=0; i<squares.length;i++){
  squares[i].style.backgroundColor=colors[i];
    squares[i].style.display="block";}

 
});

//reset buttton new game
resetButton.addEventListener("click", function(){
    //generate all new colors
    colors= generateRandomColors(numSquares);
    //pick a new random color from array
     pickedColor=pickColor();
     //chane color display to match picked color
     colorDisplay.textContent=pickedColor;
 // change colors of all squares
 for (var i=0; i<squares.length;i++){
     squares[i].style.backgroundColor=colors[i];}
 
 //backgroun color of h1 
 h1.style.backgroundColor="steelblue";
 // making span empty
 messageDisplay.textContent="";
 
 this.textContent="new colors"
 
 })