import { useStockPreview } from '@services/stock/useStock';
import React from 'react';

function TopPreviewStock() {
	const { data, isLoading, isError, error, isFetching } = useStockPreview();
	console.log(data);
	return (
		<div className="flex">
			{data &&
				[1, 2, 3, 4].map((stock, index) => (
					<div className="bg-[#F5F5F5]"></div>
				))}
		</div>
	);
}

export default TopPreviewStock;
