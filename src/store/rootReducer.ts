import { combineReducers } from '@reduxjs/toolkit';
import uiSlice from './slices/uiSlice';
import dataSlice from './slices/dataSlice';
import projectsSlice from './slices/projectsSlice';

const rootReducer = combineReducers({
  ui: uiSlice,
  data: dataSlice,
  projects: projectsSlice,
});

export default rootReducer;