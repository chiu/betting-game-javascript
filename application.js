
$(document).ready(function(){

  (function(){
   var userMoney;
   var betAmount;
   var userGuess;



   function betMoney() {
    console.log("yo wassup")


    if (!userMoney){
      userMoney = 100;
      $("#user_money_left").text(userMoney.toString());
    }

    if (!betAmount ){
     betAmount = 5;
     $("#bet_feedback").text(betAmount.toString());
   }

   if (!userGuess ){
     userGuess = 1;
     $("#guess_feedback").text(userGuess.toString());
   }


   console.log("userMoney:");
   console.log(userMoney);
   console.log(typeof(userMoney));
   console.log("betAmount:");
   console.log(betAmount);
   console.log(typeof(betAmount));
   console.log("userguess:");
   console.log(userGuess);
   console.log(typeof(userGuess));

   var randomNumber = Math.floor((Math.random() * 10) + 1);
   console.log("random number:" + randomNumber);
   $("#last_round_random").text(randomNumber.toString());


   if (userGuess === randomNumber){
    $("#last_round_result").text("You won the bet.");
    userMoney += parseInt(+betAmount * +2);
  } else if(userGuess === randomNumber + 1 || userGuess === randomNumber -1){
    $("#last_round_result").text("You were off by 1: keep your bet");
    userMoney = userMoney 
  } else {
    $("#last_round_result").text("You lost.");
    userMoney = userMoney - betAmount;
  }
  localStorage.setItem('userMoney', userMoney);
  $("#user_money_left").text(userMoney.toString());
}

function resetMoney() {
 userMoney = 100;
 $("#user_money_left").text(userMoney.toString());
}


function updateBetAmount(){
  console.log("inside bet amount")
  betAmount = +$("#betAmount").val();

  if(betAmount < 5 ){
    betAmount = 5;
    $("#bet_feedback").text("You under the minimum, set to default of 5");
  } else if (betAmount > 10) {
    betAmount = 10;
    $("#bet_feedback").text("You are over the maximum bet, set to maximum of 10.")
  } else if (betAmount !== null ) {
    $("#bet_feedback").text("You bet the following amount: " + betAmount + "! How are you today?");
  }
  console.log("Bet amount:" + betAmount);
}

function updateGuess(){
  userGuess = $("#userGuess").val();
  console.log("guess amount:" + userGuess);

  if(userGuess < 0) {
    userGuess = 0; 
    $("#guess_feedback").text("You are under the minimum, set to minimum of 0.")
  } else if (userGuess > 10 ) {
    userGuess = 10;
    $("#guess_feedback").text("You are over the maximum, set to maximum of 10.")
  } else if (userGuess !== null) {
    $("#guess_feedback").text("You guessed the following number: " + userGuess);
  }
}


// $(document).ready( myFunction );
$("#betButton").click(betMoney);
$("#resetMoney").click(resetMoney);
$("#betAmount").on('keyup', updateBetAmount);
$("#userGuess").on('keyup', updateGuess);



})();


});


