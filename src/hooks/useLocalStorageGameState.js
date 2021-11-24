import { useEffect, useState } from 'react';

const useLocalStorageGameState = () => {
  const [gameState, setGameState] = useState({});

  const syncLocalStorage = () => {
    const newGameState = window.localStorage.getItem('codenames');

    console.log({newGameState});
    setGameState(JSON.parse(newGameState));
  };
  
  useEffect(() => {
    syncLocalStorage();

    window.addEventListener('storage', syncLocalStorage);

    return () => window.removeEventListener('storage', syncLocalStorage);
  }, []);
  
  return gameState;
};

export default useLocalStorageGameState;