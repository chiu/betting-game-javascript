
$(document).ready(function(){

  (function(){
    var userMoney;
    var betAmount;
    var userGuess;
    var randomNumber;
    var BET_MINIMUM = 5;
    var BET_MAXIMUM = 10;
    var GUESS_MINIMUM = 1;
    var GUESS_MAXIMUM = 10;
    var MONEY_INITIAL = 100;


    function generateRandomNumber(){
     randomNumber = Math.floor((Math.random() * 5) + 1);
     console.log("random number:" + randomNumber + typeof(randomNumber));
     $("#last_round_random").text(randomNumber.toString());
   }


   function betMoney() {
    console.log("bet start")
    if (!userMoney){
      userMoney = MONEY_INITIAL;
      $("#user_money_left").text(userMoney.toString());
    }
    if (!betAmount ){
      betAmount = BET_MINIMUM;
      $("#bet_feedback").text("Set to default of: " + betAmount.toString());
    }
    if (!userGuess ){
      userGuess = GUESS_MINIMUM;
      $("#guess_feedback").text("Set to default of: " + userGuess.toString());
    }
    console.log("userMoney:" + userMoney + typeof(userMoney));
    console.log("betAmount:" + betAmount + typeof(betAmount));
    console.log("userguess:" + userGuess + typeof(userGuess));

    generateRandomNumber();

    if (userGuess === randomNumber){
      console.log("You won!");
      $("#last_round_result").text("You won the bet.");
      userMoney += parseInt(betAmount) * 2;
    } else if(userGuess === randomNumber + 1 || userGuess === randomNumber -1){
      $("#last_round_result").text("You were off by 1: keep your bet");
      console.log("off by one. ")
      userMoney = userMoney 
    } else {
      $("#last_round_result").text("You lost.");
      console.log("lost")
      userMoney = userMoney - betAmount;
    }
    localStorage.setItem('userMoney', userMoney);
    $("#user_money_left").text(userMoney.toString());
    makeStockpile();
  }


  var makeStockpile = function(){
    $('#stockpile div').remove();
    for(i=0;i< Math.floor(userMoney/10); i++ ){
     $('#stockpile').append("<div>cash</div>");
   }
 }


 function resetMoney() {
  userMoney = MONEY_INITIAL;
  $("#user_money_left").text(userMoney.toString());
  makeStockpile();
}

function updateBetAmount(){
  console.log("inside bet amount")
  betAmount = +$("#betAmount").val();
  console.log(betAmount, BET_MINIMUM);
  if(betAmount < BET_MINIMUM ){
    betAmount = BET_MINIMUM;
    $("#betAmount").val(BET_MINIMUM);
    $("#bet_feedback").text("You under the minimum, set to default of " + BET_MINIMUM);
  } else if (betAmount > BET_MAXIMUM) {
    betAmount = BET_MAXIMUM;
    $("#betAmount").val(BET_MAXIMUM);
    $("#bet_feedback").text("You are over the maximum bet, set to maximum of " +BET_MAXIMUM)
  } else if (betAmount !== null ) {
    $("#bet_feedback").text("You bet the following amount: " + betAmount + "! How are you today?");
  }
  console.log("Bet amount:" + betAmount);
}

function updateGuess(){
  userGuess = +$("#userGuess").val();


  console.log("guess value, type: " + userGuess + typeof(userGuess));
  console.log(userGuess, GUESS_MINIMUM);
  if(userGuess < GUESS_MINIMUM) {
    userGuess = GUESS_MINIMUM; 
    $("#userGuess").val(GUESS_MINIMUM);
    $("#guess_feedback").text("You are under the minimum, set to minimum of " + GUESS_MINIMUM)
  } else if (userGuess > GUESS_MAXIMUM ) {
    userGuess = GUESS_MAXIMUM;
    $("#userGuess").val(GUESS_MAXIMUM);
    $("#guess_feedback").text("You are over the maximum, set to maximum of " +GUESS_MAXIMUM)
  } else if (userGuess !== null) {
    $("#guess_feedback").text("You guessed the following number: " + userGuess);
  }
  console.log("guess amount:" + userGuess + typeof(userGuess));
}

$("#betButton").click(betMoney);
$("#resetMoney").click(resetMoney);
$("#betAmount").on('change', updateBetAmount);
$("#userGuess").on('change', updateGuess);

})();
});


