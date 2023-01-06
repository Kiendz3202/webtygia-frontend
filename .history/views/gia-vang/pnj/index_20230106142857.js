import { useGold } from '@services/gold/useGold';
import React from 'react';

function PnjView() {
	const { isSuccess, data, isLoading, isError } = useGold('pnj');
	const imageURL =
		'https://brademar.com/wp-content/uploads/2022/09/PNJ-Logo-PNG-1.png';
	const name = 'PNJ';
	return <div>PnjView</div>;
}

export default PnjView;
