import Header from './header';
import MenuSideBar from './menuSideBar';
import ReferenceSideBar from './referenceSideBar';

function MainLayout({ children }) {
	return (
		<div className="container max-w-[144rem] p-[1rem]">
			<div>
				<Header />
				<div className="flex justify-between ">
					<MenuSideBar />
					<div className="w-full max-w-[89.5rem] mx-auto bg-back-ground-1 xl:ml-[20.7rem] lg:mt-[7.8rem]">
						{children}
					</div>
					<ReferenceSideBar />
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
