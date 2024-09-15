import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceWorker from '../serviceWorker';

const { getImages } = serviceWorker();

export const getImagesData = createAsyncThunk(
  'GET/CATS_IMAGES',
  async ({ page = 1, id }, ThunkAPI) => {
    try {
      const data = await getImages(page, id);
      return ThunkAPI.fulfillWithValue(data);
    } catch (error) {
      ThunkAPI.rejectWithValue('unable to access server');
    }
  },
);
