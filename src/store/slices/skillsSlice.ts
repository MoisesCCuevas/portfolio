import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getSkills } from "../../api"
import { setLoading } from './uiSlice';

export interface skillType {
  img: string;
  name: string;
  color: string;
}

export interface projectsState {
  data: {
    others: Array<skillType>;
    frontend: Array<skillType>;
    backend: Array<skillType>;
  };
}

const initialState: projectsState = {
  data: {
    others: [],
    frontend: [],
    backend: [],
  },
};

export const fetchSkills = createAsyncThunk("skills/fetchSkills", async (_, thunkAPI) => {
  const { dispatch } = thunkAPI;
  dispatch(setLoading(true));
  const response = await getSkills();
  dispatch(setSkills(response));
  dispatch(setLoading(false));
});

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setSkills: (state, action: PayloadAction<projectsState>) => {
      state.data = action.payload.data;
    }
  },
});

export const { setSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
