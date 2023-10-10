import './App.css';
import Board from '../src/components/board';

function App() {
  return (
    <>
    <div className='board-row'>
    <Board />
    <Board  />
    <Board  />

    </div>
    <div className='board-row'>
    <Board   />
    <Board   />
    <Board   />
    </div>
    <div className='board-row'>
    <Board  />
    <Board  />
    <Board  />
    </div>

    
    </>
    
  );
}

export default App;
