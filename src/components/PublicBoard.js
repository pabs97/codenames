import './GameBoard.scss'
import WordCard from './WordCard';
import useLocalStorageGameState from '../hooks/useLocalStorageGameState';

const PublicBoard = ({ admin }) => {
  const cards = useLocalStorageGameState();

  console.log({ cards });


  return (
    <section className='game-board --public'>
      {cards.map((card, i) => {
        
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