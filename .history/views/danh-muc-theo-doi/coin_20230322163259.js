import React from 'react';

function CoinView() {
	const [email, setEmail] = useState();
	const [populateField, setPopulateField] = useState('followCoins');

	const { dataisSuccess, data, isLoading, isError } =
		useUserPopulate(populateField);

	return (
		<>
			<MainLayout>
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem]  lg:px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
					{populateField === 'followCoins' && (
						<CoinFollowTable
							data={data}
							populateField={populateField}
						/>
					)}

					{isLoading && <Loading />}
				</div>
			</MainLayout>
		</>
	);
}

export default CoinView;
