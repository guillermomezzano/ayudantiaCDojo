import NavBar from "./header/NavBar";
import SideBar from "./sideBar/SideBar";
import './layout.css'


const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <SideBar />
            <div className="conteiner">
                {children}
            </div>
        </div>
    )
}

export default Layout