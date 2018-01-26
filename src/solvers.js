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

  // debugger;
  var checkBoard = function(board, n, row) {

    if (row === n) {
      solutionCount++;
      return 'this is dumb';
    }
    // debugger;
    
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
  var solution = []; //fixme
  var board = new Board({n: n});
  // console.log('why? ', JSON.stringify(new Board({0:0}).rows()))
  
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [[1]];
  } 

  // debugger;
  var checkBoard = function(board, n, row) {

    if (row === n) {
      return board.rows();
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
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(board.rows()));
  return board.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
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
