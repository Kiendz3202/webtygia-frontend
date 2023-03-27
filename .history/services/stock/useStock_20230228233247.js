import { useQuery } from 'react-query';
import axios from 'axios';

export const useStockList = (nameExchange, page) => {
	const fetchStocks = async (page) => {
		return axios
			.get(
				`${process.env.PRODUCT}/stock/${nameExchange}?per_page=50&page=${page}`
			)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(
		[`stockListHnx/${nameExchange}`, page],
		() => fetchStocks(page),
		{
			cacheTime: 3600000,
			// refetchOnWindowFocus: false,
			staleTime: 900000,
			refetchInterval: 900000,
		}
	);
	// return getlistQuery;
};

export const useStockListHnx = (nameExchange, page) => {
	const fetchStocks = async (page) => {
		return axios
			.get(
				`${process.env.PRODUCT}/stock/${nameExchange}?per_page=50&page=${page}`
			)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(['stockListHnx', page], () => fetchStocks(page), {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 900000,
		refetchInterval: 900000,
	});
	// return getlistQuery;
};

export const useStockListHose = (nameExchange, page) => {
	const fetchStocks = async (page) => {
		return axios
			.get(
				`${process.env.PRODUCT}/stock/${nameExchange}?per_page=50&page=${page}`
			)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(['stockListHose', page], () => fetchStocks(page), {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 900000,
		refetchInterval: 900000,
	});
	// return getlistQuery;
};

export const useStockListHnx30 = (nameExchange, page) => {
	const fetchStocks = async (page) => {
		return axios
			.get(
				`${process.env.PRODUCT}/stock/${nameExchange}?per_page=50&page=${page}`
			)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(['stockListHnx30', page], () => fetchStocks(page), {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 900000,
		refetchInterval: 900000,
	});
	// return getlistQuery;
};

export const useStockListVn30 = (nameExchange, page) => {
	const fetchStocks = async (page) => {
		return axios
			.get(
				`${process.env.PRODUCT}/stock/${nameExchange}?per_page=50&page=${page}`
			)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(['stockListVn30', page], () => fetchStocks(page), {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 900000,
		refetchInterval: 900000,
	});
	// return getlistQuery;
};

export const useStockListUpcom = (nameExchange, page) => {
	const fetchStocks = async (page) => {
		return axios
			.get(
				`${process.env.PRODUCT}/stock/${nameExchange}?per_page=50&page=${page}`
			)
			.then((res) => res.data.data)
			.catch((err) => console.log(err));
	};

	return useQuery(['stockListUpcom', page], () => fetchStocks(page), {
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
			.get(`${process.env.PRODUCT}/stock/${symbol}`)
			.then((res) => res.data.data[0])
			.catch((err) => console.log(err));
	};

	return useQuery(`/stock/${symbol}`, fetchStock, {
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
			.get(`${process.env.PRODUCT}/stock/description/${symbol}`)
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
			.get(`${process.env.PRODUCT}/stock/chart/${symbol}?days=${days}`)
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
			.get(`${process.env.PRODUCT}/exchangeRate/usd-to-vnd`)
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

export const useUserStockReference = (email) => {
	const fetchCoins = async () => {
		return axios
			.post(`${process.env.PRODUCT}/coin/user-coin-reference`, {
				email,
			})
			.then((res) => res.data)
			.catch((err) => console.log(err));
	};

	return useQuery(`/coin/user-coin-reference`, fetchCoins, {
		cacheTime: 3600000,
		// refetchOnWindowFocus: false,
		staleTime: 0,
		// refetchInterval: 5000,
	});
	// return getlistQuery;
};
