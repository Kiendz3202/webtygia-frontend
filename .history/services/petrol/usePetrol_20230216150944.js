import { useQuery } from 'react-query';
import axios from 'axios';

export const usePetrolimex = () => {
	const fetchPetrol = async () => {
		return axios
			.get(`http://localhost:5000/api/v1/petrol/petrolimex`)
			.then((res) => res.data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/petrol/petrolime`, fetchPetrol, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 1800000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
