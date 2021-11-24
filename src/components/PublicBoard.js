import WordCard from './WordCard';
import useLocalStorageGameState from '../hooks/useLocalStorageGameState';

const PublicBoard = () => {
  const lsGameState = useLocalStorageGameState();
  const cards = lsGameState.cards || [];
  const { showRevealed } = lsGameState;

  console.log({ cards, showRevealed });

  let classNames = 'game-board --public ';
  classNames += showRevealed ? '--show-word' : '--hide-word';


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