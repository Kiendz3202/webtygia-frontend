import { useQuery } from 'react-query';
import axios from 'axios';

export const useLogin = async (body) => {
	// const fetchCoins = async () => {
	return axios
		.post(`http://localhost:5000/api/v1/login`, body)
		.then((res) => res.data.data)
		.catch((err) => console.log(err));
	// };
};
