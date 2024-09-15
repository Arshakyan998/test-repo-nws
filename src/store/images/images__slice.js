import { createSlice } from '@reduxjs/toolkit';
import { getImagesData } from './getImages';

const imagesSlice = createSlice({
  name: 'CATS/IMAGES',
  initialState: {
    data: [],
    error: '',
    isLoading: false,
    currentId: null,
    currentPage: 1,
    contentLength: 0,
  },
  reducers: {
    pageId: (state, action) => {
      state.currentId = action.payload;
    },
    changeCurrentPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
    initialPage: (state) => {
      state.currentPage = 1;
      if (state.data.length) {
        state.data = [];
      }
    },
    changeContentLength: (state, action) => {
      state.contentLength = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImagesData.fulfilled, (state, action) => {
        state.data = state.data.length ? [...state.data, ...action.payload] : [...action.payload];
        state.isLoading = false;
      })
      .addCase(getImagesData.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getImagesData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
    // [getImagesData.fulfilled.type]: (state, action) => {
    //   state.data = state.data.length ? [...state.data, ...action.payload] : [...action.payload];
    //   state.isLoading = false;
    // },
    // [getImagesData.pending.type]: (state) => {
    //   state.isLoading = true;
    // },
    // [getImagesData.rejected.type]: (state, action) => {
    //   state.error = action.payload;
    //   state.isLoading = false;
    // },
  },
});

export default imagesSlice;
