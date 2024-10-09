import NavBar from "./header/NavBar";
import SideBar from "./sideBar/SideBar";


const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <SideBar />
            {children}
        </div>
    )
}

export default Layout