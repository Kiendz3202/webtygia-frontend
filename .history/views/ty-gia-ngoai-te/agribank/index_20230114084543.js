import MainLayout from '@components/layouts/mainLayout';
import { useExchange } from '@services/exchange/useExchange';
import React from 'react';

function AgribankExchangeView() {
	const { isSuccess, data, isLoading, isError } = useExchange('agribank');
	const imageURL =
		'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Agribank-V.png';
	const name = 'Tỷ giá ngoại tệ Agribank mới nhất';
	console.log(data);
	return (
		<MainLayout>
			<div>AgribankExchangeView</div>
		</MainLayout>
	);
}

export default AgribankExchangeView;
