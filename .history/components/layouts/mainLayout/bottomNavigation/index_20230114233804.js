import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function BottomNavigation() {
	return (
		<div className=" absolute bottom-0 w-full h-[8rem] bg-slate-500">
			<div className="flex text-[1.8rem] justify-between items-center h-full">
				<div>
					<div>
						<HomeIcon />
					</div>
					<div>Trang chủ</div>
				</div>
				<div>
					<div>
						<AttachMoneyIcon />
					</div>
					<div>Thị trường</div>
				</div>
				<div>
					<div>
						<ArticleIcon />
					</div>
					<div>Tin tức</div>
				</div>
				<div>
					<div>
						<PersonIcon />
					</div>
					<div>Cá nhân</div>
				</div>
			</div>
		</div>
	);
}

export default BottomNavigation;
