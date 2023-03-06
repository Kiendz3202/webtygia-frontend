import React, { useEffect, useState } from 'react';
// import ExchangeRate from './Usd/ExchangeRate';
import ExchangeRate from './ExchangeRate';
import NameHeader from './NameHeader';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styles from '../lineClamp.module.css';
import dynamic from 'next/dynamic';
import { useNewsLatest } from '@services/news/useNews';
import Link from 'next/link';
import Reference from './Reference';
// import Reference from '../Usd/Reference';

const ChartCoin = dynamic(() => import('./ChartCoin'), {
	ssr: false,
});

function Rank1Stock({ rank1WithChartData }) {
	return (
		<div>
			<NameHeader rank1WithChartData={rank1WithChartData} />
			<div className="h-[1px] border border-grey-border w-[calc(95%)] mx-auto my-[1rem]"></div>
			<div className="flex w-full">
				<div className="w-[calc(40%)] mr-[20px]">
					{/* <ExchangeRate data={rank1WithChartData} /> */}
				</div>
				<div className="w-[calc(60%)] ">
					{/* <ChartUsd /> */}
					{/* {rank1WithChartData && (
						<ChartCoin coin={rank1WithChartData} />
					)} */}
				</div>
			</div>
			{/* <Reference /> */}
		</div>
	);
}

export default Rank1Stock;