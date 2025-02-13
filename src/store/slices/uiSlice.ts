import { createSlice } from '@reduxjs/toolkit';

interface uiState {
  theme: string;
}

const initialState: uiState = {
  theme: "dark",
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  },
});

export const { changeTheme } = uiSlice.actions;
export default uiSlice.reducer;
