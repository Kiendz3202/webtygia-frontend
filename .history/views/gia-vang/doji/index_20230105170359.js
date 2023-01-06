import NameHeader from '@components/detail/gold/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import React from 'react';

function DojiView() {
	return (
		<MainLayout>
			<div className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
				<div>
					<NameHeader />
				</div>
			</div>
		</MainLayout>
	);
}

export default DojiView;
