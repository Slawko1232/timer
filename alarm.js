var myVar;

var intervalInSeconds = 90*60;

function withZero(num){
    return num >= 10 ? num : "0" + num;
}
function format(num) {
    var hours = Math.floor((num/60) / 60);
    var minutes = Math.floor((num - hours * 60 * 60) / 60);
    var seconds = num - ((hours * 60 * 60) + (minutes * 60));
    // console.log(hours, minutes, seconds)
    return withZero(hours) + ":" + withZero(minutes) + ":" + withZero(seconds);
}

function myTimer() {
  if(intervalInSeconds > 0) {
      intervalInSeconds-=1
  } else {      
    clearInterval(myVar);
    var audio = document.getElementById("audio"); 
    audio.play();
    document.getElementById("button").style.visibility = "visible";
  }
  document.getElementById("timer").innerHTML = format(intervalInSeconds);
}

function start() {
    myVar = setInterval(myTimer, 1000);
    intervalInSeconds = 90*60;
    document.getElementById("button").style.visibility = "hidden";
}