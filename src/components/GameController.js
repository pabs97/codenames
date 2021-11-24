import { useContext, useState } from "react";
import SetupController from "./SetupController";
import AdminScoreBoard from "./AdminScoreBoard";
import { GameContext } from "../context/GameContext";

const GameController = () => {
  const [state, dispatch] = useContext(GameContext);
  const [setupMenu, setSetupMenu] = useState(true);

  return (
    <section className="game-controller">
      <AdminScoreBoard />
      <div className="game-controller__input-group">
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'TOGGLE_REVEALED_WORDS', showRevealed: !state.showRevealed })
          }}
        >
          {state.showRevealed ? 'Hide' : 'Show'} Revealed Words
        </button>
        <button
          type="button"
          onClick={() => setSetupMenu(!setupMenu)}
        >
          {setupMenu ? 'Hide' : 'Show'} Setup Menu
        </button>
      </div>
      {setupMenu && <SetupController />}
    </section>
  );
};

export default GameController;
