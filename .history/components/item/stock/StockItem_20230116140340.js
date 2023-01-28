import Link from 'next/link';
import { useRouter } from 'next/router';

function StockItem({ stock, index }) {
	const router = useRouter();
	const path = router.pathname;
	return (
		<tr
			key={stock.name}
			className=" text-[1.9rem] text-black-text h-[4.5rem] "
		>
			<Link href={`${path}/${stock.symbol}`} className="block ">
				<td className="w-[4.8rem]   text-center text-blue-text font-medium">
					{stock.symbol}
				</td>
			</Link>
			{/* <td className="w-[16rem] truncate max-w-[16rem]   text-start pl-[3rem] cursor-pointer h">
				<Link href={`${path}/${stock.symbol}`}>
					<span className="hover:opacity-80">{stock.name}</span>
				</Link>
			</td> */}
			<td className="  text-center ">{stock.reference}</td>
			<td className="  text-center  w-[6rem]">{stock.high}</td>
			<td className="  text-center pl-[1rem]">{stock.low}</td>
			<td
				className={`${
					+stock.change > 0
						? 'text-price-increase'
						: 'text-price-decrease'
				}   text-center`}
			>
				{stock.change}
			</td>
			<td
				className={`${
					+stock.changePercent.slice(0, -1) > 0
						? 'text-price-increase'
						: 'text-price-decrease'
				}    text-center pl-[1rem]`}
			>
				{stock.changePercent}
			</td>
			<td className="   text-center pl-[1rem]">{stock.turnOver}</td>
		</tr>
	);
}

export default StockItem;
