import MainLayout from '@components/layouts/mainLayout';
import ExchangeRateNavigation from '@components/navigation/ExchangeRateNavigation';
import Head from 'next/head';

function TyGiaNgoaiTeView() {
	return (
		<>
			<MainLayout>
				<ExchangeRateNavigation />
			</MainLayout>
		</>
	);
}

export default TyGiaNgoaiTeView;
