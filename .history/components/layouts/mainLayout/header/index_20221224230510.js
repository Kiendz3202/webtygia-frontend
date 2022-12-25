import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
	return (
		<header className=" border-b border-grey-boder flex justify-between h-[4rem] items-center">
			<div className=" flex-1">
				<ul className="flex">
					<li>
						<SearchIcon />
					</li>
					<li className="">
						<input className="" placeholder="Tìm kiếm" />
					</li>
				</ul>
			</div>
			<div className="w-80">
				<ul className="flex justify-end">
					<li>thong bao</li>
					<li>avatar</li>
					<li>name</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
