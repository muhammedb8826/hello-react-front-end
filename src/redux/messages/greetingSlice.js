import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const randomGreeting = createAsyncThunk('greeting/getRandomGreeting', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api');
    return response.data.greeting;
  } catch (error) {
    throw error.response.data.error;
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(randomGreeting.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(randomGreeting.fulfilled, (state, action) => {
        state.loading = false;
        state.greeting = action.payload;
      })
      .addCase(randomGreeting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
