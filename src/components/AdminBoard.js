import './GameBoard.scss'
import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import WordCard from './WordCard';

const AdminBoard = ({ admin }) => {

  const [state, dispatch] = useContext(GameContext);

  return (
    <section className='game-board --admin'>
      {state.cards.map((card, i) => {
        
        return (
          <WordCard
            key={card.word}
            word={card.word}
            color={card.color}
            revealed
            onClick={() => {
              dispatch({
                type: 'REVEAL_CARD',
                index: i,
              });
            }}
          />
        )
      })}
    </section>
  );

};

export default AdminBoard;