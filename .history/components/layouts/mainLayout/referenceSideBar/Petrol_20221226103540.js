import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPetrol = async () => {
	return axios
		.get('http://66.42.58.72/api/v1/petrol/petrolimex')
		.then((res) => res.data.data)
		.catch((err) => console.log(err));
};

function Petrol() {
	const { data, isLoading, isError, error, isFetching } = useQuery(
		'petrolimex',
		fetchPetrol,
		{
			// cacheTime: 600000,
			// refetchOnWindowFocus: false,
			// staleTime: 300000,
			refetchInterval: 1800000,
		}
	);

	if (isLoading) {
		return <h2>Đang tải...</h2>;
	}
	if (isError) {
		return <h2>{error.message}</h2>;
	}
	return (
		<div className="pt-[1.5rem] pl-[1.7rem] shadow-shadow-custom rounded-[1rem]">
			<div className="pt-[1.5rem] text-[1.6rem]">
				<p className="text-back-text text-[1.8rem] font-semibold cursor-pointer">
					Giá bán lẻ xăng dầu(VND/LÍT)
				</p>
				<div className="py-[1.5rem]">
					<ul className="grid grid-cols-4 text-grey-text text-[1.4rem] font-semibold">
						<li className=" col-span-2">Sản phẩm</li>
						<li className="ml-[-3rem]">Vùng 1</li>
						<li>Vùng 2</li>
					</ul>
					{data &&
						data.map((petrol) => (
							<div key={petrol.name}>
								<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
									<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
										RON95 III
									</li>
									<li className="text-[1.4rem] font-medium ml-[-3rem]">
										{petrol.ron95III_1}
									</li>
									<li className="text-[1.4rem] font-medium text-price-increase">
										{petrol.ron95III_2}
									</li>
								</ul>
								<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
									<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
										RON95 V
									</li>
									<li className="text-[1.4rem] font-medium ml-[-3rem]">
										{petrol.ron95v_1}
									</li>
									<li className="text-[1.4rem] font-medium text-price-increase">
										{petrol.ron95v_2}
									</li>
								</ul>
								<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
									<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
										RON92 II
									</li>
									<li className="text-[1.4rem] font-medium ml-[-3rem]">
										{petrol.ron92II_1}
									</li>
									<li className="text-[1.4rem] font-medium text-price-increase">
										{petrol.ron92II_2}
									</li>
								</ul>
								<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
									<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
										DO 0,05S-II
									</li>
									<li className="text-[1.4rem] font-medium ml-[-3rem]">
										{petrol.do005SII_1}
									</li>
									<li className="text-[1.4rem] font-medium text-price-increase">
										{petrol.do005SII_2}
									</li>
								</ul>
								<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
									<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
										DO 0,001S-V
									</li>
									<li className="text-[1.4rem] font-medium ml-[-3rem]">
										{petrol.do0001SV_1}
									</li>
									<li className="text-[1.4rem] font-medium text-price-increase">
										{petrol.do0001SV_2}
									</li>
								</ul>
								<ul className="grid grid-cols-4 text-back-text text-[1.4rem] pt-[1.5rem]">
									<li className="text-[1.4rem] font-semibold col-span-2 cursor-pointer hover:opacity-80">
										Dầu hoả
									</li>
									<li className="text-[1.4rem] font-medium ml-[-3rem]">
										{petrol.dauhoa_1}
									</li>
									<li className="text-[1.4rem] font-medium text-price-increase">
										{petrol.dauhoa_2}
									</li>
								</ul>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default Petrol;
