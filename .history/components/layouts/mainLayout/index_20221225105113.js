import Header from './header';
import MenuSideBar from './menuSideBar';
import ReferenceSideBar from './referenceSideBar';

function MainLayout({ children }) {
	return (
		<div className="container max-w-[144rem] flex justify-between">
			<MenuSideBar />
			<div className=" flex-1">
				<Header />
				<div className="flex justify-between">
					<div className=" bg-white ">{children}</div>
					<ReferenceSideBar />
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
