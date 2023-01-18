let clicker__counter = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");

function clicker () {
    clicker__counter.textContent++;
    if (clicker__counter.textContent % 2 !== 0) {
    image.width = 250;
    } else {
      image.width = 200; 
    } 
}
image.onclick = clicker;





