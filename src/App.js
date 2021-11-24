import './App.scss';
import AdminBoard from  './components/AdminBoard';
import PublicBoard from  './components/PublicBoard';
import GameController from './components/GameController';
import { GameProvider } from './context/GameContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/public" exact element={<PublicBoard />} />
          <Route
            path="/"
            element={
              <GameProvider>
                <GameController />
                <AdminBoard />
              </GameProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
