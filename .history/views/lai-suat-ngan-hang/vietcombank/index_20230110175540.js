import { useInterest } from '@services/interest/useInterest';
import React from 'react';

function VietcombankInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('mbbank');
	const imageURL =
		'https://www.inlogo.vn/vnt_upload/File/Image/logo_VCB_828891.jpg';
	const name = 'Lãi suất gửi tiết kiệm Vietcombank bank mới nhất';
	console.log(data);
	return <div>VietcombankInterestView</div>;
}

export default VietcombankInterestView;
