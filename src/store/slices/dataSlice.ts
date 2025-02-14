import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getData } from "../../api"
import { setLoading } from './uiSlice';

export interface ExperienceType {
  position: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
}

export interface dataState {
  data: {
    title: string;
    name: string;
    photo: string;
    github: string;
    linkedin: string;
    cvUrl: string;
    about: string;
    experience: Array<ExperienceType>;
  } | {};
}

const initialState: dataState = {
  data: {},
};

export const fetchData = createAsyncThunk("data/fetchData", async (_, thunkAPI) => {
  const { dispatch } = thunkAPI;
  dispatch(setLoading(true));
  const response = await getData();
  dispatch(setData(response));
  dispatch(setLoading(false));
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
