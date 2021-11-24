import WordCard from './WordCard';
import useLocalStorageGameState from '../hooks/useLocalStorageGameState';
import classnames from "classnames";

const PublicBoard = () => {
  const lsGameState = useLocalStorageGameState();
  const cards = lsGameState.cards || [];
  const { showRevealed } = lsGameState;

  const classNames = classnames("game-board --public", {
    "--show-word": showRevealed,
    "--hide-word": !showRevealed,
  });

  return (
    <section className={classNames}>
      {cards.map((card) => {
        return (
          <WordCard
            key={card.word}
            word={card.word}
            color={card.color}
            revealed={card.revealed}
          />
        )
      })}
    </section>
  );

};

export default PublicBoard;