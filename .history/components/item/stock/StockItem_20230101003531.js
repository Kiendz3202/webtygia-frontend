import Link from 'next/link';
import { useRouter } from 'next/router';

function StockItem({ stock, index }) {
	const router = useRouter();
	const path = router.asPath;
	return (
		<tr>
			<td className="w-[4.8rem]  bg-back-ground-1 text-center">
				{stock.symbol}
			</td>
			<td className="w-[16rem] truncate max-w-[16rem]  bg-back-ground-1 text-start pl-[3rem]">
				{stock.name}
			</td>
			<td className=" bg-[#F5F5F5] text-center ">{stock.reference}</td>
			<td className=" bg-back-ground-1 text-center  w-[6rem]">
				{stock.high}
			</td>
			<td className=" bg-back-ground-1 text-center pl-[1rem]">
				{stock.low}
			</td>
			<td className=" bg-back-ground-1 text-center ">{stock.change}</td>
			<td className=" bg-back-ground-1  text-center pl-[1rem]">
				{stock.changePercent}
			</td>
			<td className=" bg-back-ground-1  text-center pl-[1rem]">
				{stock.turnOver}
			</td>
		</tr>
	);
}

export default StockItem;
