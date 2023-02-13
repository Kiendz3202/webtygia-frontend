import CoinFollowTable from '@components/followTable/CoinFollowTable';
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

	console.log(data && data[populateField]);
	return (
		<>
			<MainLayout>
				<div className=" h-auto sm:mt-[4.6rem] mb-[2.5rem]  bg-white-text rounded-[1.5rem]  lg:px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
					<CoinFollowTable data={data} />
				</div>
			</MainLayout>
		</>
	);
}

export default DanhMucTheoDoiView;
