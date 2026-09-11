const cube = document.querySelector("#cube");
const fx = document.querySelector("#fx");

cube.addEventListener("click", function() {
  cube.style.backgroundColor = "yellow";
  cube.style.transform = "rotate(45deg)";
});

fx.addEventListener("mouseover", function() {
  fx.innerHTML = "Click to watch the AHS webpage on FX!";
});

fx.addEventListener("mouseout", function() {
  fx.innerHTML = "Watch on FX";
});