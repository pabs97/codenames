import logo from './logo.svg';
import './App.scss';
import GameBoard from  './components/GameBoard';
import SetupController from './components/SetupController';
import { GameProvider } from './context/GameContext'

function App() {
  return (
    <div className="App">
      <GameProvider>
          <SetupController />
          <GameBoard />
      </GameProvider>
    </div>
  );
}

export default App;
