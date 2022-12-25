import Header from './header';
import MenuSideBar from './menuSideBar';

function MainLayout({ children }) {
	return (
		<div className="container max-w-[69rem] flex justify-between">
			<MenuSideBar />
			<div className=" flex-1">
				<Header />
				<div className="flex justify-between">
					<div className=" bg-white w-full">{children}</div>
					<div className="hidden md:block w-80 bg-slate-600">
						<div>side bar right</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
