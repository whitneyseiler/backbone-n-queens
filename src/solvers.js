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
  var board = new Board({n: n});
  var pieces = 0; 
  var findSolution = function(board, n, r) {

    //for row in board
    for (var r = 0; r < n; r++) {
      //for column in row
      for (var c = 0; c < n; c++) {
        board.togglePiece(r, c);
        if (board.hasAnyRooksConflicts() === true) {
          board.togglePiece(r, c);
        } else {
          break;
        }
      }
    } 
  };
  findSolution(board, n, 0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
  return board.rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});

  if (n === 0 || n === 1) {
    return 1;
  }

  var checkBoard = function(board, n, row) {

    if (row === n) {
      solutionCount++;
      return;
    }
    
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyRooksConflicts()) {
        checkBoard(board, n, row + 1);
      }
      board.togglePiece(row, col);
    }
  };


  checkBoard(board, n, 0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  var board = new Board({n: n});

  if (n === 2 || n === 3) {
    return board.rows();
  }

  var checkBoard = function(board, n, row) {

    if (row === n) {
      if (solution === undefined) {
        solution = JSON.parse(JSON.stringify(board.rows()))
      }
      return 'this is dumb';
    }
    
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        checkBoard(board, n, row + 1);
      }
      board.togglePiece(row, col);
    }
  };

  checkBoard(board, n, 0);
  console.log('Number of solutions for ' + n + ' queens:', solution);
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
// console.log(JSON.stringify(board.rows()))
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});

  if (n === 0 || n === 1) {
    return 1;
  }

  // debugger;
  var checkBoard = function(board, n, row) {

    if (row === n) {
      solutionCount++;
      // console.log(JSON.stringify(board.rows()))
      return 'this is dumb';
    }
    // debugger;
    
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        checkBoard(board, n, row + 1);
      }
      board.togglePiece(row, col);
    }
  };

  checkBoard(board, n, 0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
