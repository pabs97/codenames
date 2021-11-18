import { createContext, useReducer, useContext } from 'react';
import shuffleArray from '../utils/shuffleArray';

const baseCards = [
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
const baseSolutions = [
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
  solutions: [],
  blueTurn: true,
  blueRem: 0,
  redRem: 0,
};

const gameReducer = (state, action) => {

  let cards;
  let solutions;

  switch (action.type) {

    case 'CLEAR_BOARD':
      window.localStorage.setItem('codenames', JSON.stringify([]));
      return { ...initial };
      
    case 'SETUP_GAME':

      let blue = 9;
      let red = 8;
      solutions = [...baseSolutions];

      // Swap the colors depending on who goes first
      if (!action.blueTurn) {
        [red, blue] = [blue, red];

        solutions = solutions.map((sol => {
          if (sol === 'blue') return 'red';
          if (sol === 'red') return 'blue';
          return sol;
        }))
      }

      cards = shuffleArray(baseCards, action.cardsShuff);
      solutions = shuffleArray(solutions, action.solsShuff);

      cards = cards.map((card, i) => {
        return {
          word: card,
          color: solutions[i],
          revealed: false,
        };
      });

      

      window.localStorage.setItem('codenames', JSON.stringify(cards));

      return {
        cards: cards,
        blueTurn: action.blueTurn,
        blueRem: blue,
        redRem: red,
      };

    case 'REVEAL_CARD':
      cards = [...state.cards];
      cards[action.index].revealed = true;

      window.localStorage.setItem('codenames', JSON.stringify(cards));

      return {
        ...state,
        cards: cards,
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
