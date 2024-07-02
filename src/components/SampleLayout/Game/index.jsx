import { useState, useCallback } from 'react';

import Board from '../Board';

function Game() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), moveLocation: null },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentBoard = history[currentMove].squares;

  const handlePlay = useCallback(
    (nextBoard, moveLocation) => {
      const nextHistory = [
        ...history.slice(0, currentMove + 1),
        { squares: nextBoard, moveLocation },
      ];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    },
    [history, currentMove],
  );

  const jumpTo = useCallback((nextMove) => {
    setCurrentMove(nextMove);
  }, []);

  const moves = history.map((step, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move} (${step.moveLocation})`;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={step.squares.join('')}>
        <button type="button" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          board={currentBoard}
          onPlay={(nextBoard, moveLocation) =>
            handlePlay(nextBoard, moveLocation)
          }
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
