import { useContext } from 'react';
import ControllerButton from './ControllerButton';
import { GameContext } from '../context/GameContext';

const SetupController = () => {

  // const state = useContext(GameContext);
  const [state, dispatch] = useContext(GameContext);

  console.log({ state });


  return (
    <ControllerButton
      label='create game'
      onClick={() => dispatch({ type: 'SETUP_GAME', blueTurn: false})}
    />
  );
};

export default SetupController;