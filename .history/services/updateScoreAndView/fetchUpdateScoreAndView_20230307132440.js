import axios from 'axios';

export const fetchUpdateScoreAndView = async (
	// email,
	itemId,
	category,
	detailModel
) => {
	try {
		console.log(localStorage.getItem('email'));
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_BASE_URL}/update-score-coins`,
			{
				email: JSON.parse(localStorage.getItem('email')),
				itemId,
				category,
				detailModel,
			}
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};
