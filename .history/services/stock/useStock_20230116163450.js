import { useQuery } from 'react-query';
import axios from 'axios';

export const useStockList = (nameExchange, page) => {
	const fetchStocks = async (page) => {
		return axios
			.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/stock/${nameExchange}?per_page=50&page=${page}`
			)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(['stockList', page], () => fetchStocks(page), {
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
			.get(`${process.env.NEXT_PUBLIC_BASE_URL}/stock/hose/${symbol}`)
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

export const useUsdToVnd = (symbol, days) => {
	const fetchUsdToVnd = async () => {
		return axios
			.get(`${process.env.NEXT_PUBLIC_BASE_URL}/exchangeRate/usd-to-vnd`)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/exchangeRate/usd-to-vnd`, fetchUsdToVnd, {
		cacheTime: Infinity,
		// refetchOnWindowFocus: false,
		staleTime: 30 * 60 * 1000,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
