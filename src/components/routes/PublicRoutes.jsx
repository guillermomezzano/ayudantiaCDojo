
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
    const token = localStorage.getItem("userToken")

    // si el usuario esta registrado manda al home
    if (token) {
        return <Navigate to="/" />
    }
    return <Outlet />
}

export default PublicRoutes