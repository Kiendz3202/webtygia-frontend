import { useQuery } from 'react-query';
import axios from 'axios';

export const useLogin = async (body) => {
	// const fetchCoins = async () => {
	return axios
		.post(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, body)
		.then((res) => res.data.data)
		.catch((err) => console.log(err));
	// };
};

export const useSignup = async (body) => {
	// const fetchCoins = async () => {
	return axios
		.post(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, body)
		.then((res) => res.data.data)
		.catch((err) => console.log(err));
	// };
};
