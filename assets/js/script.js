
// Targets the cells and turn the cells into an array 
let cell = document.querySelectorAll('.cell')
cell = Array.from(cell)

// usedCells is an array of all cells used whether O or X
let usedCells = [];

// array for just X cells used
let xCells = [];

// array for just O cells used
let oCells = [];



// The game will always start with player "O"
let turn = "O"
cell.forEach(function(cell, index){
    cell.addEventListener('click', function(){
        if (!usedCells.includes(index)) {
          usedCells.push(index);
          cell.innerText = turn;
          //work out if win or draw
          if (turn === "X") {
            xCells.push(index);
            checkWinner(xCells, 'X');
          }
          if (turn === "O") {
            oCells.push(index);
            checkWinner(oCells, 'O');
          }
          turn = turn ==="X" ? "O" : "X"
          // check if a draw, all cells will be used
          if (usedCells.length === 9) {
            checkWinner(xCells, 'D');
          }
        } 
    })
})
/*
Index of the grid
[0] [1] [2]
[3] [4] [5]
[6] [7] [8]
*/

// The combinations that lead to a win 
const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] ;

// To check if winning cinditions have been met
function checkWinner(playerArray, player) {
    if (player === 'D') {
      announce_win('D');
    }
    winningConditions.forEach(win => {
      let count = 0;
      win.forEach(el => {
        if (playerArray.includes(el)) {
          count ++;
          if (count === 3) {
            console.log('winner');
            announce_win(player);
          }
        }
      })
      }
    );
  }

  // Alert user if the game is a win or a draw using an alert box and reload page once aknowledged
  function announce_win(player) {
    
    if (player === 'D') {
      //now add this under grid or modal
      alert('Good game, it is a draw');
      location.reload();
    }
    alert(`Well Done, Player ${player} wins the game`);
    //now add this under grid or modal
    location.reload();

  }
  
  function findCommonElements3(arr1, arr2) {
    // Iterate through each element in the
    // first array and if some of them
    // include the elements in the second
    // array then return true
    return arr1.some(item => arr2.includes(item))
  }

  