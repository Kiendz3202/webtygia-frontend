import Loading from '@components/UI/Loading';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function VerifyTokenEmail() {
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) return;

		// codes using router.query
		const { userid, token } = router.query;
		const fetchVerifyEmailToken = async () => {
			setIsLoading(true);
			const res = await axios
				.get(`http://localhost:5000/api/v1/${userid}/verify/${token}`)
				.then((res) => res.data)
				.catch((err) => {
					setIsLoading(false);
					setMessage(err.message);
				});
			if (res?.status === 'fail') {
				setIsLoading(false);
				setMessage(res?.message);
				return;
			}
			if (res?.status === 'ok') {
				setIsLoading(false);
				router.push('/authentication');
			}
			setIsLoading(false);
		};
		fetchVerifyEmailToken();
	}, [router.isReady]);
	return (
		<div className="text-center">
			<Loading />
			<span className="text-[22px] font-medium">{message}</span>
		</div>
	);
}

export default VerifyTokenEmail;
