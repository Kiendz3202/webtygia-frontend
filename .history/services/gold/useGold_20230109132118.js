import { useQuery } from 'react-query';
import axios from 'axios';

export const useGold = (name) => {
	const fetchCoins = async () => {
		return axios
			.get(`${process.env.NEXT_PUBLIC_BASE_URL}/gold/${name}`)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/gold/${name}`, fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 1800000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
