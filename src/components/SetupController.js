import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";

const generateNumber = () => Math.ceil(Math.random() * 300);

const SetupController = () => {
  const [, dispatch] = useContext(GameContext);
  const [config, setConfig] = useState({
    blueTurn: true,
    cardsShuff: generateNumber(),
    solsShuff: generateNumber(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SETUP_GAME", ...config });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="game-controller__input-group">
        <label htmlFor="blue-first">Blue First</label>
        <input
          type="checkbox"
          id="blue-first"
          name="blue-first"
          checked={config.blueTurn}
          onChange={(e) => setConfig({ ...config, blueTurn: e.target.checked })}
        />
      </div>

      <div className="game-controller__input-group">
        <label htmlFor="blue-first">Card Shuffle</label>
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

      <div className="game-controller__input-group">
        <label htmlFor="blue-first">Solutions Shuffle</label>
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
      <div className="game-controller__input-group">
        <button type="submit">Create Game</button>
      </div>
    </form>
  );

};

export default SetupController;
