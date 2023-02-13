import { useQuery } from 'react-query';
import axios from 'axios';

export const useLogin = (body) => {
	const fetchCoins = async () => {
		return axios
			.post(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, body)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/login`, fetchCoins, {
		cacheTime: Infinity,
		// refetchOnWindowFocus: false,
		staleTime: Infinity,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
