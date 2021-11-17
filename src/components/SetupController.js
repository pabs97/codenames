import { useContext } from 'react';
import ControllerButton from './ControllerButton';
import { GameContext } from '../context/GameContext';

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
   */


  return (
    <section className='setup-controller'>
      <ControllerButton
        label='create game'
        onClick={() => dispatch({ type: 'SETUP_GAME', blueTurn: false})}
      />
      <ControllerButton
        label='clear board'
        onClick={() => dispatch({ type: 'CLEAR_BOARD' })}
      />
      <ControllerButton
        label='public board'
        onClick={() => window.open('/public', '_blank')}
      />
      <input type="checkbox" id="blue-first" name="blue-first" />
      <label for="blue-first">Blue First</label>
    </section>
  );
};

export default SetupController;