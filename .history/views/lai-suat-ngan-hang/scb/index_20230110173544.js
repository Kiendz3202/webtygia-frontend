import React from 'react';

function ScbInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('mbbank');
	const imageURL =
		'https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg';
	const name = 'Lãi suất gửi tiết kiệm MB bank mới nhất';
	console.log(data);
	return <div>ScbInterestView</div>;
}

export default ScbInterestView;
