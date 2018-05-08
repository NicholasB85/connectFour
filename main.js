// let currentPlayer = "";

// placeDisc = function(event) {
//     const column = Event.currentTarget;

//     if(column.childElementCount <= 5) {
//         if(currentPlayer === "red") {
//             const redDisc = document.createElement("div");
//             redDisc.getElementsByClassName = ".redDisc";
//             column.appendChild(redDisc);
//             currentPlayer = "black"
// console.log(redDisc)
//         } else if (currentPlayer === "black") {
//             const blackDisc = document.createElement("div");
//             blackDisc.getElementsByClassName = ".blackDisc";
//             column.appendChild(blackDisc);
//             currentPlayer = "red";
//         }
//     }

//     checkForWin()
// }

// function checkForWin() {
//     const columns = Array.from(document.querySelectorAll("columns"))
// console.log(columns)
//     for (let columnIndex in columns) {
//         const thisColumn = columns[columnIndex]
//         const discInColumn = array.from(thisColumn.childNodes)

//         for ( let rowIndex in discInColumn) {
//             const thisPlace = discInColumn[rowIndex]

//             if (thisPeice.className === "discRed") {

//             } else if (thisPeice.className === "discBlack"){

//             }
//         }
//     }
// }

// function assignToColumns () {
//     for (let columnElement of document.querySelectorAll(".columns")) {
//         columnElement.addEventListener("click", placeDisc())
//     }
// }

// assignToColumns()
let newArray = new Array([],[],[],[],[],[],[],
                         [],[],[],[],[],[],[],   
                         [],[],[],[],[],[],[],
                         [],[],[],[],[],[],[],
                         [],[],[],[],[],[],[],
                         [],[],[],[],[],[],[]);
console.log(newArray)
let currentDiscColor = 'r';

function createDot() {
   console.log(event.target);
   let destination = event.target;
   const newElement = document.createElement("span")
   if (currentDiscColor == 'r' ){
       currentDiscColor='b'
       newElement.className = "redDisc"
   }else{
    currentDiscColor='r'
     newElement.className = "blackDisc"
   }

   destination.appendChild(newElement)
}


document.getElementById("box").addEventListener("click",function(){ createDot()});

console.log(newArray)