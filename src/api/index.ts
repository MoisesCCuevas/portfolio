import axios from 'axios';

const API = axios.create();

export const getData = async () => {
  const response = await API.get(process.env.DATA_SERVICE);
  return response.data;
};

export const getProjects = async () => {
  const response = await API.get(process.env.PROJECTS_SERVICE);
  return response.data;
};

export const getSkills= async () => {
  const response = await API.get(process.env.SKILLS_SERVICE);
  return response.data;
};
