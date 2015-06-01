

function myFunction() {
  console.log("i am dragon");
  userMoney = 100;
// var randomNumber = 1;
var randomNumber = Math.floor((Math.random() * 3) + 1);

var betAmount = $("#bet");
console.log(betAmount);
if (betAmount != null) {


  "You bet the following amount: " + betAmount + "! How are you today?";
}

userMoney = userMoney - betAmount;


var userGuess = $("userGuess");
if (userGuess != null) {

  "You guessed the following number: " + userGuess + "! How are you today?";
}

if (userGuess == randomNumber){
  alert("You won the bet.");
  userMoney = userMoney + betAmount * 2;
} else if(userGuess == randomNumber + 1 || userGuess == randomNumber -1){
  alert("You were off by 1: keep your bet");
  userMoney = userMoney + betAmount;
}  else {
  alert("You lost.");
  userMoney = userMoney;
}



alert("Your remaining money is:" + userMoney);
$("#results").text(34);

}



$(document).ready( myFunction );
