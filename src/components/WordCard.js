const WordCard = ({ word, color, onClick = () => {} }) => {

  let className = 'word-card';
  if (color) className += ` --${color}`;

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {word}
    </button>
  );
};

export default WordCard;