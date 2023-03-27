import { useStockPreview } from '@services/stock/useStock';
import React from 'react';

function TopPreviewStock() {
	const { data, isLoading, isError, error, isFetching } = useStockPreview();
	console.log(data);
	return (
		<div>
			{data && [1, 2, 3, 4].map((stock, index) => <div>{index}</div>)}
		</div>
	);
}

export default TopPreviewStock;
