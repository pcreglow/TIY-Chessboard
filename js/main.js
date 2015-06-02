(function(window) {


    /*$('.forward').click(function() {
        chess.move(chess.game[0]);
    });*/

    $('.end').click(function() {
        for (chess.counter; chess.counter < chess.game.length; chess.counter++) {
            chess.move(chess.game[chess.counter]);
        };
    });

    //StackOverflow assistance for counter:
    //http://stackoverflow.com/questions/16549183/jquery-iterate-through-an-array-by-using-onclick

    $('.forward').click(function() {
        // chess.counter = (chess.counter + 1) % chess.game.length;

         if (chess.counter < chess.game.length) {
           chess.move(chess.game[chess.counter]);
           chess.counter = chess.counter + 1;
         }
        //chess.move(chess.game[chess.counter]);
    });


    /*$('.rank-2 > .file-d').removeClass('white-pawn');
    $('.rank-4 > .file-d').addClass('white-pawn');

    console.log("It's chess bitch!");
  });


  $('.backward').click(function() {
    $('.rank-4 > .file-d').removeClass('white-pawn');
    $('.rank-2 > .file-d').addClass('white-pawn');

    console.log("It's chess bitch!");
  });*/

})(window);
