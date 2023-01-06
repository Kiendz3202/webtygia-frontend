import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import { useGold } from '@services/gold/useGold';
import React from 'react';

function DojiView() {
	const { isSuccess, data, isLoading, isError } = useGold('doji');
	const imageURL =
		'https://gigamall.com.vn/data/2019/09/20/16350118_LOGO-DOJI.png';
	const name = 'DOJI';
	return (
		<MainLayout>
			<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
				<div>
					<NameHeader
						name={name}
						image={imageURL}
						timeUpdate={data?.timeUpdate}
					/>
				</div>
			</div>
		</MainLayout>
	);
}

export default DojiView;
