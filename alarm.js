var myVar;
var schemat_polewania = {image: ["images/mieszek.png", "images/Pirzmi.png", "images/Remas.png", "images/Rosja.png", "images/Slawko.png"]};
var losowanie;
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
    document.getElementById("text").style.visibility="visible";
    document.getElementById("image").src = schemat_polewania.image[losowanie];
    document.getElementById("image").style.visibility="visible";
  }
  document.getElementById("timer").innerHTML = format(intervalInSeconds);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function start() {
  losowanie = getRandomInt(0, 5);
    myVar = setInterval(myTimer, 1000);
    intervalInSeconds = 3;
    document.getElementById("button").style.visibility = "hidden";
}