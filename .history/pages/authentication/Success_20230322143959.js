import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function Success() {
	const router = useRouter();
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		window.close();
	// 	}, 1000);
	// }, []);
	// useEffect(() => {
	// 	if (!router.isReady) return;

	// 	// codes using router.query
	// 	const { email, name, avatar, token } = router.query;
	// 	localStorage.setItem('email', email);
	// 	localStorage.setItem('name', name);
	// 	localStorage.setItem('avatar', avatar);
	// 	localStorage.setItem('accessToken', token);
	// 	router.push('/trang-chu');
	// }, [router.isReady]);
	return (
		<div className="text-[22px] font-medium text-center ">
			Đăng nhập thành công
		</div>
	);
}

export default Success;
