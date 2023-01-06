import React from 'react';
import MainLayout from '@components/layouts/mainLayout';
import { useGold } from '@services/gold/useGold';

function PhuQuySjcView() {
	const { isSuccess, data, isLoading, isError } = useGold('phuquysjc');
	const imageURL =
		'https://www.google.com/url?sa=i&url=http%3A%2F%2Fgiavang.phuquygroup.vn%2Fexchange-rates&psig=AOvVaw1hIusCrSTjTtCmY85kfcqA&ust=1673072602653000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjW96SnsvwCFQAAAAAdAAAAABAE';
	const name = 'Phú Quý SJC';
	return (
		<MainLayout>
			<div>PhuQuySjcView</div>
		</MainLayout>
	);
}

export default PhuQuySjcView;
