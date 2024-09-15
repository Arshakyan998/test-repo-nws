import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceWorker from '../serviceWorker';

const { getCategories } = serviceWorker();
// console.log(getCategories);

export const getCategoriesData = createAsyncThunk('GET/CATEGORIES', async (_, ThunkAPI) => {
  try {
    const data = await getCategories();
    return ThunkAPI.fulfillWithValue(data);
  } catch (error) {
    return ThunkAPI.rejectWithValue('Error unable to access server' + error);
  }
});
