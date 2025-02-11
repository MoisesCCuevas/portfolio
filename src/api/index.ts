import axios from 'axios';

const API = axios.create();

export const getData = async () => {
  const response = await API.get('/mockData/mockData.json');
  return response.data;
};
