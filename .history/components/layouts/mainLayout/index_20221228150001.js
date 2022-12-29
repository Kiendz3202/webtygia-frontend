import { useEffect } from 'react';
// import Header from './header';
import MenuSideBar from './menuSideBar';
import ReferenceSideBar from './referenceSideBar';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./header/index'), {
	ssr: false,
});

function MainLayout({ children }) {
	return (
		<div className="container max-w-[144rem] p-[1rem]">
			<div className="relative w-full">
				<Header />
				<div
					id="main-content"
					className="flex justify-between bg-back-ground-1 "
				>
					<MenuSideBar />
					<div className="w-full h-full w-full max-w-[89.5rem] mx-auto  xl:ml-[20.7rem] sm:mt-[7.8rem]">
						{children}
					</div>
					<ReferenceSideBar />
				</div>
			</div>
		</div>
	);
}

export default MainLayout;