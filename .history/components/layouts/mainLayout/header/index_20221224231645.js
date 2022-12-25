import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Header() {
	return (
		<header className=" border-b border-grey-boder flex justify-between h-[4rem] items-center">
			<div className=" flex-1">
				<ul className="flex">
					<li>
						<SearchIcon className=" w-6 h-7" />
					</li>
					<li className=" w-full">
						<input
							className=" w-full outline-none"
							placeholder="Tìm kiếm"
						/>
					</li>
				</ul>
			</div>
			<div className="w-80">
				<ul className="flex justify-center">
					<li>
						<NotificationsNoneIcon />
					</li>
					<li>avatar</li>
					<li>name</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
