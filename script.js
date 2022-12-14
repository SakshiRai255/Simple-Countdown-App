let endDate = "28 February 2023 12:00 AM";
document.getElementById("end-date").innerText = endDate;
let timeExpireMessage = document.querySelector(".timeExpireMessage");
let days = document.getElementById("days");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

const countDown = () => {
  let end = new Date(endDate);
  let nowDate = new Date();
  let differenceDate = end - nowDate;
  if (differenceDate < 0) 
  {       clearInterval(setInt);
                 let timeExpireHeading = document.createElement('h2');
                 timeExpireHeading.setAttribute('class','timeExpireHeading')
                 timeExpireHeading.innerText = 'Your time has been Expired'
                 timeExpireMessage.appendChild(timeExpireHeading);  
                 celebrateTime ();     
      }
  else{
  days.value = Math.floor(differenceDate / 1000 / 60 / 60 / 24);
  hour.value = Math.floor(differenceDate / 1000 / 60 / 60) % 24;
  minute.value = Math.floor(differenceDate / 1000 / 60) % 60;
  seconds.value = Math.floor(differenceDate / 1000) % 60;
  }
};
countDown();
   let setInt = setInterval(countDown,1000);



   function celebrateTime (){
    var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);
   }


/*
The JavaScript Date Object gives a date in milisecond that is why you divide the difference Date in 1000
in 1 milisecond 1000 second
1 day = 24 hour
1 hour = 60 minute
1 minute = 60 second
1 second = 1000 milisecond

*/
