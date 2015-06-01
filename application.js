

function myFunction() {
  console.log("i am dragofdfdn");
    var userMoney = parseInt(localStorage.getItem('userMoney'))
     // userMoney = userMoney.val();
    if (userMoney == undefined){
      localStorage.setItem('userMoney', 100);

    }
 
// var randomNumber = 1;
var randomNumber = Math.floor((Math.random() * 4) + 1);




var betAmount = $("#betAmount").val();
// betAmount = 33;
console.log("Bet amount:" + betAmount);
// console.log(betAmount.class());

if (betAmount != null) {


  "You bet the following amount: " + betAmount + "! How are you today?";
}




var userGuess = $("#userGuess").val();
console.log("guess amount:" + userGuess);

if (userGuess != null) {

  "You guessed the following number: " + userGuess + "! How are you today?";
}

if (userGuess == randomNumber){
  $("#last_round_result").text("You won the bet.");
 
  console.log("betamount type" + typeof(betAmount).toString());
  console.log("betamount type" + typeof(betAmount*2).toString());
  console.log("betamount type" + typeof(parseInt(betAmount)).toString());

  userMoney += parseInt(+betAmount * +2);
} else if(userGuess == randomNumber + 1 || userGuess == randomNumber -1){
   $("#last_round_result").text("You were off by 1: keep your bet");
  userMoney = userMoney 
}  else {
   $("#last_round_result").text("You lost.");
  userMoney = userMoney - betAmount;
}
localStorage.setItem('userMoney', userMoney);


// alert("Your remaining money is:" + userMoney);
$("#user_money_left").text(userMoney.toString());

}

function resetMoney() {
localStorage.setItem('userMoney', 100);
var userMoney = localStorage.getItem('userMoney')
$("#user_money_left").text(userMoney.toString());
}

$(document).ready( myFunction );
