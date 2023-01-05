import { useQuery } from 'react-query';
import axios from 'axios';

export const useStockList = (nameExchange) => {
	const fetchStocks = async () => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/stock/${nameExchange}?per_page=100&page=1`
			)
			.then((res) => res.data.data.stockList)
			.catch((err) => console.log(err));
	};

	return useQuery('stockList', fetchStocks, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 900000,
		refetchInterval: 900000,
	});
	// return getlistQuery;
};

export const useStockPriceDetail = (symbol) => {
	const fetchStock = async () => {
		return axios
			.get(`${process.env.NEXT_PUBLIC_BASE_URL}/stock/hnx/${symbol}`)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/stock/hnx/${symbol}`, fetchStock, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 900000,
		refetchInterval: 900000,
	});
	// return getlistQuery;
};

export const useStockDescription = (symbol) => {
	const fetchStock = async (symbol) => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/stock/description/${symbol}`
			)
			.then((res) => res.data)
			.catch((err) => console.log(err));
	};

	return useQuery([`getStockDescription`, symbol], () => fetchStock(symbol), {
		cacheTime: Infinity,
		// refetchOnWindowFocus: false,
		staleTime: Infinity,
		// refetchInterval: 10000,
	});
	// return getlistQuery;
};

export const useStockChart = (symbol, days) => {
	const fetchStock = async () => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/stock/chart/${symbol}?days=${days}`
			)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/stock/chart/${symbol}?days=${days}`, fetchStock, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 300000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
