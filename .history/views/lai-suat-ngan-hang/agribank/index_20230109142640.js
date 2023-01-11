import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import { useInterest } from '@services/interest/useInterest';
import React from 'react';

function AgribankInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('agribank');
	const imageURL =
		'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Agribank-V.png';
	const name = 'Lãi xuất gửi tiết kiệm Agribank mới nhất';
	console.log(data);
	return (
		<MainLayout>
			{data && (
				<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
					<div>
						<NameHeader
							name={name}
							image={imageURL}
							timeUpdate={data?.timeUpdate}
						/>
					</div>
				</div>
			)}
		</MainLayout>
	);
}

export default AgribankInterestView;
