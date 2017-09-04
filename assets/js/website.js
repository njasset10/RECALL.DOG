/*alert("hello")

var password = prompt('What is the password?')

if (password === "password") {
  alert("yes!")
} else {
  while (password !="password") {
  password = prompt("sorry, try again")
  }
}
*/





var p = document.querySelector("p")
var newText = false
var oldText = p.textContent

function classOn(){
  p.classList.toggle("big")
  if (!newText) {
  p.textContent = "now it is"
} else {
  p.textContent = oldText
}
  newText = !newText
}



var body = document.querySelector("Body")
var h1 = document.querySelector("h1")

p.addEventListener("mouseover",classOn)

var isBlue = false


function blueChanger(){ //manipulate
    if (isBlue) {
      body.style.background = "blue"
    } else {
      body.style.background = "white"
    }
    isBlue = !isBlue
  }


  function blueTextChanger(){ //manipulate
      if (isBlue) {
        h1.style.color = "blue"
      } else {
        h1.style.color = "white"
      }
      isBlue = !isBlue
    }

// setInterval(blueTextChanger, 1000)
 // setInterval(blueChanger, 500)





var movies = [
  {
    title: "WonderWoman",
    rating: "5 Stars",
    hasSeen: true
  },
  {
    title: "Bronx Tale",
    rating: "5 Stars",
    hasSeen: true
  },
  {
    title: "Not Another Movie",
    rating: "3 Stars",
    hasSeen: false
  },
  {
    title: "That Movie",
    rating: "2 Stars",
    hasSeen: true
  },
]

function buildString(movie){
  if(movie.hasSeen===true){
    console.log("You Have Seen "+movie.title + " - " +movie.rating);
  } else {
    console.log("You Have Not Seen "+movie.title + " - " +movie.rating);
  }
}


// movies.forEach(function(movie, index, array){
  // buildString(movie)
// })
