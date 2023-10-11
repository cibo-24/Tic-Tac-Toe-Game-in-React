 import './App.css';
import Board from '../src/components/board';
import { useState } from 'react';

function App() {
  // X ve O oluşturmak için tahtanın bu bilgiyi tutması için oluşturacağımız yapı.
  const [xIsNext, setXIsNext] = useState(true);
  const [bords, setBords] = useState(Array(9).fill(null)); // Array(9).fill(null) dokuz elemanlı dizi oluşturur ve her birini null olarak ayarlar.
  
  function handleClick (i) {
    if (bords[i] || calculateWinner(bords)){
      return;
    }
    if (bords[i]) {
      return;
    }
    const nextSquares = bords.slice ();
    if (xIsNext) {
      nextSquares[i] = "X";
    }else {
      nextSquares[i] = "0";
    }
    setBords(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(bords);
  let status;
  if (winner) {
    status = "Winner:" + winner; 
  }else {
    status = "next Player:" + (xIsNext ? "X" : "0");
  }

  return (
    <>
    <div className='status'>{status}</div>
    <div className='board-row'>
    <Board value={bords[0]} onSquareClick={() => handleClick(0)} />
    <Board value={bords[1]} onSquareClick={() => handleClick(1)} />
    <Board value={bords[2]} onSquareClick={() => handleClick(2)}/>

    </div>
    <div className='board-row'>
    <Board  value={bords[3]} onSquareClick={() => handleClick(3)}/>
    <Board  value={bords[4]} onSquareClick={() => handleClick(4)}/>
    <Board  value={bords[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className='board-row'>
    <Board value={bords[6]} onSquareClick={() => handleClick(6)}/>
    <Board value={bords[7]} onSquareClick={() => handleClick(7)}/>
    <Board value={bords[8]} onSquareClick={() => handleClick(8)}/>
    </div>

    
    </>
    
  );
}

export default App;

// kimin kazanacağını belirliyoruz
function calculateWinner (bords) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let i =0; i< lines.length; i++) {
    const [a,b,c] = lines[i];
    if (bords[a] && bords[a] === bords[b] && bords[a] === bords[c]) {
      return bords[a];
    }
  }
  return null;
}
