import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getData } from '../../api';

interface dataState {
  data: {
    title: string;
  } | {};
}

const initialState: dataState = {
  data: {},
};

export const fetchData = createAsyncThunk("data/fetchData", async (_, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const response = await getData();
  dispatch(setData(response));
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<dataState>) => {
      state.data = action.payload.data;
    }
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
