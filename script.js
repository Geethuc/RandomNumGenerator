const btn = document.getElementById("btn");
const box = document.getElementById("num");

function randomNumGenerator() {
    const randomNum = Math.floor(Math.random() * 100);
    box.textContent = randomNum;
}

// Assuming you want to generate a random number when the button is clicked
btn.addEventListener("click", randomNumGenerator);

function changeColor(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
}