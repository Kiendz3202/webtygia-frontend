import { useUserCoinReference } from '@services/coin/useCoin';
import React, { useEffect, useState } from 'react';

function Reference() {
	const [email, setEmail] = useState();
	const { data, isLoading, isError, error, isFetching } =
		useUserCoinReference();

	useEffect(() => {
		setEmail(localStorage.getItem('email'));
	}, [data, typeof window]);
	console.log(data);
	return <div>Reference</div>;
}

export default Reference;
