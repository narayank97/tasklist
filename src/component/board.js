import React, { useEffect, useState } from 'react';

function Board() {
  // Component logic and JSX here

  const boardSize = 3;
  const [board, setBoard] = useState([]);
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(false);
  const icons = { 0: 'X', 1: 'O' };


  useEffect(() => {
    let newBoard = [];
    for (let i = 0; i < boardSize; i++) {
      let boardRow = Array(boardSize).fill(null);
      newBoard.push(boardRow);
    }
    setBoard(newBoard);
  }, []);

  const selectPosition = (row, col) => {
    if (!board[row][col]) {
      const iconKey = turn % 2;
      board[row][col] = icons[iconKey];
      setBoard(board);
      setTurn(turn + 1);
      setWinner(winCheck(board));
      return
    }
  }

  const winCheck = (board) => {
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        let currentPlayer = board[i][j];
        console.log("🚀🚀🚀🚀🚀 ~ winCheck ~ currentPlayer:", currentPlayer)
        if (currentPlayer) {
          let currentRow = i;
          let currentCol = j;
          let verticalCheck = 0;
          let horizontalCheck = 0;
          let diagnolCheck = 0;

          //vertical check
          while (currentPlayer === board[currentRow][currentCol] && currentRow < boardSize) {
            currentRow += 1;
            verticalCheck += 1;
            if (verticalCheck === boardSize) {
              return true;
            }
          }

          currentRow = i;
          currentCol = j;
          //horizontal check
          while (currentPlayer === board[currentRow][currentCol] && currentCol < boardSize) {
            currentCol += 1;
            horizontalCheck += 1;
            if (horizontalCheck === boardSize) {
              return true;
            }
          }

          currentRow = i;
          currentCol = j;
          //diagnol check
          while (currentPlayer === board[currentRow][currentCol] && currentCol < boardSize && currentRow < boardSize) {
            currentCol += 1;
            currentRow += 1;
            diagnolCheck += 1;
            if (diagnolCheck === boardSize) {
              return true;
            }
          }
        }
      }
    }
  }

  return (
    <div>
      {
        winner && alert("We Have a winner!")
      }
      {board &&
        board.map((row, rowIndex) => {
          return (
            <div
              key={"row" + rowIndex}
              style={
                {
                  display: "flex",
                  flexDirection: "row",
                }
              }
            >
              {
                row.map((col, colIndex) => {
                  return (
                    <div
                      onClick={() => selectPosition(rowIndex, colIndex)}
                      key={"col" + colIndex}
                      style={
                        {
                          border: "1px solid red",
                          width: "200px",
                          height: "200px",
                        }
                      }
                    >
                      {board[rowIndex][colIndex] ?? ''}

                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  );
};

export default Board;