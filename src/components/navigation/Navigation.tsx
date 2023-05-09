import NavBar from "./NavBar";
import hamburger from "public/hamburger.svg";

interface NavigationI {
	blog?: boolean;
}

export default function Navigation({ blog = false }: NavigationI) {
	return (
		<>
			{/* <SideBar /> */}
			<NavBar imageW={17} imageH={12} blog={blog} navbar leftIcon={hamburger} />
		</>
	);
}
