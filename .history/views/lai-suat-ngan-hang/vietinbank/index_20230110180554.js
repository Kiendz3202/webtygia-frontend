import { useInterest } from '@services/interest/useInterest';
import React from 'react';

function VietinbankInterestView() {
	const { isSuccess, data, isLoading, isError } = useInterest('agribank');
	const imageURL =
		'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Agribank-V.pnghttps://scontent.iocvnpt.com/resources/portal/Images/CTO/superadminportal.cto/TienIch/NganHang/VietinBank/vietinbank_637018943312743351.jpg';
	const name = 'Lãi suất gửi tiết kiệm Vietinbank mới nhất';
	console.log(data);
	return <div>VietinbankInterestView</div>;
}

export default VietinbankInterestView;
