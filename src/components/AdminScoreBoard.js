import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const AdminScoreBoard = () => {

  const [state] = useContext(GameContext);


  return (
    <section className="admin-score">
      <h3>Blue Remaining {state.blueRem}</h3>
      <h3>Red Remaining {state.redRem}</h3>
    </section>
  );
};

export default AdminScoreBoard;
