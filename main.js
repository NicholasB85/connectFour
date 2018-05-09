const playerOne = 'columnIndex';
const playerTwo = 'b';

let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
let currentDiscColor = 'columnIndex';

function createDot() {
    //    console.log(event.target);
    let destination = event.target;
    let col = event.target;
    let columnNumber = col.id;
    //    console.log(col.id)
    if (destination.childElementCount >= 6) {
        alert("too many dots")
    } else {
        let rowNumber = document.getElementById(columnNumber).childElementCount;
        // console.log(rowNumber)

        const newElement = document.createElement("span")
        if (currentDiscColor == 'columnIndex') {
            currentDiscColor = 'b'
            newElement.className = "redDisc"
            board[rowNumber][columnNumber] = 1;
        } else {
            currentDiscColor = 'columnIndex'
            newElement.className = "blackDisc"
            board[rowNumber][columnNumber] = 1;
        }

        destination.appendChild(newElement)
    }
}

function allAreEqual(a, b, rowIndex, d) {
    // Check first cell non-zero and all cells match
    return (a && (a === b) && (a === rowIndex) && (a === d));
}

function chkWinner(board) {
    // Check down
    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
        for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
            if (
                allAreEqual(
                    board[columnIndex][rowIndex], 
                    board[columnIndex + 1][rowIndex], 
                    board[columnIndex + 2][rowIndex], 
                    board[columnIndex + 3][rowIndex]
                )
            ) {
                return board[columnIndex][rowIndex];
            }
        }
    }

    // Check right
    for (let columnIndex = 0; columnIndex < 6; columnIndex++) {
        for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
            if (
                allAreEqual(
                    board[columnIndex][rowIndex], 
                    board[columnIndex][rowIndex + 1], 
                    board[columnIndex][rowIndex + 2], 
                    board[columnIndex][rowIndex + 3]
                )
            ) {
                return board[columnIndex][rowIndex];
            }
        }
    }

    // Check down-right
    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
        for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
            if (
                allAreEqual(
                    board[columnIndex][rowIndex],
                    board[columnIndex + 1][rowIndex + 1],
                    board[columnIndex + 2][rowIndex + 2],
                    board[columnIndex + 3][rowIndex + 3]
                    )
                ) {
                return board[columnIndex][rowIndex];
            }
        }
    }

    // Check down-left
    for (let columnIndex = 3; columnIndex < 6; columnIndex++) {
        for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
            if (
                allAreEqual(
                    board[columnIndex][rowIndex],
                    board[columnIndex - 1][rowIndex + 1],
                    board[columnIndex - 2][rowIndex + 2],
                    board[columnIndex - 3][rowIndex + 3]
                )
            ) {
                return board[columnIndex][rowIndex];
            }
        }
    }

    return 0;
}

// alert(chkWinner(board) + "winner");


document.getElementById("box").addEventListener("click", function () {
    createDot();

    let win = chkWinner(board);
    if (win == 1) {
        alert("winner");
        location.reload();
    } else {

    }

    console.log(win)
});



// const checkWinDiagonalLeft = function () {
//     for (let y = 0; y < gameArray.length - 3; y++) {
//         let row = gameArray[y];
//         // iterate each cell in the row
//         for (let x = 0; x < row.length; x++) {
//             cell = gameArray[y][x];

//             // Only check if cell is filled
//             if (cell !== 0) {

//                 // Check the next two cells for the same value
//                 if (cell === gameArray[y + 1][x + 1] && cell === gameArray[y + 2][x + 2] && cell === gameArray[y + 3][x + 3]) {
//                     alert(currentPlayer + ' wins down and to the left!');
//                     reset();
//                     connectFour();
//                 }
//             }
//         }
//     }
// }