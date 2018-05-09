const playerOne = 'r';
const playerTwo = 'b';

let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
let currentDiscColor = 'r';

function createDot() {
//    console.log(event.target);
   let destination = event.target;
   let col = event.target;
   let columnNumber = col.id;
//    console.log(col.id)
   if (destination.childElementCount >= 6){
       alert("too many dots")
   } else { 
    let rowNumber = document.getElementById(columnNumber).childElementCount;
    // console.log(rowNumber)

   const newElement = document.createElement("span")
   if (currentDiscColor == 'r' ){
       currentDiscColor='b'
       newElement.className = "redDisc"
       board[columnNumber][rowNumber] = 1;
   }else{
     currentDiscColor='r'
     newElement.className = "blackDisc"
     board[columnNumber][rowNumber] = 2;
   }
   
   destination.appendChild(newElement)
}
}

function chkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a == b) && (a == c) && (a == d));
}

function chkWinner(board) {
    // Check down
    for (let r = 0; r < 3; r++)
        for (let c = 0; c < 4; c++)
        // console.log(board[r][c])
            if (chkLine(board[r][c], board[r+1][c], board[r+2][c], board[r+3][c]))
                return board[r][c];

    // Check right
    for (let r = 0; r < 6; r++)
        for (let c = 0; c < 4; c++)
            if (chkLine(board[r][c], board[r][c+1], board[r][c+2], board[r][c+3]))
                return board[r][c];

    // Check down-right
    for (let r = 0; r < 3; r++)
        for (let c = 0; c < 4; c++)
            if (chkLine(board[r][c], board[r+1][c+1], board[r+2][c+2], board[r+3][c+3]))
                return board[r][c];

    // Check down-left
    for (let r = 3; r < 6; r++)
        for (let c = 0; c < 4; c++)
            if (chkLine(board[r][c], board[r-1][c+1], board[r-2][c+2], board[r-3][c+3]))
                return board[r][c];

    return 0;
}

// alert(chkWinner(board) + "winner");


document.getElementById("box").addEventListener("click",function(){ createDot(); 
    
    let win = chkWinner(board);
     if (win != 0) {
         alert("winner");
         location.reload();
     }else {

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
