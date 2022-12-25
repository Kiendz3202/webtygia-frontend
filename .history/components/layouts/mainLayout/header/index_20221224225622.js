import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
	return (
		<header className=" border-b border-grey-boder flex justify-between h-[4rem] items-center">
			<div>
				<ul>
					<li>
						<SearchIcon />
					</li>
					<li>input</li>
				</ul>
			</div>
			<div className="flex">
				<ul className="flex">
					<li>thong bao</li>
					<li>avatar</li>
					<li>name</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
