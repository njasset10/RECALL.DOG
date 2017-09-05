

var li = document.querySelector("li")
var lis = document.querySelectorAll("li")



for (i=0; i<lis.length; i++){
  lis[i].addEventListener("mouseover", theHover)
  lis[i].addEventListener("mouseout", theEnd)
  lis[i].addEventListener("click", completed)
}


function completed() {
  this.classList.toggle("done")

}

function theHover(){
  this.classList.add("big")
}

function theEnd(){
  this.classList.remove("big")
}
