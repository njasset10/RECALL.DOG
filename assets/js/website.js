alert("hello")

var password = prompt('What is the password?')

if (password === "password") {
  alert("yes!")
} else {
  while (password !="password") {
  password = prompt("sorry, try again")
  }
}
