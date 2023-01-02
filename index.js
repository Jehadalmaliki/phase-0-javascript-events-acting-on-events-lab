// Your code here
function moveDodgerLeft() {
  var dodger = document.getElementById("dodger");
  dodger.style.left = (dodger.offsetLeft - 10) + "px";
}

function moveDodgerRight() {
  var dodger = document.getElementById("dodger");
  dodger.style.left = (dodger.offsetLeft + 10) + "px";
}
