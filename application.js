

function myFunction() {
  console.log("i am dragofdfdn");
    userMoney = 100;
   $.cookie('userMoney', userMoney ); 

// var randomNumber = 1;
var randomNumber = Math.floor((Math.random() * 1) + 1);




var betAmount = +$("#betAmount").val();
// betAmount = 33;
console.log("Bet amount:" + betAmount);

if (betAmount != null) {


  "You bet the following amount: " + betAmount + "! How are you today?";
}




var userGuess = +$("#userGuess").val();
console.log("guess amount:" + userGuess);

if (userGuess != null) {

  "You guessed the following number: " + userGuess + "! How are you today?";
}

if (userGuess == randomNumber){
  alert("You won the bet.");
  userMoney = userMoney + betAmount * 2;
} else if(userGuess == randomNumber + 1 || userGuess == randomNumber -1){
  alert("You were off by 1: keep your bet");
  userMoney = userMoney 
}  else {
  alert("You lost.");
  userMoney = userMoney - betAmount;
}



alert("Your remaining money is:" + userMoney);
$("#results").text(userMoney.toString());

}



$(document).ready( myFunction );
