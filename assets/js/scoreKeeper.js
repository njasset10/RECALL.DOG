// alert("connected")


var button1 = document.querySelector("#p1")
var button2 = document.querySelector("#p2")
var buttonR = document.querySelector("#reset")
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")

var h1 = document.querySelector("h1")
var h2 = document.querySelector("h2")
var input = document.querySelector("input")

input.addEventListener("change", inputFunction)


var winningScore = 5

function inputFunction() {
  winningScore = input.value
  h2.textContent = "Playing to " + winningScore
}

button1.addEventListener("click", scoreChanger1)
button2.addEventListener("click", scoreChanger2)
buttonR.addEventListener("click", scoreR)


var gameOver = false



var p1Score = 0
var p2Score = 0

function scoreChecker() {
  if (p1Score >= winningScore) {
    p1Display.classList.add("winner")
    return  gameOver = true
}
  if (p2Score >= winningScore) {
    p2Display.classList.add("winner")
    return  gameOver = true
  }
}

function scoreChanger1() {
  if (!gameOver) {
    p1Score++
    p1Display.textContent = p1Score
    scoreChecker()
  }
}


function scoreChanger2() {
  if (!gameOver) {
    p2Score++
    p2Display.textContent = p2Score
    scoreChecker()
  }
}


function scoreR() {
p1Score = 0
    p1Display.textContent = p1Score
    p1Display.classList.remove("winner")
p2Score = 0
    p2Display.textContent = p2Score
    p2Display.classList.remove("winner")
return gameOver = false
}
