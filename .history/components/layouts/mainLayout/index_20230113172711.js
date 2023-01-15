import { useEffect, useState } from 'react';
// import Header from './header';
import MenuSideBar from './menuSideBar';
import ReferenceSideBar from './referenceSideBar';
import dynamic from 'next/dynamic';
import NavigationHeader from './navigationHeader.js';
// const Header = dynamic(() => import('./header/index'), {
// 	ssr: false,
// });
import Header from './header/index';

function MainLayout({ children }) {
	const [marginTop, setMarginTop] = useState();
	useEffect(() => {
		const headerElement = document.getElementById('header');
		window.onresize = function () {
			if (headerElement?.offsetHeight > 0) {
				setMarginTop(headerElement.offsetHeight);
				console.log(headerElement.offsetHeight);
			}
		};
	}, []);
	return (
		<div>
			<div className="relative">
				<div className=" bg-white shadow-shadow-custom">
					<Header />
					<NavigationHeader />
				</div>
				<div className="container">
					<div
						id="main-content"
						className="flex justify-between max-w-[144rem] mx-auto"
					>
						{/* <MenuSideBar /> */}
						{/* max-w-[89.5rem] */}
						{/* sm:mt-[16.3rem] */}
						<div
							className={`w-full  h-full lg:mr-[2rem] mx-auto  `}
						>
							{children}
						</div>
						<ReferenceSideBar />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
