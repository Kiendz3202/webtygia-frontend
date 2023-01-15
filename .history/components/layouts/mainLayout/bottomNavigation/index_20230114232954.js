import React from 'react';

function BottomNavigation() {
	const hasWindow = typeof window !== 'undefined';

	const height = hasWindow ? window.innerHeight : null;
	return (
		<div
			className={` absolute top-[${
				height - 50
			}px] w-full h-[50px] bg-slate-500`}
		>
			BottomNavigation
		</div>
	);
}

export default BottomNavigation;
