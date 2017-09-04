// alert("connected")


var button1 = document.querySelector("#p1")
var button2 = document.querySelector("#p2")
var buttonR = document.querySelector("#reset")
var h1 = document.querySelector("h1")
var input = document.querySelector("input")

input.addEventListener("change", )



function functionName() {

}

button1.addEventListener("click", scoreChanger1)
button2.addEventListener("click", scoreChanger2)
buttonR.addEventListener("click", scoreR)

var winningScore = 5
var gameOver = false



var p1Score = 0
var p2Score = 0

function scoreChecker() {
  if (p1Score >= winningScore || p2Score >= winningScore) {
    return  gameOver = true
}
}

function scoreChanger1() {
  if (!gameOver) {
    p1Score++
    h1.textContent = p1Score + " to " + p2Score
    scoreChecker()
  }
}




function scoreChanger2() {
  if (!gameOver) {
    p2Score++
    h1.textContent = p1Score + " to " + p2Score
    scoreChecker()
  }
}




function scoreR() {
p1Score = 0
p2Score = 0
  h1.textContent = p1Score + " to " + p2Score
gameOver = false
}
