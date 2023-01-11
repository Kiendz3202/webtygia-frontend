import MainLayout from '@components/layouts/mainLayout';
import { useGold } from '@services/gold/useGold';
import React from 'react';

function BaoTinMinhChauView() {
	const { isSuccess, data, isLoading, isError } = useGold('baoTinMinhChau');
	const imageURL =
		'https://cdnimg.vietnamplus.vn/Uploaded/Subjects/1395653299_1.jpg';
	const name = 'Bảo Tín Minh Châu';
	return (
		<MainLayout>
			<div>BaoTinMinhChauView</div>
		</MainLayout>
	);
}

export default BaoTinMinhChauView;
