import React from 'react';

function Header() {
	return (
		<header className=" border-b border-grey-boder flex justify-between h-[8rem]">
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
