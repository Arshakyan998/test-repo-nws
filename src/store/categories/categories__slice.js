import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesData } from './getCategories';

const categoriesSlice = createSlice({
  initialState: {
    categories: [],
    error: '',
    isLoading: true,
    currentCategory: '',
  },
  name: 'CATEGORIES',
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoriesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategoriesData.rejected, (state, action) => {
        state.error = action.payload;
      });

    // [getCategoriesData.fulfilled.type]: (state, action) => {
    //   state.isLoading = false;
    //   state.categories = action.payload;
    // },
    // [getCategoriesData.pending.type]: (state) => {
    //   state.isLoading = true;
    // },
    // [getCategoriesData.rejected.type]: (state, action) => {
    //   state.error = action.payload;
    // },
  },
});

export default categoriesSlice;
