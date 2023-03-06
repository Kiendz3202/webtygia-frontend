// import ChartUsd from '@components/chart/foreignCurrency/ChartUsd';
import NameHeader from '@components/detail/exchange/usdInManyBanks/NameHeader';
import ExchangeRate from '@components/detail/stock/exchangeRate';
import MainLayout from '@components/layouts/mainLayout';
import ExchangeRateNavigation from '@components/navigation/ExchangeRateNavigation';
import { useUsdToVnd } from '@services/stock/useStock';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import PriceTable from '@components/detail/exchange/usdInManyBanks/PriceTable';
import { useUser } from '@services/user/useUser';
import { fetchUpdateScoreAndView } from '@services/updateScoreAndView/fetchUpdateScoreAndView';
const ChartUsd = dynamic(
	() => import('../../components/chart/foreignCurrency/ChartUsd'),
	{
		ssr: false,
	}
);

function TyGiaNgoaiTeView() {
	const [email, setEmail] = useState();
	const [user, setUser] = useState();

	const { data, isLoading, isError, error, isFetching } = useUsdToVnd();

	const { data: userFromDb } = useUser(email);

	useEffect(() => {
		setUser(userFromDb);
	}, [typeof window, userFromDb]);

	useEffect(() => {
		setEmail(localStorage.getItem('email'));

		if (email && data) {
			fetchUpdateScoreAndView(
				email,
				data?._id,
				'foreign-currency',
				'ExchangeUsdToVnd'
			);
		}
	}, [typeof window, email, data]);
	return (
		<>
			<MainLayout>
				<div className="mt-[1rem] lg:mt-[4.6rem] mb-[2.5rem]">
					<ExchangeRateNavigation />
					<div className=" h-auto   bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader data={data} />
						</div>
						<div className="mt-[3rem]">
							<ExchangeRate />
						</div>
						<div>
							<ChartUsd />
						</div>
						<div>
							<PriceTable />
						</div>
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default TyGiaNgoaiTeView;
