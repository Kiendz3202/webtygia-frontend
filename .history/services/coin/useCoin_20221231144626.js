import { useQuery } from 'react-query';
import axios from 'axios';
import { useQueryClient } from 'react-query';

const useCoinList = () => {
	const fetchCoins = async () => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/coin/markets?per_page=100&page=1`
			)
			.then((res) => res.data.data.coinList)
			.catch((err) => console.log(err));
	};

	return useQuery('coinList', fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

const useCoinPriceDetail = (nameId) => {
	const fetchCoins = async () => {
		return axios
			.get(`${process.env.NEXT_PUBLIC_BASE_URL}/coin/detail/${nameId}`)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/coin/detail/${nameId}`, fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

const useCoinDescription = (nameId) => {
	const fetchCoins = async () => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/coin/description/${nameId}`
			)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`getCoinDescription`, fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};

const useCoinChart = (nameId, days) => {
	const fetchCoins = async () => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/coin/chart/${nameId}?days=${days}`
			)
			.then((res) => res.data.data[0].data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/coin/chart/${nameId}?days=${days}`, fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
export { useCoinList, useCoinPriceDetail, useCoinDescription, useCoinChart };

// export const useGetFetchQuery = (key) => {
// 	const queryClient = useQueryClient();

// 	return queryClient.getQueryData(key);
// };
// export default useGetFetchQuery;
