$(document).ready(function() {
  var player1_result = 0;
  var player2_result = 0;

  var temp1 =0;
  var temp2 =0;
  $("#player1 *").children().attr("disabled", false);
  $("#player2 *").children().attr("disabled", true);

  console.log("123");

  $("#player1_roll_btn").click(function() {

    var dice_number = Math.floor(Math.random() * 6) + 1;

    $("#dice").text("You rolled a " + dice_number);

    if(dice_number == 1) {
      console.log("got 1 - " + player1_result);

      $("#player1_update_btn").hide();
      $("#player1 *").children().attr("disabled",true);
      $("#player2 *").children().attr("disabled",false);

      temp1 = player1_result;
    }
    else {
      temp1 = temp1 + dice_number;
      console.log("current  - " + player1_result);

    }
    $("#player1_history").append("<li>" + dice_number + " Total: " + temp1 + "</li>");

    $("#player1_update_btn").show();
    $("#player1_history").show();
  });

  $("#player1_update_btn").click(function() {
    player1_result = temp1;
    $("#player1 *").children().attr("disabled",true);
    $("#player2 *").children().attr("disabled",false);
    $("#player1_update_btn").hide();

    console.log("update" + player1_result);

  });

  $("#player2_roll_btn").click(function() {

    dice_number = Math.floor(Math.random() * 6) + 1;

    $("#dice").text("Dice equils to " + dice_number);

    if(dice_number == 1) {
      $("#player2 *").children().attr("disabled",true);
      $("#player1 *").children().attr("disabled",false);
      $("#player2_update_btn").hide();
      temp2 = player2_result;
    }
    else {
      console.log("sdf");
      temp2 = temp2 + dice_number;
    }
    $("#player2_history").append("<li>" + dice_number + " Total: " + temp2 + "</li>");

    $("#player2_update_btn").show();
    $("#player2_history").show();
  });
  $("#player2_update_btn").click(function() {
    player2_result = temp2;
    $("#player2 *").children().attr("disabled",true);
    $("#player1 *").children().attr("disabled",false);
    $("#player2_update_btn").hide();
  });

});
