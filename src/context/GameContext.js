import { createContext, useReducer } from 'react';
import shuffleArray from '../utils/shuffleArray';

const baseCards = [
  "africa",
  "agent",
  "air",
  "alien",
  "amazon",
  "angel",
  "antarctica",
  "apple",
  "arm",
  "back",
  "band",
  "bank",
  "bark",
  "beach",
  "belt",
  "berlin",
  "berry",
  "board",
  "bond",
  "boom",
  "bow",
  "box",
  "bug",
  "canada",
  "capital",
  "cell",
  "center",
  "china",
  "chocolate",
  "circle",
  "club",
  "compound",
  "copper",
  "crash",
  "cricket",
  "cross",
  "death",
  "dice",
  "dinosaur",
  "doctor",
  "dog",
  "dress",
  "dwarf",
  "eagle",
  "egypt",
  "engine",
  "england",
  "europe",
  "eye",
  "fair",
  "fall",
  "fan",
  "field",
  "file",
  "film",
  "fish",
  "flute",
  "fly",
  "forest",
  "fork",
  "france",
  "gas",
  "ghost",
  "giant",
  "glass",
  "glove",
  "gold",
  "grass",
  "greece",
  "green",
  "ham",
  "head",
  "himalaya",
  "hole",
  "hood",
  "hook",
  "human",
  "horseshoe",
  "hospital",
  "hotel",
  "ice",
  "ice cream",
  "india",
  "iron",
  "ivory",
  "jam",
  "jet",
  "jupiter",
  "kangaroo",
  "ketchup",
  "kid",
  "king",
  "kiwi",
  "knife",
  "knight",
  "lab",
  "lap",
  "laser",
  "lawyer",
  "lead",
  "lemon",
  "limousine",
  "leadlock",
  "log",
  "mammoth",
  "maple",
  "march",
  "mass",
  "mercury",
  "millionaire",
  "model",
  "mole",
  "moscow",
  "mouth",
  "mug",
  "needle",
  "net",
  "new york",
  "night",
  "note",
  "novel",
  "nurse",
  "nut",
  "oil",
  "olive",
  "olympus",
  "opera",
  "orange",
  "paper",
  "park",
  "part",
  "paste",
  "phoenix",
  "piano",
  "telescope",
  "teacher",
  "switch",
  "swing",
  "sub",
  "stick",
  "staff",
  "stadium",
  "sprint",
  "spike",
  "snowman",
  "slip",
  "shot",
  "shadow",
  "server",
  "ruler",
  "row",
  "rose",
  "root",
  "rome",
  "rock",
  "robot",
  "robin",
  "revolution",
  "rat",
  "racket",
  "queen",
  "press",
  "port",
  "pilot",
  "time",
  "tooth",
  "tower",
  "truck",
  "triangle",
  "trip",
  "turkey",
  "undertaker",
  "unicorn",
  "vacuum",
  "van",
  "wake",
  "wall",
  "war",
  "washer",
  "washington",
  "water",
  "wave",
  "well",
  "whale",
  "whip",
  "worm",
  "yard",
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
  showRevealed: false,
};

const gameReducer = (state, action) => {

  let cards;
  let solutions;
  let lsGameState = {}

  switch (action.type) {

    case 'CLEAR_BOARD':
      window.localStorage.setItem('codenames', JSON.stringify({}));
      return { ...initial };
      
    case 'SETUP_GAME':

      let blue = 9;
      let red = 8;
      let showRevealed = false;
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

      lsGameState = { cards, showRevealed };
      window.localStorage.setItem('codenames', JSON.stringify(lsGameState));

      return {
        cards: cards,
        blueTurn: action.blueTurn,
        blueRem: blue,
        redRem: red,
        showRevealed,
      };

    case 'REVEAL_CARD':
      cards = [...state.cards];
      cards[action.index].revealed = true;
      lsGameState = { cards, showRevealed: state.showRevealed };

      window.localStorage.setItem('codenames', JSON.stringify(lsGameState));

      return { ...state, cards };

    case 'TOGGLE_REVEALED_WORDS':
      cards = [...state.cards];
      lsGameState = { cards, showRevealed: action.showRevealed };
      window.localStorage.setItem('codenames', JSON.stringify(lsGameState));
      return { ...state, showRevealed: action.showRevealed };
    
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
