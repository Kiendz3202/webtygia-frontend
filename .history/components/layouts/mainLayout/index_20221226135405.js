import Header from './header';
import MenuSideBar from './menuSideBar';
import ReferenceSideBar from './referenceSideBar';

function MainLayout({ children }) {
	return (
		<div className="container max-w-[144rem] p-[1rem] bg-[#F5F5F5]">
			<div>
				<Header />
				<div className="flex justify-between">
					<MenuSideBar />
					<div className=" bg-white flex-1">{children}</div>
					<ReferenceSideBar />
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
