import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function BottomNavigation() {
	return (
		<div className=" absolute bottom-0 w-full h-[8rem] ">
			<div className="flex text-[1.8rem] justify-between items-center h-full px-[1.5rem] bg-white text-grey-text-2">
				<div className="flex flex-col justify-center items-center">
					<div>
						<HomeIcon sx={{ fontSize: '3.5rem' }} />
					</div>
					<div>Trang chủ</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div>
						<AttachMoneyIcon sx={{ fontSize: '3.5rem' }} />
					</div>
					<div>Thị trường</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div>
						<ArticleIcon sx={{ fontSize: '3.5rem' }} />
					</div>
					<div>Tin tức</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div>
						<PersonIcon sx={{ fontSize: '3.5rem' }} />
					</div>
					<div>Cá nhân</div>
				</div>
			</div>
		</div>
	);
}

export default BottomNavigation;
