import { useUserCoinReference } from '@services/coin/useCoin';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Reference() {
	const [email, setEmail] = useState();
	const { data, isLoading, isError, error, isFetching } =
		useUserCoinReference(email);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));
	}, [data, typeof window]);
	console.log(data);
	return (
		<div>
			<p className="text-[24px] font-semibold">So sánh với</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-[2rem] bg-grey-4 rounded-[10px] h-[210px] lg:h-[105px]">
				{data &&
					data.data.map((item) => (
						<div className="flex flex-col px-[20px] py-[10px]">
							<p className="text-[16px] font-medium border-b border-grey-boder">
								{item.symbol}
							</p>
							<span className=" text-blue-text text-[22px] font-medium mt-[7px] mb-[6px]">
								{item.currentPrice}
							</span>
							<span className=" text-end text-price-decrease text-[14px] font-medium">
								<Link
									href="/ty-gia-ngoai-te/vietcombank"
									target="_blank"
								>
									<OpenInNewIcon sx={{ fontSize: '2rem' }} />
								</Link>
							</span>
						</div>
					))}
			</div>
		</div>
	);
}

export default Reference;
