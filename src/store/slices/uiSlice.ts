import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface uiState {
  theme: string;
  loading: boolean;
  sideMenu: boolean;
}

const initialState: uiState = {
  theme: "dark",
  loading: false,
  sideMenu: false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setLoading : (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSideMenu: (state, action: PayloadAction<boolean>) => {
      state.sideMenu = action.payload;
    }
  },
});

export const { changeTheme, setLoading, setSideMenu } = uiSlice.actions;
export default uiSlice.reducer;
