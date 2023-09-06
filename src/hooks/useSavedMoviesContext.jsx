import { useContext } from 'react';

import { SavedMoviesContext } from '@context/SavedMoviesContext';

export const useSavedMoviesContext = () => useContext(SavedMoviesContext);
