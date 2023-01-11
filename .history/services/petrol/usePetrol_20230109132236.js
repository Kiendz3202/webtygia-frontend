import { useQuery } from 'react-query';
import axios from 'axios';

export const usePetrolimex = () => {
	const fetchPetrol = async () => {
		return axios
			.get(`${process.env.NEXT_PUBLIC_BASE_URL}/petrol/petrolimex`)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/petrol/petrolimex`, fetchPetrol, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 1800000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
