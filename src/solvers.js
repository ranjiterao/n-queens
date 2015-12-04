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

// [ [1,0,0,0],
//   [0,1,0,0],
//   [0,0,1,0],
//   [0,0,0,1]
//]

window.findNRooksSolution = function(n) {
  var solution = new Board({n:n});

  var rows = solution.rows();

  for (var i = 0; i < rows.length; i++) {

    //place a piece on the board at row,col
    // solution.togglePiece(i, column);
    // if current column is on the board
     for(var j = 0; j < rows.length; j++) {
        solution.togglePiece(i,j);
        if (!solution.hasAnyRooksConflicts()){
          break;
        } else {
          solution.togglePiece(i, j);
        }
     }
   }

  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

//   var solution = new Board({n:n});

//   var board = solution.rows();
//   var solutionCount = 0;

// // expectedSolutionCount = [1, 1, 2, 6, 24, 120, 720, 5040, 40320][n];
  
//   var subroutine = function(row) {
//     if(n === 3) {debugger}
//     for( var column = 0 ; column < board.length ; column ++) {
//       solution.togglePiece(row,column);
//       // console.log(solution.hasAnyRooksConflicts());
//       if (solution.hasAnyRooksConflicts()){
//         solution.togglePiece(row,column);
//       } else {
//         // check if its the last row
//         if(row === board.length - 1) {
//           solutionCount++;
//         } else {
//           subroutine(row + 1);
//         }
//       solution.togglePiece(row,column);
//       } 
//     }
//   }
//   subroutine(0);
   
//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   // console.log(solutionCount);
//   return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n:n});

  var board = solution.rows();
  var solutionCount = 0;

  if(solutionCount >= 1){
    return;
  }
  
  var subroutine = function(row) {
    if(n === 3) {debugger}
    for( var column = 0 ; column < board.length ; column ++) {
      solution.togglePiece(row,column);
      if (solution.hasAnyQueensConflicts()){
        solution.togglePiece(row,column);
      } else {
        if(row === board.length - 1) {
          solutionCount++;
        } else {
          subroutine(row + 1);
        }
      solution.togglePiece(row,column);
      } 
    }
  }
  subroutine(0);
   
  // console.log(solutionCount);
  return solution.rows();
  
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
