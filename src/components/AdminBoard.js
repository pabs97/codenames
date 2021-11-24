import { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import WordCard from './WordCard';
import classnames from 'classnames';

const AdminBoard = () => {
  const [state, dispatch] = useContext(GameContext);

  const classNames = classnames('game-board --admin', {
    '--show-word': state.showRevealed,
    '--hide-word': !state.showRevealed,
  });

  return (
    <section className={classNames}>
      {state.cards.map((card, i) => {
        return (
          <WordCard
            key={card.word}
            word={card.word}
            color={card.color}
            revealed={card.revealed}
            onClick={() => {
              dispatch({
                type: 'REVEAL_CARD',
                index: i,
              });
            }}
          />
        );
      })}
    </section>
  );
};

export default AdminBoard;