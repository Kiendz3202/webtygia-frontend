import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function BottomNavigation() {
	return (
		<div className=" absolute bottom-0 w-full h-[8rem] ">
			<div className="flex text-[2rem] justify-between items-center h-full px-[1.5rem] bg-white text-grey-text-2">
				<div className="flex flex-col justify-center items-center text-[#fc032c]">
					<div>
						<HomeIcon sx={{ fontSize: '4rem' }} />
					</div>
					<div>Trang chủ</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div>
						<AttachMoneyIcon sx={{ fontSize: '4rem' }} />
					</div>
					<div>Thị trường</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div>
						<ArticleIcon sx={{ fontSize: '4rem' }} />
					</div>
					<div>Tin tức</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div>
						<PersonIcon sx={{ fontSize: '4rem' }} />
					</div>
					<div>Cá nhân</div>
				</div>
			</div>
		</div>
	);
}

export default BottomNavigation;
