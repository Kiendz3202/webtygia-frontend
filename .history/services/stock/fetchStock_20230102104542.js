import axios from 'axios';

export const fetchStockDescription = async (symbol) => {
	return axios
		.get(`http://66.42.58.72/api/v1/stock/description/${symbol}`)
		.then((res) => res.data.data[0])
		.catch((err) => console.log(err));
};
