import { useQuery } from 'react-query';
import axios from 'axios';

const useUser = (email) => {
	// let pagePagination = page || 1;
	const fetchNews = async () => {
		return axios
			.get(`http://localhost:5000/api/v1/get-detail-news/${email}`)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/get-detail-news/${email}`, fetchNews, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 3600000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
