import { combineReducers } from '@reduxjs/toolkit';
import uiSlice from './slices/uiSlice';
import dataSlice from './slices/dataSlice';

const rootReducer = combineReducers({
  ui: uiSlice,
  data: dataSlice,
});

export default rootReducer;