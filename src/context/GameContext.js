import { createContext, useReducer, useContext } from 'react';
import shuffleArray from '../utils/shuffleArray';

const cards = [
  'apple',
  'banana',
  'car',
  'dog',
  'elephant',
  'fence',
  'gym',
  'house',
  'intelligence',
  'japan',
  'kindergarten',
  'limousine',
  'mentor',
  'nicaragua',
  'olympics',
  'pencil',
  'queen',
  'rainbow',
  'season',
  'television',
  'underwear',
  'vandalism',
  'waterfall',
  'xylophone',
  'yen',
];
const solutions = [
  'blue',
  'blue',
  'blue',
  'blue',
  'blue',
  'blue',
  'blue',
  'blue',
  'blue',
  'red',
  'red',
  'red',
  'red',
  'red',
  'red',
  'red',
  'red',
  'gray',
  'gray',
  'gray',
  'gray',
  'gray',
  'gray',
  'gray',
  'black',
];

const GameContext = createContext();

const initial = {
  cards: [],
  // firstMoveBlue: true,
  blueTurn: true,
  blueRemaining: 0,
  redRemaining: 0,
};


const gameReducer = (state, action) => {

  let newCards;

  switch (action.type) {

    case 'CLEAR_BOARD':
      window.localStorage.setItem('codenames', JSON.stringify([]));
      return { ...initial };
    case 'SETUP_GAME':

      let blue = 8;
      let red = 9;

      // action.blueTurn ? blueRemaining += 1: redRemaining += 1;
      if (action.blueTurn) [red, blue] = [blue, red];

      newCards = shuffleArray(cards, 8);

      console.log({ newCards });

      newCards = newCards.map((card, i) => {
        return {
          word: card,
          color: solutions[i],
          revealed: false,
        };
      });

      

      window.localStorage.setItem('codenames', JSON.stringify(newCards));

      return {
        cards: newCards,
        blueTurn: action.blueTurn,
        blueRem: blue,
        redRem: red,
      };

    case 'REVEAL_CARD':
      newCards = [...state.cards];
      newCards[action.index].revealed = true;

      window.localStorage.setItem('codenames', JSON.stringify(newCards));

      return {
        ...state,
        cards: newCards,
      };

    default:
      return state;
  }
};

const GameProvider = ({ children }) => {

  const [state, dispatch] = useReducer(gameReducer, initial);


  return (
    <GameContext.Provider value={[ state, dispatch ]}>
      {children}
    </GameContext.Provider>
  );;

};

export { GameContext, GameProvider };
