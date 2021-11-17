import logo from './logo.svg';
import './App.scss';
import AdminBoard from  './components/AdminBoard';
import PublicBoard from  './components/PublicBoard';
import SetupController from './components/SetupController';
import { GameProvider } from './context/GameContext'

import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/public" exact element={<PublicBoard />} />
        <Route
          path="/"
          element={
            <div className="App">
              <GameProvider>
                <SetupController />
                <AdminBoard />
              </GameProvider>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
