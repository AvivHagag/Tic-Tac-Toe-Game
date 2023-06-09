
// Initialize the board
var board = [  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Initialize the player
var player = 'X';

let Gameplay=-1;
let ChooseLevel=false;
const button1 = document.getElementById("level1");
const button2 = document.getElementById("level2");
const button3 = document.getElementById("level3");
const StartBtn = document.getElementById("StartBtn");
const BackToMenu = document.getElementById("back-button")
button1.onclick = function() {
  Gameplay=1;
  ChooseLevel=true;
  button1.classList.remove('level');
  button1.classList.add('levelChoosen');
  button2.classList.add('level');
  button2.classList.remove('levelChoosen');
  button3.classList.add('level');
  button3.classList.remove('levelChoosen');
  const StartBtn = document.getElementById("StartBtn");
  StartBtn.classList.remove('StartBtn');
  StartBtn.classList.add('StartBtn2');
  console.log("Start Easy Mode game");
};
button2.onclick = function() {
  Gameplay=2;
  ChooseLevel=true;
  button1.classList.add('level');
  button1.classList.remove('levelChoosen');
  button2.classList.remove('level');
  button2.classList.add('levelChoosen');
  button3.classList.add('level');
  button3.classList.remove('levelChoosen');
  const StartBtn = document.getElementById("StartBtn");
  StartBtn.classList.remove('StartBtn');
  StartBtn.classList.add('StartBtn2');
  console.log("Start Hard Mode game")
};
button3.onclick = function() {
  Gameplay=3;
  ChooseLevel=true;
  button1.classList.add('level');
  button1.classList.remove('levelChoosen');
  button2.classList.add('level');
  button2.classList.remove('levelChoosen');
  button3.classList.remove('level');
  button3.classList.add('levelChoosen');
  const StartBtn = document.getElementById("StartBtn");
  StartBtn.classList.remove('StartBtn');
  StartBtn.classList.add('StartBtn2');
  console.log("Start Expert Mode game")
};
StartBtn.onclick = function() {
  if(ChooseLevel==false) {return;}
  const Choose = document.getElementById("Choose");
  const container = document.getElementById("container");
  const StartbtnDiv = document.getElementById("playGame");
  Choose.style.display = "none";
  StartbtnDiv.style.display = "none";
  container.style.display= "block";
}
BackToMenu.onclick = function() {
  resetGame();
  window.location.reload();
}
// Initialize the winner
var winner = null;
// Initialize the cards that makes the win
var winningCards = null;
// Define the function to check if there is a winner
function checkWinner() {
    // Check for horizontal wins
    for (var row = 0; row < 3; row++) {
      if (board[row][0] !== '' && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
        winner = board[row][0];
        winningCards = [[row, 0], [row, 1], [row, 2]];
        break;
      }
    }
  
    // Check for vertical wins
    if (winner === null) {
      for (var col = 0; col < 3; col++) {
        if (board[0][col] !== '' && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
          winner = board[0][col];
          winningCards = [[0, col], [1, col], [2, col]];
          break;
        }
      }
    }
  
    // Check for diagonal wins
    if (winner === null) {
      if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        winner = board[0][0];
        winningCards = [[0, 0], [1, 1], [2, 2]];
      } else if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        winner = board[0][2];
        winningCards = [[0, 2], [1, 1], [2, 0]];
      }
    }
  
    // Check for a tie
    var openSpots = 0;
    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        if (board[row][col] === '') {
          openSpots++;
        }
      }
    }
    if (winner === null && openSpots === 0) {
      winner = 'T';
    }
  }
  

// Define the function to draw the board
function drawBoard() {
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      var card = document.getElementById('card' + row + col);
      card.textContent = board[row][col];
      if (board[row][col] === 'X') {
        card.classList.add('X');
      } else if (board[row][col] === 'O') {
        card.classList.add('O');
      } else {
        card.classList.remove('X');
        card.classList.remove('O');
      }
    }
  }
  if (winner!=null) {
    for (var place=0;place<3;place++) {
        if(winningCards) {
        var card = document.getElementById('card' + winningCards[place][0] + winningCards[place][1]);
        console.log(card)
        card.classList.remove('X');
        card.classList.remove('O');
        card.classList.add('W');
        card.classList.add('zoom-in-out-box')
        }
        else {
            for (var j = 0; j < 3; j++) {
                var card = document.getElementById('card' + place + j);
                card.textContent = board[place][j];
                card.classList.remove('X');
                card.classList.remove('O');
                card.classList.add('Tie');
                card.classList.add('zoom-in-out-box')
            }
        }
    }
  }
}
let running=false;
// Define the function to handle a card click
function cardClicked() {
  if(running==true) {
    return;
  }
  else {
    running=true;
    // Get the row and column of the clicked card
    var row = this.getAttribute('data-row');
    var col = this.getAttribute('data-col');

    // Check if the card has already been played
    if (board[row][col] !== '') {
      return;
    }

    // Update the board with the player's move
    board[row][col] = player;

    // Check for a winner or a tie
    checkWinner();

    // Draw the board
    drawBoard();

    // Check if the game is over
    if (winner !== null) {
      // Display the winner or tie message
      var status = document.getElementById('status');
      if (winner === 'T') {
        status.textContent ="It's a tie!";
      } else {
        status.textContent = "Winner: " + winner;
      }
      
      // Disable all the cards
      var cards = document.getElementsByClassName('card');
      for (var i = 0; i < cards.length; i++) {
        cards[i].removeEventListener('click', cardClicked);
      }
    } else {
      // Switch to the other player
      if (player === 'X') {
        // Switch to the Computer
        player = 'O';
        //Status of the player
        var status = document.getElementById('status');
        status.textContent = "Computer O's turn";
        // Set delay for fun
        setTimeout(function() {
          // Make the computer's move
          var openSpots = [];
          for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
              if (board[i][j] === '') {
                openSpots.push({ row: i, col: j });
              }
            }
          }
          var computerMove = openSpots[Math.floor(Math.random() * openSpots.length)];
          board[computerMove.row][computerMove.col] = 'O';
          
          // Switch back to the player
          player = 'X';
          //Status of the player
          var status = document.getElementById('status');
          status.textContent = "Player X's turn"; 
          running=false;

          // Check for a winner or a tie
          checkWinner();
          
          // Draw the board
          drawBoard();
          
          // Check if the game is over
          if (winner !== null) {
            // Display the winner or tie message
            var status = document.getElementById('status');
            if (winner === 'T') {
              status.textContent ="It's a tie!";
            } else {
              status.textContent = "Winner: " + winner;
            }
            
            // Disable all the cards
            var cards = document.getElementsByClassName('card');
            for (var i = 0; i < cards.length; i++) {
              cards[i].removeEventListener('click', cardClicked);
            }
          }
        }, 1000);
      } 
      else {
        player = 'X';
      }
    }
  }
}


// // Define the function to handle a card click
// function cardClicked() {
//     // Get the row and column of the clicked card
//     var row = this.getAttribute('data-row');
//     var col = this.getAttribute('data-col');
//     //Status of the player
//     var status = document.getElementById('status');

//     // Check if the card has already been played
//     if (board[row][col] !== '') {
//       return;
//     }
  
//     // Update the board with the player's move
//     board[row][col] = player;
//     // Check for a winner or a tie
//     checkWinner();
  
//     // Draw the board
//     drawBoard();
  
//     // Check if the game is over
//     if (winner !== null) {
//       // Display the winner or tie message
//       var status = document.getElementById('status');
//       if (winner === 'T') {
//         status.textContent ="It's a tie!";
//       } else {
//         status.textContent = "Winner: " + winner;
//       }
      
//       // Disable all the cards
//       var cards = document.getElementsByClassName('card');
//       for (var i = 0; i < cards.length; i++) {
//         cards[i].removeEventListener('click', cardClicked);
//       }
//     } else {
//       // Switch to the other player
//       if (player === 'X') {
//         player = 'O';
//         } else {
//         player = 'X';
//         }
  
//       // Make the computer's move
//       var openSpots = [];
//       for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < 3; j++) {
//           if (board[i][j] === '') {
//             openSpots.push({ row: i, col: j });
//           }
//         }
//       }
//       var computerMove = openSpots[Math.floor(Math.random() * openSpots.length)];
//       board[computerMove.row][computerMove.col] = 'O';
  
//       // Check for a winner or a tie
//       checkWinner();
  
//       // Draw the board
//       drawBoard();
  
//       // Check if the game is over
//       if (winner !== null) {
//         // Display the winner or tie message
//         var status = document.getElementById('status');
//         if (winner === 'T') {
//           status.textContent ="It's a tie!";
//         } else {
//           status.textContent = "Winner: " + winner;
//         }
        
//         // Disable all the cards
//         var cards = document.getElementsByClassName('card');
//         for (var i = 0; i < cards.length; i++) {
//           cards[i].removeEventListener('click', cardClicked);
//         }
//       } else {
//         // Switch back to the player
//         player = 'X';
//       }
//     }
//   }
  
  
    
    // Initialize the cards
    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardClicked);
    }
    
    // Draw the board
    drawBoard();
 
// Define the function to reset the game
function resetGame() {
    // Initialize the board
    board = [  ['', '', ''],
              ['', '', ''],
              ['', '', '']
    ];
    
    // Initialize the player
    player = 'X';
    // Initialize the winner
    winner = null;
    running=false;
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            var card = document.getElementById('card' + row + col);
            card.textContent = board[row][col];
            card.classList.remove('X');
            card.classList.remove('O');
            card.classList.remove('Tie');
            card.classList.remove('W');
            card.classList.remove('zoom-in-out-box')
        }
    }
    winningCards = null;
    // Draw the board
    drawBoard();
  
    // Enable all the cards
    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', cardClicked);
    }
  
    // Clear the status message
    var status = document.getElementById('status');
    status.textContent = "Player X's turn";
  }
  
  // Initialize the reset button
  var resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', resetGame);
  
        

