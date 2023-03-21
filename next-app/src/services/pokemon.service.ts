import axios from 'axios';
import { API } from "../enum/index";

const api = axios.create({
    baseURL: API.pokeapi
});

export const getPokemon = async (nameOrId: string): Promise<any> => {
  try {
    const response = await api.get(`pokemon/${nameOrId}`);
    return response.data;
  } catch (error) {
    console.log(error); 
  }
};
