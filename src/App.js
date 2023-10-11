import './App.css';
import Board from '../src/components/board';
import { useState } from 'react';

function App() {
  // X ve O oluşturmak için tahtanın bu bilgiyi tutması için oluşturacağımız yapı.
  const [bords, setBoards] =  useState(Array(9).fill(null)); // Array(9).fill(null) dokuz elemanlı dizi oluşturur ve her birini null olarak ayarlar.
  return (
    <>
    <div className='board-row'>
    <Board value={bords[0]} />
    <Board value={bords[1]} />
    <Board value={bords[2]} />

    </div>
    <div className='board-row'>
    <Board  value={bords[3]} />
    <Board  value={bords[4]} />
    <Board  value={bords[5]} />
    </div>
    <div className='board-row'>
    <Board value={bords[6]} />
    <Board value={bords[7]} />
    <Board value={bords[8]} />
    </div>

    
    </>
    
  );
}

export default App;
