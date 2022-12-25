import React from 'react';

function Header() {
	return (
		<header className=" border-b border-grey-boder flex justify-between h-20">
			<div>tim kiem</div>
			<div className="flex">
				<div>thong bao</div>
				<div>
					<ul>
						<li>avatar</li>
						<li>name</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
