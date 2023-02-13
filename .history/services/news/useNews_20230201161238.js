import { useQuery } from 'react-query';
import axios from 'axios';
import { useQueryClient } from 'react-query';

const useNewsList = (page) => {
	// let pagePagination = page || 1;
	const fetchNews = async (page) => {
		return axios
			.get(`http://localhost:5000/api/v1/get-list-news`)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(['newsList', page], () => fetchNews(page), {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 3600000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

export { useNewsList };
