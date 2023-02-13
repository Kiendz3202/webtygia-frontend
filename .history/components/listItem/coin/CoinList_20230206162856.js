import CoinItem from '@components/item/coin/CoinItem';
import { useCoinList } from '@services/coin/useCoin';

function CoinList({ data, isLoading, isError, deleteCoins }) {
	// const { data, isLoading, isError, error, isFetching } = useCoinList();

	if (isLoading) {
		return (
			<tr>
				<td>Đang tải</td>
			</tr>
		);
	}
	if (isError) {
		return (
			<tr>
				<td>{error.message}</td>
			</tr>
		);
	}
	return (
		<>
			{data &&
				data.map((coin, index) => (
					<CoinItem
						deleteCoins={deleteCoins}
						key={coin.nameId}
						coin={coin}
						index={index}
					/>
				))}
		</>
	);
}

export default CoinList;
