import './GameBoard.scss'
import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import WordCard from './WordCard';

const GameBoard = ({ admin }) => {

  const [state, dispatch] = useContext(GameContext);

  return (
    <section className='game-board'>
      {state.cards.map((card) => {
        
        return (
          <WordCard
            key={card.word}
            word={card.word}
            color={card.color}
          />
        )
      })}
    </section>
  );

};

export default GameBoard;