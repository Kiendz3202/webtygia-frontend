import LinkIcon from '@mui/icons-material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';

function PriceDetail({ stock }) {
	return (
		<div className="  pb-[4rem]">
			<div className="flex flex-col sm:flex-row justify-between">
				<div>
					<div className="flex h-[10rem] items-center">
						<img src={stock.image} className="w-[6rem] h-[6rem]" />
						<div className="ml-[2.25rem]">
							<h1 className="text-[2.8rem] font-semibold  text-back-text w-fit">
								{stock.name}( {stock.symbol})
								{/* <p className=" text-[1.4rem] text-grey-text">
									#Xếp hạng 1
								</p> */}
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
								+stock.changePercent > 0
									? 'bg-price-increase'
									: 'bg-price-decrease'
							} text-white-text ml-[2rem] h-[3rem] text-center leading-[3rem] w-fit rounded-[0.6rem] text-[1.4rem]`}
						>
							{+2.1 > 0 ? '+' : ''}
							{'2.1'.slice(0, 5)}%
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
			<div className="mt-[3.5rem] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[2rem] text-center">
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						100000
					</p>
					<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
						Vốn hoá
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						348893
					</p>
					<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
						Vốn hoá thị trường pha loãng hoàn toàn
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						32434324
					</p>
					<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
						Lượng cung lưu hành
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						324324
					</p>
					<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
						Tổng cung tối đa
					</p>
				</div>
				<div className="">
					<p className="text-[2rem] font-medium text-back-text">
						32432432
					</p>
					<p className=" text-grey-text-2 text-[1.8rem] font-medium mt-[1rem]">
						Khối lượng giao dịch 24h
					</p>
				</div>
			</div>
		</div>
	);
}

export default PriceDetail;
