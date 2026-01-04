import { useState } from "react";

export function Board() {

  const allWinningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [winningCombo, setWinningCombo] = useState(null);

  const handleClick = (index) => {
    if (winner) {
      return
    }

    if (squares[index] !== null) {
      return
    }
  
    const newBoard = [...squares];
    newBoard[index] = player;
    setSquares(newBoard);

    
    allWinningCombos.forEach((combo) => {
      const firstSquare = newBoard[combo[0]]; 

      if (firstSquare !== null &&
      firstSquare === newBoard[combo[1]] &&
      firstSquare === newBoard[combo[2]]) {
        setWinner(firstSquare);
        setWinningCombo(combo);
      }
    });
    
    if (player === "X") {
      setPlayer("O") 
    } else {
      setPlayer("X")
    }
    
  
  
  }

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setPlayer('X');
    setWinner(null);
    setWinningCombo(null);
  }

   

  return (
    <div>
      <div className="mainContainer">
        <h1>Tic-Tac-Toe</h1>
        <div>
          <p className="status">
            {winner === null && !squares.includes(null) 
            ? `It's a draw`
            : winner === null
              ? `Next Player: ${player}`
              : `Winner: ${winner}`}
          </p>
        <div className="board">
          {squares.map((value, index) => (
            <button 
              key={index} 
              className={`square ${winningCombo?.includes(index) ? "winner" : ""}`} 
              onClick={() => handleClick(index)}>{value}
            </button>))}
        </div>
          <button id="reset" className="reset-button" onClick={handleReset}>Reset Game</button>  
        </div>
      </div>
    </div>
  );
}