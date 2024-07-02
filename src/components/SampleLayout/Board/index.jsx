import { useCallback } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

function Board({ xIsNext, board, onPlay }) {
  const calculateWinner = (cells) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  };

  const handleClick = useCallback(
    (i) => {
      if (calculateWinner(board) || board[i]) {
        return;
      }
      const nextBoard = board.slice();
      nextBoard[i] = xIsNext ? '🌽' : '🥕';
      onPlay(nextBoard, i);
    },
    [board, xIsNext, onPlay],
  );

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? '🌽' : '🥕'}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={board[0]} onSquareClick={() => handleClick(0)} />
        <Square value={board[1]} onSquareClick={() => handleClick(1)} />
        <Square value={board[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={board[3]} onSquareClick={() => handleClick(3)} />
        <Square value={board[4]} onSquareClick={() => handleClick(4)} />
        <Square value={board[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={board[6]} onSquareClick={() => handleClick(6)} />
        <Square value={board[7]} onSquareClick={() => handleClick(7)} />
        <Square value={board[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

Board.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  board: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  ).isRequired,
  onPlay: PropTypes.func.isRequired,
};

export default Board;
