import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProjects } from "../../api"
import { setLoading } from './uiSlice';

export interface linkType {
  name: string;
  url: string;
}

export interface projectType {
  img: string;
  title: string;
  description: string;
  tags: Array<string>;
  links: Array<linkType>;
}

export interface projectsState {
  data: Array<projectType> | [];
}

const initialState: projectsState = {
  data: [],
};

export const fetchProjects = createAsyncThunk("projects/fetchProjects", async (_, thunkAPI) => {
  const { dispatch } = thunkAPI;
  dispatch(setLoading(true));
  const response = await getProjects();
  dispatch(setProjects(response));
  dispatch(setLoading(false));
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<projectsState>) => {
      state.data = action.payload.data;
    }
  },
});

export const { setProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
