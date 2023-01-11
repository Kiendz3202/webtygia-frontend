import MainLayout from '@components/layouts/mainLayout';
import { useGold } from '@services/gold/useGold';
import React from 'react';

function BaoTinMinhChauView() {
	const { isSuccess, data, isLoading, isError } = useGold('baoTinMinhChau');
	const imageURL =
		'https://gigamall.com.vn/data/2019/09/20/16350118_LOGO-DOJI.png';
	const name = 'DOJI';
	return (
		<MainLayout>
			<div>BaoTinMinhChauView</div>
		</MainLayout>
	);
}

export default BaoTinMinhChauView;
