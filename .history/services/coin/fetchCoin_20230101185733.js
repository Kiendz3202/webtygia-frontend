import axios from 'axios';

export const fetchCoinDescription = async (nameId) => {
	return axios
		.get(`http://66.42.58.72/api/v1/coin/description/${nameId}`)
		.then((res) => res.data)
		.catch((err) => console.log(err));
};
