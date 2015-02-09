var queenAttack = function(queen, opponent) {

   var attackHorizontal = Math.abs(opponent[0] - queen[0]);
   var attackVertical = Math.abs(opponent[1] - queen[1]);

   if ((queen[1] === opponent[1]) || (queen[0] === opponent[0]) || (attackHorizontal === attackVertical)) {
     return true;
   } else {
     return false;
   }
};

  $(document).ready(function() {
    $("form#queen-attack").submit(function(event) {
      var queen = $("input#queen").val().split(",").map(Number);
      var opponent = $("input#opponent").val().split(",").map(Number);

      var result = queenAttack(queen, opponent);

      if(!result) {
        $(".not").text("not");
      } else {
        $(".not").text(" ");
      }

      $("#result").show();
      event.preventDefault();
    });
  });
