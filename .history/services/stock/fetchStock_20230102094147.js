import axios from 'axios';

export const fetchStockDescription = async (symbol, exchangeName) => {
	return axios
		.get(
			`http://66.42.58.72/api/v1/stock/${exchangeName}/description/${nameId}`
		)
		.then((res) => res.data)
		.catch((err) => console.log(err));
};
