import React from 'react';
import ChartUsd from './ChartUsd';
import ExchangeRate from './ExchangeRate';
import NameHeader from './NameHeader';

function Rank1WithChart() {
	return (
		<div>
			<NameHeader />
			<div className="h-[1px] border border-grey-boder w-[calc(90%)] mx-auto my-[1rem]"></div>
			<div className="flex w-full">
				<div className="w-[calc(40%)] mr-[20px]">
					<ExchangeRate />
				</div>
				<div className="w-[calc(60%)] ">
					<ChartUsd />
				</div>
			</div>
			<div>
				<p className="text-[20px]">Quan tâm gần đây</p>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-[2rem] bg-grey-4 rounded-[10px] h-[105px]">
					<div>
						<p>Bitcoin(BTC)</p>
						<span>$23,200</span>
						<span>-1.20%</span>
					</div>
					<div>sdf</div>
					<div>sdaf</div>
					<div>sdf</div>
				</div>
			</div>
		</div>
	);
}

export default Rank1WithChart;
