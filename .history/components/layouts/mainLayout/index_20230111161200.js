import { useEffect, useState } from 'react';
// import Header from './header';
import MenuSideBar from './menuSideBar';
import ReferenceSideBar from './referenceSideBar';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./header/index'), {
	ssr: false,
});

function MainLayout({ children }) {
	const [marginTop, setMarginTop] = useState();
	useEffect(() => {
		const headerElement = document.getElementById('header');
		window.onresize = function () {
			if (headerElement.offsetHeight > 0) {
				setMarginTop(headerElement.offsetHeight);
				console.log(headerElement.offsetHeight);
			}
		};
	}, [marginTop]);
	return (
		<div className="container max-w-[144rem] ">
			<div className="relative">
				<Header />
				<div
					id="main-content"
					className="flex justify-between bg-back-ground-1"
				>
					{/* <MenuSideBar /> */}
					{/* max-w-[89.5rem] */}
					{/* sm:mt-[16.3rem] */}
					<div
						className={`w-full h-full max-w-[110.2rem] mx-auto  sm:mt-[${marginTop}px]`}
					>
						{children}
					</div>
					<ReferenceSideBar />
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
