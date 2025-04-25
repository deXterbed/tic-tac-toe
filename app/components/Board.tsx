"use client"; // Required for client-side interactivity

import { useState } from 'react';
import Square from './Square';

export default function Board() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner 
    ? `Winner: ${winner}` 
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  const handleClick = (i: number) => {
    if (winner || squares[i]) return; // Prevent overwrites

    const newSquares = [...squares];
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-xl font-bold">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
}

// Helper to determine the winner
function calculateWinner(squares: string[]): string | null {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}