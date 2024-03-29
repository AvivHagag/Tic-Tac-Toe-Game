// -- Website Author: 
// --                Aviv Hagag 
// Dark Mode 
const modeSwitch = document.getElementById("mode-switch");
const circleColor = document.querySelector('.circle');
let ChooseLevel=false;
// Check for previously saved dark mode preference in localStorage
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled') {
  modeSwitch.checked = true;
  toggleDarkMode();
} else {
  modeSwitch.checked = false;
  toggleDarkMode();
}

modeSwitch.addEventListener("change", toggleDarkMode);

if (!modeSwitch.checked) { 
    circleColor.style.backgroundColor= 'white';
}

function toggleDarkMode() {
   const navbarTitle = document.getElementById("navbar-title");
   const BackBtn = document.getElementById("back-button");
   const ResetBtn = document.getElementById("reset-button");
   const level1 = document.getElementById("level1");
   const level2 = document.getElementById("level2");
   const level3 = document.getElementById("level3");
   const StartBtn = document.getElementById("StartBtn");
   const Header = document.querySelector('header');
   const body= document.querySelector('body');
   const modeText= document.getElementById("ModeText");
   const Status= document.getElementById("status");
   const Board = document.getElementById("board");
   if (modeSwitch.checked) {
      if(ChooseLevel==true) {
        StartBtn.classList.add('StartBtn2White');
        // StartBtn.classList.remove('StartBtn');
        if(Gameplay==1) {
          level1.classList.add('levelChoosenWhite');
        }
        if(Gameplay==2) {
          level2.classList.add('levelChoosenWhite');
        }
        if(Gameplay==3) {
          level3.classList.add('levelChoosenWhite');
        }
      }
      body.style.backgroundImage= "url('css/img/1.jpg')";
      circleColor.style.backgroundColor='black';
      navbarTitle.style.color = "#000";
      BackBtn.classList.add("whiteBtn");
      ResetBtn.classList.add("whiteBtn");
      level1.classList.add("levelWhite");
      level2.classList.add("levelWhite");
      level3.classList.add("levelWhite");
      StartBtn.classList.add("StartBtnWhite");
      Header.style.backgroundColor='white';
      Header.style.borderBottom = '3px dotted black';
      modeText.style.color='black';
      Status.style.color='black';
      modeText.style.backgroundColor='white';
      Board.style.backgroundColor="white";
      for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
          var card = document.getElementById('card' + row + col);
          card.classList.add("cardWhite");
        }
      }
      
   }else {
      navbarTitle.style.color = "#eee";
      BackBtn.classList.remove("whiteBtn");
      ResetBtn.classList.remove("whiteBtn");
      level1.classList.remove("levelWhite");
      level2.classList.remove("levelWhite");
      level3.classList.remove("levelWhite");
      StartBtn.classList.remove("StartBtnWhite");
      Header.style.backgroundColor='black';
      Header.style.borderBottom = '3px dotted white';
      circleColor.style.backgroundColor='white';
      body.style.backgroundImage= "url('css/img/2.jpg')";
      modeText.style.color='white';
      Status.style.color='white';
      modeText.style.backgroundColor='black';
      Board.style.backgroundColor="black";
      for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
          var card = document.getElementById('card' + row + col);
          card.classList.remove("cardWhite");
        }
      }
    }
    if (modeSwitch.checked) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  }


// Initialize the board
var board = [  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Initialize the player
var player = 'X';

let Gameplay=-1;
let BtnChange= false;
const button1 = document.getElementById("level1");
const button2 = document.getElementById("level2");
const button3 = document.getElementById("level3");
const StartBtn = document.getElementById("StartBtn");
const BackBtn = document.getElementById("back-button");
BackBtn.style.display="block";
button1.onclick = function() {
  Gameplay=1;
  ChooseLevel=true;
  if (!modeSwitch.checked) { 
    StartBtn.classList.add('StartBtn2');
    button1.classList.add('level');
    button1.classList.remove('levelWhite');
    button1.classList.add('levelChoosen');
    button2.classList.add('level');
    button2.classList.remove('levelWhite');
    button2.classList.remove('levelChoosen');
    button2.classList.remove('levelChoosenWhite');
    button3.classList.add('level');
    button3.classList.remove('levelWhite');
    button3.classList.remove('levelChoosen');
    button3.classList.remove('levelChoosenWhite');
  }
  else {
    StartBtn.classList.add('StartBtn2White');
    button1.classList.add('levelChoosenWhite');
    button2.classList.add('levelWhite');
    button2.classList.remove('levelChoosenWhite');
    button2.classList.remove('levelChoosen');
    button3.classList.add('levelWhite');
    button3.classList.remove('levelChoosenWhite');
    button3.classList.remove('levelChoosen');
  }
  console.log("Start Easy Mode game");
};
button2.onclick = function() {
  Gameplay=2;
  ChooseLevel=true;
  if (!modeSwitch.checked) { 
    StartBtn.classList.add('StartBtn2');
    button2.classList.add('level');
    button2.classList.remove('levelWhite');
    button2.classList.add('levelChoosen');
    button1.classList.add('level');
    button1.classList.remove('levelWhite');
    button1.classList.remove('levelChoosen');
    button1.classList.remove('levelChoosenWhite');
    button3.classList.add('level');
    button3.classList.remove('levelWhite');
    button3.classList.remove('levelChoosen');
    button3.classList.remove('levelChoosenWhite');
  }
  else {
    StartBtn.classList.add('StartBtn2White');
    button2.classList.add('levelChoosenWhite');
    button1.classList.add('levelWhite');
    button1.classList.remove('levelChoosenWhite');
    button1.classList.remove('levelChoosen');
    button3.classList.add('levelWhite');
    button3.classList.remove('levelChoosenWhite');
    button3.classList.remove('levelChoosen');
  }
  console.log("Start Hard Mode game")
};
button3.onclick = function() {
  Gameplay=3;
  ChooseLevel=true;
  if (!modeSwitch.checked) { 
    StartBtn.classList.add('StartBtn2');
    button3.classList.add('level');
    button3.classList.remove('levelWhite');
    button3.classList.add('levelChoosen');
    button1.classList.add('level');
    button1.classList.remove('levelWhite');
    button1.classList.remove('levelChoosen');
    button1.classList.remove('levelChoosenWhite');
    button2.classList.add('level');
    button2.classList.remove('levelWhite');
    button2.classList.remove('levelChoosen');
    button2.classList.remove('levelChoosenWhite');
  }
  else {
    StartBtn.classList.add('StartBtn2White');
    button3.classList.add('levelChoosenWhite');
    button1.classList.add('levelWhite');
    button1.classList.remove('levelChoosenWhite');
    button1.classList.remove('levelChoosen');
    button2.classList.add('levelWhite');
    button2.classList.remove('levelChoosenWhite');
    button2.classList.remove('levelChoosen');
  }
  console.log("Start Expert Mode game")
};
StartBtn.onclick = function() {
  if(ChooseLevel==false) {return;}
  BtnChange=true;
  const Choose = document.getElementById("Choose");
  const container = document.getElementById("InsideContainer");
  const StartbtnDiv = document.getElementById("playGame");
  const ResetBtn = document.getElementById("reset-button");
  const modeText= document.getElementById("ModeText");
  BackBtn.innerHTML="Choose Level<span></span><span></span><span></span><span></span><span></span><span></span>";
  ResetBtn.style.display="block";
  Choose.style.display = "none";
  StartbtnDiv.style.display = "none";
  container.style.display= "block";
  modeText.style.display= "none";
  if(Gameplay==3) {
    // Array of numbers
    const numbers = [0, 2];
    // Randomly choose a number from the array
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber1 = numbers[randomIndex];
    const randomIndex2 = Math.floor(Math.random() * numbers.length);
    const randomNumber2 = numbers[randomIndex2];
    board[randomNumber1][randomNumber2] = 'O';
    drawBoard();
  }
}
BackBtn.onclick = function() {
  if(BtnChange==true) {
  resetGame();
  window.location.reload();
  }
  else {
    window.location.href="index.html";
  }
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
      running=false;
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
        status.textContent ="It's a draw!";
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
        switch(Gameplay) {
          case 1: {
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
                  status.textContent ="It's a draw!";
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
            break;
          }
          case 2: {
            // Switch to the Computer
            player = 'O';
            //Status of the player
            var status = document.getElementById('status');
            status.textContent = "Computer O's turn";
            // Set delay for fun
            setTimeout(function() {
              
                // Function to check if a player has a winning move
                function hasWinningMove(player) {
                  // Check for horizontal winning moves
                  for (var row = 0; row < 3; row++) {
                    if (
                      board[row][0] === player &&
                      board[row][1] === player &&
                      board[row][2] === ''
                    ) {
                      return [row, 2]; // Winning move in the current row
                    }
                    if (
                      board[row][0] === player &&
                      board[row][1] === '' &&
                      board[row][2] === player
                    ) {
                      return [row, 1]; // Winning move in the current row
                    }
                    if (
                      board[row][0] === '' &&
                      board[row][1] === player &&
                      board[row][2] === player
                    ) {
                      return [row, 0]; // Winning move in the current row
                    }
                  }
              
                  // Check for vertical winning moves
                  for (var col = 0; col < 3; col++) {
                    if (
                      board[0][col] === player &&
                      board[1][col] === player &&
                      board[2][col] === ''
                    ) {
                      return [2, col]; // Winning move in the current column
                    }
                    if (
                      board[0][col] === player &&
                      board[1][col] === '' &&
                      board[2][col] === player
                    ) {
                      return [1, col]; // Winning move in the current column
                    }
                    if (
                      board[0][col] === '' &&
                      board[1][col] === player &&
                      board[2][col] === player
                    ) {
                      return [0, col]; // Winning move in the current column
                    }
                  }
              
                  // Check for diagonal winning moves
                  if (
                    board[0][0] === player &&
                    board[1][1] === player &&
                    board[2][2] === ''
                  ) {
                    return [2, 2]; // Winning move in the main diagonal
                  }
                  if (
                    board[0][0] === player &&
                    board[1][1] === '' &&
                    board[2][2] === player
                  ) {
                    return [1, 1]; // Winning move in the main diagonal
                  }
                  if (
                    board[0][0] === '' &&
                    board[1][1] === player &&
                    board[2][2] === player
                  ) {
                    return [0, 0]; // Winning move in the main diagonal
                  }
                  if (
                    board[0][2] === player &&
                    board[1][1] === player &&
                    board[2][0] === ''
                  ) {
                    return [2, 0]; // Winning move in the opposite diagonal
                  }
                  if (
                    board[0][2] === player &&
                    board[1][1] === '' &&
                    board[2][0] === player
                  ) {
                    return [1, 1]; // Winning move in the opposite diagonal
                  }
                  if (
                    board[0][2] === '' &&
                    board[1][1] === player &&
                    board[2][0] === player
                  ) {
                    return [0, 2]; // Winning move in the opposite diagonal
                  }
              
                  return null; // No winning move found
                }
              
                // Check if there is a winning move for the computer
                var computerMove = hasWinningMove('O');
                if (computerMove) {
                  board[computerMove[0]][computerMove[1]] = 'O';
                } 
                else {
                  // Check if there is a winning move for the player (to block)
                  var playerMove = hasWinningMove('X');
                  if (playerMove) {
                    board[playerMove[0]][playerMove[1]] = 'O';
                  } 
                  else {
                    // No winning moves found, select a random spot
                    // Make the computer's move
                    var openSpots = [];
                    for (var i = 0; i < 3; i++) {
                      for (var j = 0; j < 3; j++) {
                        if (board[i][j] === '') {
                          openSpots.push({ row: i, col: j });
                        }
                      }
                    }
                    computerMove = openSpots[Math.floor(Math.random() * openSpots.length)];
                    board[computerMove.row][computerMove.col] = 'O';
                  }
                }
              
                // Continue with the remaining game logic
                // ...
              
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
                  status.textContent ="It's a draw!";
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
            break;
          }
          case 3: {
            // Switch to the Computer
            player = 'O';
            //Status of the player
            var status = document.getElementById('status');
            status.textContent = "Computer O's turn";
            // Set delay for fun
            setTimeout(function() {
              var openSpots = [];
              for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                  if (board[i][j] === '') {
                    openSpots.push({ row: i, col: j });
                  }
                }
              }
              if(openSpots.length==7) {
                if(board[0][0] === 'O' && board[0][1] === 'X' || board[0][0] === 'O' && board[1][0] === 'X') {
                    board[2][2] = 'O';
                } 
                else if(board[0][2] === 'O' && board[0][1] === 'X' || board[0][2] === 'O' && board[1][2] === 'X') {
                    board[2][0] = 'O';
                } 
                else if(board[2][0] === 'O' && board[1][0] === 'X' || board[2][0] === 'O' && board[2][1] === 'X') {
                    board[0][2] = 'O';
                } 
                else if(board[2][2] === 'O' && board[2][1] === 'X' || board[2][2] === 'O' && board[1][2] === 'X') {
                    board[0][0] = 'O';
                }
                else {
                  if(board[0][0] === 'O') {
                    if(board[2][2]=== '')
                      board[2][2] = 'O';
                    else
                      board[0][2] = 'O';
                  }
                  else if(board[0][2] === 'O') {
                    if(board[2][0]=== '')
                      board[2][0]= 'O';
                    else
                      board[2][2] = 'O';
                  }
                  else if(board[2][0] === 'O'){
                    if(board[0][2]=== '')
                      board[0][2]= 'O';
                    else
                      board[2][2] = 'O';
                  }
                  else if(board[2][2] === 'O') {
                    if(board[0][0]=== '')
                      board[0][0]= 'O';
                    else
                      board[0][2] = 'O';
                  }
                }
              }
              else {
                // Function to check if a player has a winning move
                function hasWinningMove(player) {
                  // Check for horizontal winning moves
                  for (var row = 0; row < 3; row++) {
                    if (
                      board[row][0] === player &&
                      board[row][1] === player &&
                      board[row][2] === ''
                    ) {
                      return [row, 2]; // Winning move in the current row
                    }
                    if (
                      board[row][0] === player &&
                      board[row][1] === '' &&
                      board[row][2] === player
                    ) {
                      return [row, 1]; // Winning move in the current row
                    }
                    if (
                      board[row][0] === '' &&
                      board[row][1] === player &&
                      board[row][2] === player
                    ) {
                      return [row, 0]; // Winning move in the current row
                    }
                  }
              
                  // Check for vertical winning moves
                  for (var col = 0; col < 3; col++) {
                    if (
                      board[0][col] === player &&
                      board[1][col] === player &&
                      board[2][col] === ''
                    ) {
                      return [2, col]; // Winning move in the current column
                    }
                    if (
                      board[0][col] === player &&
                      board[1][col] === '' &&
                      board[2][col] === player
                    ) {
                      return [1, col]; // Winning move in the current column
                    }
                    if (
                      board[0][col] === '' &&
                      board[1][col] === player &&
                      board[2][col] === player
                    ) {
                      return [0, col]; // Winning move in the current column
                    }
                  }
              
                  // Check for diagonal winning moves
                  if (
                    board[0][0] === player &&
                    board[1][1] === player &&
                    board[2][2] === ''
                  ) {
                    return [2, 2]; // Winning move in the main diagonal
                  }
                  if (
                    board[0][0] === player &&
                    board[1][1] === '' &&
                    board[2][2] === player
                  ) {
                    return [1, 1]; // Winning move in the main diagonal
                  }
                  if (
                    board[0][0] === '' &&
                    board[1][1] === player &&
                    board[2][2] === player
                  ) {
                    return [0, 0]; // Winning move in the main diagonal
                  }
                  if (
                    board[0][2] === player &&
                    board[1][1] === player &&
                    board[2][0] === ''
                  ) {
                    return [2, 0]; // Winning move in the opposite diagonal
                  }
                  if (
                    board[0][2] === player &&
                    board[1][1] === '' &&
                    board[2][0] === player
                  ) {
                    return [1, 1]; // Winning move in the opposite diagonal
                  }
                  if (
                    board[0][2] === '' &&
                    board[1][1] === player &&
                    board[2][0] === player
                  ) {
                    return [0, 2]; // Winning move in the opposite diagonal
                  }
              
                  return null; // No winning move found
                }
              
                // Check if there is a winning move for the computer
                var computerMove = hasWinningMove('O');
                if (computerMove) {
                  board[computerMove[0]][computerMove[1]] = 'O';
                } 
                else {
                  // Check if there is a winning move for the player (to block)
                  var playerMove = hasWinningMove('X');
                  if (playerMove) {
                    board[playerMove[0]][playerMove[1]] = 'O';
                  } 
                  else {
                    var openSpots = [];
              for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                  if (board[i][j] === '') {
                    openSpots.push({ row: i, col: j });
                  }
                }
              }
              if(openSpots.length==5) {
                if(board[0][0] === 'O' && board[0][2] === 'O' && board[2][0] === '') {
                    board[2][0] = 'O';
                } 
                else if(board[0][0] === 'O' && board[0][2] === 'O' && board[2][2] === '') {
                  board[2][2] = 'O';
                } 
                else if(board[0][0] === 'O' && board[2][0] === 'O' && board[0][2] === '') {
                  board[0][2] = 'O';
                } 
                else if(board[0][0] === 'O' && board[2][0] === 'O' && board[2][2] === '') {
                  board[2][2] = 'O';
                } 
                else if(board[0][2] === 'O' && board[2][2] === 'O' && board[2][0] === '') {
                  board[2][0] = 'O';
                }
                else if(board[0][2] === 'O' && board[2][2] === 'O' && board[0][0] === '') {
                  board[0][0] = 'O';
                }  
                else if(board[2][2] === 'O' && board[2][0] === 'O' && board[0][2] === '') {
                  board[0][2] = 'O';
                } 
                else if(board[2][2] === 'O' && board[2][0] === 'O' && board[0][0] === '') {
                  board[0][0] = 'O';
                } 
              } 
              else {
                    // No winning moves found, select a random spot
                    // Make the computer's move
                    var openSpots = [];
                    for (var i = 0; i < 3; i++) {
                      for (var j = 0; j < 3; j++) {
                        if (board[i][j] === '') {
                          openSpots.push({ row: i, col: j });
                        }
                      }
                    }
                    computerMove = openSpots[Math.floor(Math.random() * openSpots.length)];
                    board[computerMove.row][computerMove.col] = 'O';
                  }
                  }
                }
              }
                // Continue with the remaining game logic
                // ...
              
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
                  status.textContent ="It's a draw!";
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
            break;
          }
        }
      }
      else {
        player = 'X';
      }
    }
  }
}

    
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

    if(Gameplay==3) {
      // Array of numbers
      const numbers = [0, 2];
      // Randomly choose a number from the array
      const randomIndex = Math.floor(Math.random() * numbers.length);
      const randomNumber1 = numbers[randomIndex];
      const randomIndex2 = Math.floor(Math.random() * numbers.length);
      const randomNumber2 = numbers[randomIndex2];
      board[randomNumber1][randomNumber2] = 'O';
      drawBoard();
    }

    // Clear the status message
    var status = document.getElementById('status');
    status.textContent = "Player X's turn";
  }
  
  // Initialize the reset button
  var resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', resetGame);
  
        
