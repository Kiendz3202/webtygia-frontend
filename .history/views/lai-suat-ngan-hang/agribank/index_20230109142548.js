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
			<div>AgribankInterestView</div>
		</MainLayout>
	);
}

export default AgribankInterestView;
