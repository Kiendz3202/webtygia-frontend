import MainLayout from '@components/layouts/mainLayout';
import CoinList from '@components/listItem/coin/CoinList';
import { useUserPopulate } from '@services/user/useUser';
import Head from 'next/head';
import { useEffect, useState } from 'react';

function DanhMucTheoDoiView() {
	const [email, setEmail] = useState();
	const [user, setUser] = useState();
	const [populateField, setPopulateField] = useState('followCoins');

	const { data } = useUserPopulate('kien@gmail.com', populateField);
	useEffect(() => {
		setEmail(localStorage.getItem('email'));
		setUser(data);
	}, [typeof window, data]);

	console.log(data);
	return (
		<>
			<MainLayout>
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem]  lg:px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
					<div className="overflow-x-auto w-full">
						<table className="w-[99.6rem]  mt-[4rem]">
							<thead className="text-[1.8rem] font-medium h-[4.5rem] text-blue-text">
								<tr>
									<th className="w-[4.8rem]  bg-back-ground-1  border-r border-grey-boder rounded-l-[0.6rem]">
										#
									</th>
									<th className="w-[16rem]  h-[4.5rem] bg-back-ground-1 text-start pl-[3rem]">
										Tên
									</th>
									<th className=" bg-[#F5F5F5] text-start">
										Giá
									</th>
									<th className=" bg-back-ground-1 text-start pl-[1rem]">
										24h%
									</th>
									<th className=" bg-back-ground-1 text-start pl-[1rem]">
										7d%
									</th>
									<th className=" bg-back-ground-1 text-start pl-[3rem]">
										Vốn hoá thị trường
									</th>
									<th className=" bg-back-ground-1 rounded-r-[0.6rem] text-start">
										Khối lượng(24h)
									</th>
								</tr>
							</thead>
							<tbody className="w-full">
								{data && (
									<CoinList data={data[populateField]} />
								)}
							</tbody>
						</table>
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default DanhMucTheoDoiView;
