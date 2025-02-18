import { combineReducers } from '@reduxjs/toolkit';
import uiSlice from './slices/uiSlice';
import dataSlice from './slices/dataSlice';
import projectsSlice from './slices/projectsSlice';
import skillsSlice from './slices/skillsSlice';

const rootReducer = combineReducers({
  ui: uiSlice,
  data: dataSlice,
  projects: projectsSlice,
  skills: skillsSlice,
});

export default rootReducer;