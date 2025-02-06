const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X'; // Starting with player X
let board = ['', '', '', '', '', '', '', '', '']; // Board state
let gameActive = true;

const winPatterns = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Center column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal
  [2, 4, 6], // Diagonal
];

function handleClick(index) {
  if (board[index] === '' && gameActive) {
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
  }
}

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      alert(`${board[a]} wins!`);
      return;
    }
  }

  if (!board.includes('')) {
    gameActive = false;
    alert("It's a tie!");
  }
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.textContent = '');
  gameActive = true;
  currentPlayer = 'X';
}

// Attach event listeners to each cell
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleClick(index));
});

// Reset button
document.getElementById('resetBtn').addEventListener('click', resetGame);
