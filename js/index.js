/*var ten = document.querySelector("#ten");
var field = document.querySelector(".field--10");
var gameField = document.querySelector(".gameField");

field.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {
    var xPosition = e.clientX;
    var yPosition = e.clientY;

    var translate3dValue = "translate3d('' + xPosition + "px" + yPosition + "px")";
    theThing.style.transform = translate3dValue; 
}
function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
}
*/
function myMove() {
    var elem = document.getElementById("ten");   
    var pos = 45;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 250) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
}
function myMove1() {
    var elem = document.getElementById("twelve");   
    var pos = 45;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 250) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
}
function myFunction() {
  document.getElementById('figurine').style.cssText='background-color: red; border: 3px solid black';
}
function myFunction2() {
  document.getElementById('figurine2').style.cssText='background-color: red; border: 3px solid black';
}