import logo from './logo.svg';
import './App.scss';
import AdminBoard from  './components/AdminBoard';
import PublicBoard from  './components/PublicBoard';
import SetupController from './components/SetupController';
import AdminScoreBoard from './components/AdminScoreBoard';
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
              // <div className="App">
              <GameProvider>
                <AdminScoreBoard />
                <SetupController />
                <AdminBoard />
              </GameProvider>
              // </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
