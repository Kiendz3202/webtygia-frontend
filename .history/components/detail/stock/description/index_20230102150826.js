import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FaxIcon from '@mui/icons-material/Fax';
import WebIcon from '@mui/icons-material/Web';

function StockDescription({ description }) {
	return (
		<div className="mt-[3rem]">
			<h2 className="text-[2.4rem] font-semibold text-back-text mt-[2rem]">
				Thông tin về {description.symbol}
			</h2>
			<p className="text-[1.6rem] font-medium text-grey-text-2">
				{description.description}
			</p>
			<h3 className="text-[2rem] font-semibold text-back-text mt-[2rem]">
				Thông tin liên lạc
			</h3>
			<div className="w-[50rem] text-[1.4rem] text-grey-text-2">
				<div className="flex justify-between">
					<div>
						<LocationOnIcon />
						Địa chỉ
					</div>
					<div>{description.address}</div>
				</div>
				<div className="flex justify-between">
					<div>
						<EmailIcon />
						Email
					</div>
					<div>{description.email}</div>
				</div>
				<div className="flex justify-between">
					<div>
						<PhoneIcon />
						Điện thoại
					</div>
					<div>{description.phone}</div>
				</div>
				<div className="flex justify-between">
					<div>
						<FaxIcon />
						Fax
					</div>
					<div>{description.fax}</div>
				</div>
				<div className="flex justify-between">
					<div>
						<WebIcon />
						Website
					</div>
					<div>{description.website}</div>
				</div>
			</div>
		</div>
	);
}

export default StockDescription;
