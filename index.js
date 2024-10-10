const numberYouWannaGet = Math.floor(Math.random()*20+1);
const button = document.getElementById('num-btn')
const div = document.getElementById('content')
const input = document.getElementById('input')
const span = document.getElementById('span')
const span1 = document.getElementById('span1')
const numBtn = document.getElementById('btn')
let num = 20;
let highScore = 0;
numBtn.addEventListener('click', () => {
  refreshPage();
})
function refreshPage(){
  window.location.reload();
} 

button.addEventListener('click', () => {
  valueInput();
  input.value = "";
  span.textContent = num--;



}) 
function valueInput(){
if(input.value > numberYouWannaGet){
  document.getElementById('explain').textContent = "Too high"
} else if(input.value < numberYouWannaGet){
  document.getElementById('explain').textContent = "Too low"
} else if(input.value = numberYouWannaGet){
  document.getElementById('explain').textContent = "perfect";
  document.body.style.backgroundColor = "#60b347";
  div.innerHTML = input.value;
  if(num > highScore){
    highScore = num;
  }
  span1.textContent = highScore;
} }