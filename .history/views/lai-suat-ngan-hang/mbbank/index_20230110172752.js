import MainLayout from '@components/layouts/mainLayout';
import React from 'react';

function MbbankInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('mbbank');
	const imageURL =
		'https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg';
	const name = 'Lãi suất gửi tiết kiệm MB bank mới nhất';
	console.log(data);
	return (
		<MainLayout>
			<div>MbbankInterestView</div>
		</MainLayout>
	);
}

export default MbbankInterestView;
