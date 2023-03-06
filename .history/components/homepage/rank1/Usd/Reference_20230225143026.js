import React from 'react';

function Reference() {
	const { data, isLoading, isError, error, isFetching } =
		useExchange('vietcombank');
	return <div>Reference</div>;
}

export default Reference;
