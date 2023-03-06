import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useExchange } from '@services/exchange/useExchange';

function Reference() {
	const { data, isLoading, isError, error, isFetching } =
		useExchange('vietcombank');
	return (
		<div>
			<p className="text-[24px] font-semibold">So sánh với</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-[2rem] bg-grey-4 rounded-[10px] h-[210px] lg:h-[105px]">
				<div className="flex flex-col px-[20px] py-[10px]">
					<p className="text-[16px] font-medium border-b border-grey-boder">
						Euro (EUR)
					</p>
					<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
						$23,200
					</span>
					<span className=" text-end text-price-decrease text-[14px] font-medium">
						-1.20%{' '}
						<span>
							<ArrowDropDownIcon sx={{ fontSize: '2rem' }} />
						</span>
					</span>
				</div>
				<div className="flex flex-col px-[20px] py-[10px]">
					<p className="text-[16px] font-medium border-b border-grey-boder">
						Nhân dân tệ(CNY)
					</p>
					<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
						$23,200
					</span>
					<span className=" text-end text-price-decrease text-[14px] font-medium">
						-1.20%{' '}
						<span>
							<ArrowDropDownIcon sx={{ fontSize: '2rem' }} />
						</span>
					</span>
				</div>
				<div className="flex flex-col px-[20px] py-[10px]">
					<p className="text-[16px] font-medium border-b border-grey-boder">
						Bitcoin(BTC)
					</p>
					<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
						$23,200
					</span>
					<span className=" text-end text-price-decrease text-[14px] font-medium">
						-1.20%{' '}
						<span>
							<ArrowDropDownIcon sx={{ fontSize: '2rem' }} />
						</span>
					</span>
				</div>
				<div className="flex flex-col px-[20px] py-[10px]">
					<p className="text-[16px] font-medium border-b border-grey-boder">
						Bitcoin(BTC)
					</p>
					<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
						$23,200
					</span>
					<span className=" text-end text-price-decrease text-[14px] font-medium">
						-1.20%{' '}
						<span>
							<ArrowDropDownIcon sx={{ fontSize: '2rem' }} />
						</span>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Reference;
