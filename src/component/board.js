import React, { useEffect, useState } from 'react';

function Board() {
  // Component logic and JSX here

  const boardSize = 3;
  const [board, setBoard] = useState([]);
  const [turn, setTurn] = useState(0);
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
      return
    }
  }

  return (
    <div>
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