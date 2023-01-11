import NameHeader from '@components/detail/gold/NameHeader';
import PnjPriceTable from '@components/detail/gold/priceTable/PnjPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import { useGold } from '@services/gold/useGold';
import React from 'react';

function PnjView() {
	const { isSuccess, data, isLoading, isError } = useGold('pnj');
	const imageURL =
		'https://brademar.com/wp-content/uploads/2022/09/PNJ-Logo-PNG-1.png';
	const name = 'PNJ';
	console.log(data);
	return <MainLayout></MainLayout>;
}

export default PnjView;
