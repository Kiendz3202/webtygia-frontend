import StockItem from '@components/item/stock/StockItem';
import { useStockList } from '@services/stock/useStock';

function StockList() {
	const { data, isLoading, isError, error, isFetching } = useCoinList(hnx);
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
				data.map((stock, index) => (
					<CoinItem key={stock.name} stock={stock} index={index} />
				))}
		</>
	);
}

export default StockList;
