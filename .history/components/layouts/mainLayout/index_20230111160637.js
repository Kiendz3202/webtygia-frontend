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
			// if (chartDiv.offsetWidth > 0) {
			// 	chart.applyOptions({
			// 		width: chartDiv?.offsetWidth - 1 || 787,
			// 		height: chartDiv?.offsetHeight || 787,
			// 	});
			// }
		};
	}, []);
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
					<div className="w-full h-full max-w-[110.2rem] mx-auto  sm:mt-[16.3rem]">
						{children}
					</div>
					<ReferenceSideBar />
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
