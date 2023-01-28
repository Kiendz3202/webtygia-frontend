import { useStockList } from '@services/stock/useStock';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function HnxStockView() {
	const [pageNumber, setPageNumber] = useState(1);
	const [exchangeName, setExchangeName] = useState('hnx');
	const router = useRouter();

	const { data, isLoading, isError, error, isFetching } = useStockList(
		exchangeName,
		pageNumber
	);
	return <div>HnxStockView</div>;
}

export default HnxStockView;
