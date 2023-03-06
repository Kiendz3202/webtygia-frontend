import NameHeader from '@components/detail/exchange/usdInManyBanks/NameHeader';
import MainLayout from '@components/layouts/mainLayout';
import ExchangeRateNavigation from '@components/navigation/ExchangeRateNavigation';
import Head from 'next/head';

function TyGiaNgoaiTeView() {
	return (
		<>
			<MainLayout>
				<div className="mt-[1rem] lg:mt-[4.6rem] mb-[2.5rem]">
					<ExchangeRateNavigation />
					<div className=" h-auto   bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<div>
							<NameHeader />
						</div>
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default TyGiaNgoaiTeView;
