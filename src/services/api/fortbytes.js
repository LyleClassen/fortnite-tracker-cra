import axios from 'axios'; 
import { API_URL } from './constants';

const FORTBYTE_BASE_URL = `${API_URL}/fortbytes`;

export const getFortBytes = async () => await axios.get(`${FORTBYTE_BASE_URL}/9`);