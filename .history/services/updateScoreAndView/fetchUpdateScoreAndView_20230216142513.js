export const fetchUpdateScoreAndView = async (
	email,
	itemId,
	category,
	detailModel
) => {
	try {
		const { data } = await axios.post(
			`${process.env.NEXT_PUBLIC_BASE_URL}/update-score-coins`,
			{
				email,
				coinsId,
			}
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};
