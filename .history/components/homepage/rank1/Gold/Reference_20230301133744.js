import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useExchange } from '@services/exchange/useExchange';
import Link from 'next/link';

function Reference({ rank1WithChartData }) {
	// const { data, isLoading, isError, error, isFetching } =
	// 	useExchange('vietcombank');
	console.log(rank1WithChartData);
	return (
		<div>
			<p className="text-[24px] font-semibold">So sánh với</p>
		</div>
	);
}

export default Reference;
