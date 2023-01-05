import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';

function PriceDetail({ stock, description }) {
	// console.log(description);
	return (
		<div className="  pb-[4rem]">
			<div className="flex flex-col sm:flex-row justify-between">
				<div>
					<div className="flex h-[10rem] items-center">
						<img
							src={description.image}
							className="w-auto h-[6rem]"
						/>
						<div className="ml-[2.25rem]">
							<h1 className="text-[2.8rem] font-semibold  text-back-text w-fit">
								{stock.name}( {stock.symbol})
							</h1>
						</div>
					</div>
				</div>
				<div className="">
					<p className="text-[1.6rem] text-grey-text font-semibold">
						Giá {stock.symbol}
					</p>
					<div className="flex items-center">
						<div className="text-black-text-2 text-[4.8rem] font-semibold">
							{stock.currentPrice}
						</div>
						<div
							className={`${
								+stock.changePercent.slice(0, -1) > 0
									? 'bg-price-increase '
									: +stock.changePercent.slice(0, -1) < 0
									? 'bg-price-decrease '
									: ' bg-orange-1 '
							} text-white-text ml-[2rem] h-[3rem] text-center leading-[3rem] w-fit rounded-[0.6rem] text-[1.4rem]`}
						>
							{+stock.changePercent.slice(0, -1) > 0 ? '+' : ''}
							{stock.changePercent == ''
								? '0,00%'
								: stock.changePercent}
						</div>
					</div>
					<div className="flex">
						<div className=" text-grey-text text-[1.8rem] font-medium">
							Cao:
							<span className=" text-black-text-2 ml-[1rem]">
								{stock.high}
							</span>
						</div>
						<div className=" text-grey-text text-[1.8rem] font-medium ml-[1rem]">
							Thấp:
							<span className=" text-black-text-2 ml-[1rem] whitespace-nowrap">
								{stock.low + ' (24h)'}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PriceDetail;
