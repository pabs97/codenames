import { useEffect, useState } from 'react';





const useLocalStorageGameState = () => {
  const [cards, setCards] = useState([]);

  const syncLocalStorage = (event) => {
    // const newCards = window.localStorage.getItem(event.key);
    const newCards = window.localStorage.getItem('codenames');

    console.log({newCards});
    setCards(JSON.parse(newCards));
  };
  
  useEffect(() => {
    syncLocalStorage();

    window.addEventListener('storage', syncLocalStorage);

    return () => window.removeEventListener('storage', syncLocalStorage);
  }, []);
  
  return cards;
};

export default useLocalStorageGameState;