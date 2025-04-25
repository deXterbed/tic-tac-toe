"use client";

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

export default function Square({ value, onClick }: SquareProps) {
  return (
    <button 
      className="w-20 h-20 border border-gray-400 text-4xl font-bold bg-white hover:bg-gray-100"
      onClick={onClick}
    >
      {value}
    </button>
  );
}