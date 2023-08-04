import { useState, useEffect } from 'react';

import {
  DESKTOP_WINDOW_SIZE,
  DESKTOP_CARDS_CONFIG,
  TABLET_CARDS_CONFIG,
  MOBILE_CARDS_CONFIG,
  MOBILE_WINDOW_SIZE
} from '@utils/constants';
import { useWindowSize } from '@hooks/useWindowSize';

export const useMovieCards = ({ cards }) => {
  const { windowSize } = useWindowSize();
  const [config, setConfig] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (windowSize[0] >= DESKTOP_WINDOW_SIZE) {
      setConfig(DESKTOP_CARDS_CONFIG);
    } else if (windowSize[0] <= MOBILE_WINDOW_SIZE) {
      setConfig(MOBILE_CARDS_CONFIG);
    } else {
      setConfig(TABLET_CARDS_CONFIG);
    }
  }, [windowSize]);

  useEffect(() => {
    if (config) {
      setCount(config.minCount);
    }
  }, [cards, config]);

  const loadCards = () => {
    const { moreCount } = config;
    setCount(currentCount => currentCount + moreCount);
  };

  return { cardsCount: count, loadCards };
};
