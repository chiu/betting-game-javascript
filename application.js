
$(document).ready(function(){

  (function(){
   var userMoney;
   var betAmount;
   var userGuess;



   function betMoney() {
    console.log("yo wassup")
    // var userMoney = parseInt(localStorage.getItem('userMoney'))
    // var betAmount = parseInt(localStorage.getItem('betAmount'))
    // var userGuess = parseInt(localStorage.getItem('userGuess'))

    console.log("userMoney:");
    console.log(userMoney);
    console.log(typeof(userMoney));
    console.log("betAmount:");
    console.log(betAmount);
    console.log(typeof(betAmount));
    console.log("userguess:");
    console.log(userGuess);
    console.log(typeof(userGuess));
    

    if (!userMoney){
      localStorage.setItem('userMoney', 100);
      $("#user_money_left").text(userMoney.toString());
    }

    if (!betAmount ){
      localStorage.setItem('betAmount', 100);
      $("#bet_feedback").text(betAmount.toString());
    }

    if (!userGuess ){
      localStorage.setItem('userGuess', 100);
      $("#guess_feedback").text(userGuess.toString());
    }


    var randomNumber = Math.floor((Math.random() * 3) + 1);
    console.log("random number:" + randomNumber);


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
    localStorage.setItem('userMoney', 100);
    var userMoney = localStorage.getItem('userMoney')
    $("#user_money_left").text(userMoney.toString());
  }


  function updateBetAmount(){
    console.log("inside bet amount")
    var betAmount = $("#betAmount").val();
    if(betAmount < 5 || betAmount > 10){
      betAmount = 5
      $("#bet_feedback").text("You over the amount, set to default of 5");
    } else if (betAmount !== null ) {
      $("#bet_feedback").text("You bet the following amount: " + betAmount + "! How are you today?");
    }
    // localStorage.setItem('betAmount', betAmount);
    console.log("Bet amount:" + betAmount);
  }

  function updateGuess(){
    var userGuess = $("#userGuess").val();
    console.log("guess amount:" + userGuess);
    localStorage.setItem('userGuess', userGuess);
    if (userGuess !== null) {
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


