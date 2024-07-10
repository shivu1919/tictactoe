document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const restartButton = document.getElementById('restartButton');
    let currentPlayer = 'X';
    let moves = 0;
    let gameEnded = false;

    // Create cells
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = i;
        cell.addEventListener('click', () => cellClick(cell));
        board.appendChild(cell);
    }

    // Handle cell click
    function cellClick(cell) {
        if (cell.textContent || gameEnded) return;
        cell.textContent = currentPlayer;
        moves++;

        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            gameEnded = true;
        } 
        else if (moves === 9) {
            alert('It\'s a draw!');
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    // Check for a win
    function checkWin() {
        const cells = document.getElementsByClassName('cell');
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];

        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                return true;
            }
        }
        return false;
    }

    // Restart game
    restartButton.addEventListener('click', () => {
        const cells = document.getElementsByClassName('cell');
        Array.from(cells).forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
        moves = 0;
        gameEnded = false;
    });
});
