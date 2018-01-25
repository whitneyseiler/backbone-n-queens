/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


//returns ONE solution option
//basically a helper function to tell you when you have found a solution
window.findNRooksSolution = function(n) {
  //create new board
  var board = new Board({n:n});
  var pieces = 0; 
  var findSolution = function(board, n, r) {
    // if (n === pieces) {
    //   return board;
    // }
    //for row in board
    for (var r = 0; r < n; r++) {
      // debugger;
      //for column in row
      for (var c = 0; c < n; c++) {
        board.togglePiece(r, c);
        // pieces += 1;
        if (board.hasAnyRooksConflicts() === true) {
          board.togglePiece(r, c);
          // pieces -= 1;
        }
      }
    } 
  };

  // var solution = findSolution(board);    
  
  // return solution;
  findSolution(board, n, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
  console.log(board.rows());
  console.log(board)
  return board.rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
