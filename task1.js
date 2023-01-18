let currentTime = 59;
const timer = document.getElementById("timer");
function countDown() { 
timer.textContent --; 

  if (timer.textContent == 0){ 
    clearInterval(timer); 
    alert ("Вы победили в конкурсе!"); 
  }
}
setInterval(countDown, 500);