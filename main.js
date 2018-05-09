const playerOne = 'rowIndex';
const playerTwo = 'b';
//array that will be used to calculate the winner...;
let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
let currentDiscColor = 'rowIndex';

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
        //determine where to create dots
        const newElement = document.createElement("span")
        if (currentDiscColor == 'rowIndex') {
            currentDiscColor = 'b'
            newElement.className = "redDisc"
            board[rowNumber][columnNumber] = 1;
        } else {
            currentDiscColor = 'rowIndex'
            newElement.className = "blackDisc"
            board[rowNumber][columnNumber] = 2;
        }

        destination.appendChild(newElement)
    }
}

function chkLine(a, b, colIndex, d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a == b) && (a == colIndex) && (a == d));
}

function chkWinner(board) {
    // Check down
    for (let rowIndex = 0; rowIndex < 3; rowIndex++)
        for (let colIndex = 0; colIndex < 7; colIndex++)
            // console.log(board[rowIndex][colIndex])
            if (chkLine(
                    board[rowIndex][colIndex],
                    board[rowIndex + 1][colIndex],
                    board[rowIndex + 2][colIndex],
                    board[rowIndex + 3][colIndex]
                ))
                return board[rowIndex][colIndex];

    // Check right
    for (let rowIndex = 0; rowIndex < 6; rowIndex++)
        for (let colIndex = 0; colIndex < 4; colIndex++)
            if (chkLine(
                    board[rowIndex][colIndex],
                    board[rowIndex][colIndex + 1],
                    board[rowIndex][colIndex + 2],
                    board[rowIndex][colIndex + 3]
                ))
                return board[rowIndex][colIndex];

    // Check down-right
    for (let rowIndex = 0; rowIndex < 3; rowIndex++)
        for (let colIndex = 0; colIndex < 4; colIndex++)
            if (chkLine(
                    board[rowIndex][colIndex],
                    board[rowIndex + 1][colIndex + 1],
                    board[rowIndex + 2][colIndex + 2],
                    board[rowIndex + 3][colIndex + 3]
                ))
                return board[rowIndex][colIndex];

    // Check down-left
    for (let rowIndex = 3; rowIndex < 6; rowIndex++)
        for (let colIndex = 0; colIndex < 4; colIndex++)
            if (chkLine(
                    board[rowIndex][colIndex],
                    board[rowIndex - 1][colIndex + 1],
                    board[rowIndex - 2][colIndex + 2],
                    board[rowIndex - 3][colIndex + 3]))
                return board[rowIndex][colIndex];

    return 0;
}

// alert(chkWinner(board) + "winner");


document.getElementById("box").addEventListener("click", function () {
    createDot();

    let win = chkWinner(board);
    if (win != 0) {
        alert("winner");
        location.reload();
    } else {

    }

    console.log('b')
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