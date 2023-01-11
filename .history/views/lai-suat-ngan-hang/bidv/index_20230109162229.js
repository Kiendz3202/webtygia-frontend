import MainLayout from '@components/layouts/mainLayout';
import React from 'react';

function BidvInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('bidv');
	const imageURL =
		'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Agribank-V.png';
	const name = 'Lãi suất gửi tiết kiệm Agribank mới nhất';
	console.log(data);
	return (
		<MainLayout>
			<div>BidvInterestView</div>
		</MainLayout>
	);
}

export default BidvInterestView;
