import MainLayout from '@components/layouts/mainLayout';
import ExchangeRateNavigation from '@components/navigation/ExchangeRateNavigation';
import Head from 'next/head';

function TyGiaNgoaiTeView() {
	return (
		<>
			<MainLayout>
				<div className="mt-[4.6rem] mb-[2.5rem]">
					<ExchangeRateNavigation />
				</div>
			</MainLayout>
		</>
	);
}

export default TyGiaNgoaiTeView;
