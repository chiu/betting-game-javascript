
$(document).ready(function(){

  (function(){
    var userMoney;
    var betAmount;
    var userGuess;
    var randomNumber;
    var MAXIMUM_BET = 10;


    function generateRandomNumber(){
    }


    

    function betMoney() {
      console.log("bet start")
      if (!userMoney){
        userMoney = 100;
        $("#user_money_left").text(userMoney.toString());
      }
      if (!betAmount ){
        betAmount = 5;
        $("#bet_feedback").text("Set to default of: " + betAmount.toString());
      }
      if (!userGuess ){
        userGuess = 1;
        $("#guess_feedback").text("Set to default of: " + userGuess.toString());
      }
      console.log("userMoney:" + userMoney + typeof(userMoney));
      console.log("betAmount:" + betAmount + typeof(betAmount));
      console.log("userguess:" + userGuess + typeof(userGuess));
      var randomNumber = Math.floor((Math.random() * 5) + 1);
      console.log("random number:" + randomNumber + typeof(randomNumber));
      $("#last_round_random").text(randomNumber.toString());

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
    userMoney = 100;
    $("#user_money_left").text(userMoney.toString());
    makeStockpile();
  }

  function updateBetAmount(){
    console.log("inside bet amount")
    betAmount = +$("#betAmount").val();

    if(betAmount < 5 ){
      betAmount = 5;
      $("#betAmount").val(5);

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
    userGuess = +$("#userGuess").val();
    console.log("after guess update type:")
    console.log(typeof(userGuess));

    console.log("guess amount:" + userGuess);

    if(userGuess < 1) {
      userGuess = 1; 
      $("#guess_feedback").text("You are under the minimum, set to minimum of 1.")
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
$("#betAmount").on('change', updateBetAmount);
$("#userGuess").on('change', updateGuess);



})();


});


