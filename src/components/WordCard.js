import classnames from 'classnames';

const WordCard = ({ word, color, revealed, onClick = () => {} }) => {
  
  const className = classnames(
    'word-card',
    {
      '--blue': color === 'blue',
      '--red': color === 'red',
      '--gray': color === 'gray',
      '--black': color === 'black',
      '--revealed': revealed,
    }
  );

  return (
    <button className={className} onClick={onClick}>
      {word}
    </button>
  );
};

export default WordCard;
