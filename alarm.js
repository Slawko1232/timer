var myVar;
var schemat_polewania = {image: ["images/mieszek.png", "images/Pirzmi.png", "images/Remas.png", "images/Rosja.png", "images/Slawko.png"]};
var losowanie;
var intervalInSeconds = 90*60;
var startinterval, y1, y2, startczas, roznicaczasu;


function withZero(num){
    return num >= 10 ? num : "0" + num;
}
function format(num) {
    var hours = Math.floor((num/60) / 60);
    var minutes = Math.floor((num - hours * 60 * 60) / 60);
    var seconds = Math.floor(num - ((hours * 60 * 60) + (minutes * 60)));
    // console.log(hours, minutes, seconds)
    return withZero(hours) + ":" + withZero(minutes) + ":" + withZero(seconds);
}


function myTimer() {
  if(intervalInSeconds > 0) {
      intervalInSeconds-=0.1;
      var size= document.getElementsByClassName("flex-container")[0].style.backgroundSize;
      y2 = (startinterval - intervalInSeconds)*100/startinterval;
      y1 = 0.8*y2;
      document.getElementsByClassName("flex-container")[0].style.backgroundSize = "100% "+y1+"%, 100% "+y2+"%";
      // console.log("size", size);
      if(intervalInSeconds < 0){
        intervalInSeconds = 0;
      }
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
function newTimer() {
  roznicaczasu =  Date.now() - startczas;
  if(startinterval - Math.floor(roznicaczasu/1000) > 0) {
      intervalInSeconds-=0.1;
      var size= document.getElementsByClassName("flex-container")[0].style.backgroundSize;
      y2 = roznicaczasu*100/1000/startinterval;
      y1 = 0.8*y2;
      document.getElementsByClassName("flex-container")[0].style.backgroundSize = "100% "+y1+"%, 100% "+y2+"%";
      // console.log("size", size);
      if(intervalInSeconds < 0){
        intervalInSeconds = 0;
      }
  } else {      
    clearInterval(myVar);
    var audio = document.getElementById("audio"); 
    audio.play();
    document.getElementById("button").style.visibility = "visible";
    document.getElementById("text").style.visibility="visible";
    document.getElementById("image").src = schemat_polewania.image[losowanie];
    document.getElementById("image").style.visibility="visible";
  }
  document.getElementById("timer").innerHTML = format(startinterval - Math.floor(roznicaczasu/1000));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function start() {
  startczas = Date.now();
  losowanie = getRandomInt(0, 5);
    myVar = setInterval(newTimer, 100);
    intervalInSeconds = 10;
    startinterval = intervalInSeconds.valueOf();
    document.getElementById("button").style.visibility = "hidden";
    document.getElementById("image").style.visibility="hidden";
    document.getElementById("text").style.visibility="hidden";
}