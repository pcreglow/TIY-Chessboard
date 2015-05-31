(function(window) {

  var game = {

    move1: ['.rank-2', '.file-d', '.rank-4', '.file-d', 'white-pawn'],
    move2: ['.rank-8', '.file-g', '.rank-6', '.file-f', 'black-knight'],
    move3: ['.rank-2', '.file-c', '.rank-4', '.file-c', 'white-pawn'],
    move4: ['.rank-7', '.file-e', '.rank-6', '.file-e', 'black-pawn'],
    move5: ['.rank-2', '.file-g', '.rank-3', '.file-g', 'white-pawn'],
    move6: ['.rank-7', '.file-d', '.rank-5', '.file-d', 'black-pawn'],
    move7: ['.rank-1', '.file-f', '.rank-2', '.file-g', 'white-bishop'],
    move8: ['.rank-8', '.file-f', '.rank-7', '.file-e', 'black-bishop'],
    move9: ['.rank-1', '.file-g', '.rank-3', '.file-f', 'white-knight']
  };

function move(whichMove){
  $(whichMove[0] + '>' + whichMove[1]).removeClass(whichMove[4]);
  $(whichMove[2] + '>' + whichMove[3]).addClass(whichMove[4]);
};

window.chess = {
  "game": game,
  "move": move
};

})(window);


  /*var initBoard = (function(window) {

    var black = {1, 2, 3, 4, 5, 6, 7, 8 };

    var white = {1, 2, 3, 4, 5, 6, 7, 8 };

    return black;
    return white;
    };

  })();

  var move = function(piece, fromX, fromY, toX, toY) {


  }

  window.board = "";

  var moves = [
    board[6][3] = board[4][3];
    board[6][3] = ' ';
    board[0][6] = board[2][5];
    board[0][6] = ' ';
    board[6][2] = board[4][2];
    board[6][2] = ' ';
    board[1][4] = board[2][4];
    board[1][4] = ' ';
    board[6][6] = board[5][6];
    board[6][6] = ' ';
    board[1][3] = board[3][3];
    board[1][3] = ' ';
    board[7][5] = board[6][6];
    board[7][5] = ' ';
    board[0][5] = board[1][4];
    board[0][5] = ' ';
    board[7][7] = board[5][5];
    board[6][6] = ' ';
  ];*/
