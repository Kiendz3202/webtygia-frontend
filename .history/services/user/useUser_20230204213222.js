import { useQuery } from 'react-query';
import axios from 'axios';

const useUser = (email) => {
	if (email) {
		// let pagePagination = page || 1;
		const fetchUser = async () => {
			return axios
				.get(`http://localhost:5000/api/v1/user/${email}`)
				.then((res) => res.data.data)
				.catch((err) => console.log(err));
		};

		return useQuery(`/user/${email}`, fetchUser, {
			cacheTime: 3600000,
			// refetchOnWindowFocus: false,
			staleTime: 3600000,
			// refetchInterval: 5000,
		});
		// return getlistQuery;
	}

	return { data: '' };
};

export { useUser };
