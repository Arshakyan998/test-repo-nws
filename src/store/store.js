import { configureStore } from '@reduxjs/toolkit';
import { categories, images } from './';
export const store = configureStore({
  reducer: {
    categories: categories.reducer,
    images: images.reducer,
  },
});
