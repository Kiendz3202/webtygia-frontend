import React from 'react';

function DojiPriceTable({ data }) {
	return (
		<div className="w-full">
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-medium text-blue-text">
				<div className=" col-span-2 p-[1rem]">Loại vàng</div>
				<div className=" col-span-2 p-[1rem]">Hà Nội</div>
				<div className=" col-span-2 p-[1rem]">Đà Nẵng</div>
				<div className=" col-span-2 p-[1rem]">Hồ Chí Minh</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-medium ">
				<div className=" col-span-2 p-[1rem]"></div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2 border-t border-opacity-30 border-grey-text">
					<div className=" col-span-1">Mua vào</div>
					<div className=" col-span-1">Bán ra</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2 border-t border-opacity-30 border-grey-text">
					<div className=" col-span-1">Mua vào</div>
					<div className=" col-span-1">Bán ra</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2 border-t border-opacity-30 border-grey-text">
					<div className=" col-span-1">Mua vào</div>
					<div className=" col-span-1">Bán ra</div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">SJC</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.sjcHNBuy}</div>
					<div className=" col-span-1">{data?.sjcHNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.sjcDNBuy}</div>
					<div className=" col-span-1">{data?.sjcDNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.sjcHCMBuy}</div>
					<div className=" col-span-1">{data?.sjcHCMSell}</div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">AVPL</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.AVPLHNBuy}</div>
					<div className=" col-span-1">{data?.AVPLHNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.AVPLDNBuy}</div>
					<div className=" col-span-1">{data?.AVPLDNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.AVPLHCMBuy}</div>
					<div className=" col-span-1">{data?.AVPLHCMSell}</div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">KTT + Kim Giáp</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.KTTKimGiapHNBuy}</div>
					<div className=" col-span-1">{data?.KTTKimGiapHNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">
						{data?.KNTKTTKimGiapDNBuy}
					</div>
					<div className=" col-span-1">
						{data?.KNTKTTKimGiapDNSell}
					</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">
						{data?.KNTKTTKimGiapHCMBuy}
					</div>
					<div className=" col-span-1">
						{data?.KNTKTTKimGiapHCMSell}
					</div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Nhẫn H.T.V</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nhanHTVHNBuy}</div>
					<div className=" col-span-1">{data?.nhanHTVHNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nhanHTVDNBuy}</div>
					<div className=" col-span-1">{data?.nhanHTVDNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nhanHTVHCMBuy}</div>
					<div className=" col-span-1">{data?.nhanHTVHCMSell}</div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Nữ trang 9999</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang9999HNBuy}</div>
					<div className=" col-span-1">{data?.nuTrang9999HNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang9999DNBuy}</div>
					<div className=" col-span-1">{data?.nuTrang9999DNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang9999HCMBuy}</div>
					<div className=" col-span-1">
						{data?.nuTrang9999HCMSell}
					</div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Nữ trang 999</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang999HNBuy}</div>
					<div className=" col-span-1">{data?.nuTrang999HNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang999HCMBuy}</div>
					<div className=" col-span-1">{data?.nuTrang999HCMSell}</div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Nữ trang 99</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang99HNBuy}</div>
					<div className=" col-span-1">{data?.nuTrang99HNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang99HCMBuy}</div>
					<div className=" col-span-1">{data?.nuTrang99HCMSell}</div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Nữ trang 75</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang75DNBuy}</div>
					<div className=" col-span-1">{data?.nuTrang75DNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang75HCMBuy}</div>
					<div className=" col-span-1">{data?.nuTrang75HCMSell}</div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Nữ trang 68</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang68DNBuy}</div>
					<div className=" col-span-1">{data?.nuTrang68DNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Nữ trang 58.3</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang58_3DNBuy}</div>
					<div className=" col-span-1">{data?.nuTrang58_3DNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Nữ trang 18k</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang18kHNBuy}</div>
					<div className=" col-span-1">{data?.nuTrang18kHNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Nữ trang 14k</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang14kHNBuy}</div>
					<div className=" col-span-1">{data?.nuTrang14kHNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
			</div>
			<div className=" grid grid-cols-8 gap-x-[2rem] text-[1.6rem] font-normal border border-opacity-30 border-grey-text rounded-[1rem] mt-[1rem]">
				<div className=" col-span-2 p-[1rem]">Nữ trang 10k</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1">{data?.nuTrang10kHNBuy}</div>
					<div className=" col-span-1">{data?.nuTrang10kHNSell}</div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
				<div className=" col-span-2 p-[1rem] grid grid-cols-2">
					<div className=" col-span-1"></div>
					<div className=" col-span-1"></div>
				</div>
			</div>
		</div>
	);
}

export default DojiPriceTable;
