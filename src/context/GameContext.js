import { createContext, useReducer, useContext } from 'react';

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
  switch (action.type) {
    case 'SETUP_GAME':

      let blueRemaining = 8;
      let redRemaining = 8;

      action.blueTurn ? blueRemaining += 1: redRemaining += 1;

      const newCards = cards.map((card, i) => {
        return {
          word: card,
          color: solutions[i],
          revealed: false,
        };
      });

      return {
        cards: newCards,
        blueTurn: action.blueTurn,
        blueRemaining,
        redRemaining,
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
