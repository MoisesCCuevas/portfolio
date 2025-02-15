import axios from 'axios';

const API = axios.create();

export const getData = async () => {
  const response = await API.get('/mockData/mockData.json');
  return response.data;
};

export const getProjects = async () => {
  const response = await API.get('/mockData/projectsData.json');
  return response.data;
};
