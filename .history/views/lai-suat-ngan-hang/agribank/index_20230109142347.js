import MainLayout from '@components/layouts/mainLayout';
import { useInterest } from '@services/interest/useInterest';
import React from 'react';

function AgribankInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('agribank');
	const imageURL =
		'https://printgo.vn/uploads/file-logo/1/512x512.075e191500b6b0dd513f7d34d8bbfa77.ai.1.png';
	const name = 'Giá vàng SJC';
	console.log(data[0]);
	return (
		<MainLayout>
			<div>AgribankInterestView</div>
		</MainLayout>
	);
}

export default AgribankInterestView;
