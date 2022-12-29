import Header from './header';
import MenuSideBar from './menuSideBar';
import ReferenceSideBar from './referenceSideBar';

function MainLayout({ children }) {
	return (
		<div className="container max-w-[144rem] p-[1rem]">
			<div>
				<Header />
				<div className="flex justify-between">
					<MenuSideBar />
					<div className=" w-auto bg-back-ground-1">{children}</div>
					<ReferenceSideBar />
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
