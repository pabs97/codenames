import { useContext, useState } from "react";
import ControllerButton from "./ControllerButton";
import { GameContext } from "../context/GameContext";

const generateNumber = () => Math.ceil(Math.random() * 300);

const SetupController = () => {
  // const state = useContext(GameContext);
  const [state, dispatch] = useContext(GameContext);

  console.log({ state });

  /*
    TODO

    Set up game params
    cardsHash
    solutionsHash
    blueFirst
    
    cardsRevealed

    scoreboard
    single quote lint
   */
  const [config, setConfig] = useState({
    blueTurn: true,
    cardsShuff: generateNumber(),
    solsShuff: generateNumber(),
  });

  // const [showRevealed, setShowRevealed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SETUP_GAME", ...config });
  };

  return (
    <form className="setup-controller" onSubmit={handleSubmit}>
      
      
      
      <div className="setup-controller__input-group">
        <label for="show-revealed-words">Show Revealed Words</label>
        <input
          type="checkbox"
          id="show-revealed-words"
          name="show-revealed-words"
          checked={state.showRevealed}
          onChange={(e) => dispatch({ type: 'TOGGLE_REVEALED_WORDS', showRevealed: !state.showRevealed })}
        />
      </div>

      <div className="setup-controller__input-group">
        <label for="blue-first">Blue First</label>
        <input
          type="checkbox"
          id="blue-first"
          name="blue-first"
          checked={config.blueTurn}
          onChange={(e) => setConfig({ ...config, blueTurn: e.target.checked })}
        />
      </div>

      <div className="setup-controller__input-group">
        <label for="blue-first">Card Shuffle</label>
        <input
          type="number"
          name="cards-shuffle"
          value={config.cardsShuff}
          onChange={(e) => setConfig({ ...config, cardsShuff: e.target.value })}
        />
        <button
          type="button"
          onClick={() => {
            const cardsShuff = generateNumber();
            setConfig({ ...config, cardsShuff });
          }}
        >
          Random
        </button>
      </div>

      <div className="setup-controller__input-group">
        <label for="blue-first">Solutions Shuffle</label>
        <input
          type="number"
          name="sols-shuffle"
          value={config.solsShuff}
          onChange={(e) => setConfig({ ...config, solsShuff: e.target.value })}
        />
        <button
          type="button"
          onClick={() => {
            const solsShuff = generateNumber();
            setConfig({ ...config, solsShuff });
          }}
        >
          Random
        </button>
      </div>

      <button type="submit">Create Game</button>
    </form>
  );

};

export default SetupController;
