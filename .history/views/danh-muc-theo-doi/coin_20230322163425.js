import CoinFollowTable from '@components/followTable/CoinFollowTable';
import MainLayout from '@components/layouts/mainLayout';
import Loading from '@components/UI/Loading';
import { useUserPopulate } from '@services/user/useUser';
import React, { useState } from 'react';

function CoinView() {
	const [email, setEmail] = useState();
	const [populateField, setPopulateField] = useState('followCoins');

	const { dataisSuccess, data, isLoading, isError } =
		useUserPopulate(populateField);

	return (
		<>
			<MainLayout>
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem]  lg:px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
					<div className="text-[2.8rem] font-semibold">
						Danh mục theo dõi
					</div>

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
