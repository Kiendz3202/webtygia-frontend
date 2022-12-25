import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
	return (
		<header className=" border-b border-grey-boder flex justify-between h-[4rem] items-center">
			<div>tim kiem</div>
			<div className="flex">
				<div>thong bao</div>
				<div>
					<ul className="flex">
						<li>avatar</li>
						<li>name</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
