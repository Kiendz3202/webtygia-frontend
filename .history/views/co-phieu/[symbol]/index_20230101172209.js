import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import MainLayout from '@components/layouts/mainLayout';
import ExchangeRate from '@components/detail/stock/exchangeRate';
// import ChartCoin from '@components/chart/coin/ChartCoin';
import PriceDetail from '@components/detail/stock/priceDetail';

function StockPageDetailView() {
	return (
		<MainLayout>
			<div className='className=" h-auto mt-[4.6rem] mb-[2.5rem] mx-[2.1rem] bg-white-text rounded-[1.5rem] px-[3.2rem] py-[3.2rem] shadow-shadow-custom"'>
				<div>
					{/* priceDetail */}
					<PriceDetail />
					{/* ExchagneRate */}
					<ExchangeRate />
					{/* <ChartCoin coin={{ nameId: 'bitcoin', symbol: 'btc' }} /> */}
				</div>
			</div>
		</MainLayout>
	);
}

export default StockPageDetailView;
